// app/(chat)/api/reports/route.ts
import { auth } from "@/app/(auth)/auth";
import { getMessagesByChatId, saveDocument } from "@/lib/db/queries";
import { generateUUID } from "@/lib/utils";
import { myProvider } from "@/lib/ai/providers";
import { smoothStream, streamText } from "ai";
import { ChatSDKError } from "@/lib/errors";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return new ChatSDKError("bad_request:auth").toResponse();
  }

  const body = await request.json().catch(() => null);
  const chatId = body?.chatId as string | undefined;
  if (!chatId) {
    return new ChatSDKError(
      "bad_request:api",
      "chatId is required"
    ).toResponse();
  }

  // load messages (you may want to limit or filter)
  const messages = await getMessagesByChatId({ id: chatId });

  if (!messages || messages.length === 0) {
    return new ChatSDKError(
      "not_found:chat",
      "Chat messages not found"
    ).toResponse();
  }

  // Build a single string prompt from messages (short format). Trim long content.
  const conversationText = messages
    .map(
      (m) =>
        `${m.role.toUpperCase()}: ${JSON.stringify(m.parts).replace(/\\n/g, " ")}`
    )
    .join("\n\n");

  const prompt = `Create a concise report of the customers issue (2-4 paragraphs + bullet summary)
  - The first line of the report should be what you think the customers issue is with your confidence level. Confidence level can be low, medium or high.
  - The following lines should briefly describe the customers vehicle and any other information about them.
  - add a few bullets explaining the thought process behind the proposed issue.
  - Then create a quick overview of the work that would be needed to resolve the issue. Provide links to manuals or forums if they are available. Provide an estimate of how many hours it would take to fix the issue
  - Finally, create a maximum 5 bullet list summarizing the entire report.

Conversation:
${conversationText}
`;

  // call model and collect the full text (pattern used in artifact handlers)
  let reportContent = "";
  const { fullStream } = streamText({
    model: myProvider.languageModel("artifact-model"), // or choose your chat model id
    system:
      "You are a helpful summarizer of a conversation about a cars mechanical issue. Produce the report described in the prompt.",
    experimental_transform: smoothStream({ chunking: "word" }),
    prompt,
  });

  for await (const delta of fullStream) {
    if (delta.type === "text-delta") {
      reportContent += delta.text;
    }
  }

  // Persist report as a Document
  const docId = generateUUID();
  const title = `Customer Report - ${chatId.substring(0, 8)}`; // or better: use a generated title
  const saved = await saveDocument({
    id: docId,
    title,
    kind: "text",
    content: reportContent,
    userId: session.user.id,
  });

  // return the created document id so client can link to /document?id=<docId>
  return Response.json({ documentId: docId }, { status: 200 });
}