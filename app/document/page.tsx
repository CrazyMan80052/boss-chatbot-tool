import { notFound, redirect } from "next/navigation";
// Markdown rendering
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { auth } from "@/app/(auth)/auth";
import { getDocumentsById } from "@/lib/db/queries";

export default async function DocumentPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!id) {
    return notFound();
  }

  const session = await auth();

  if (!session) {
    // send guests through guest auth flow
    return redirect("/api/auth/guest");
  }

  const documents = await getDocumentsById({ id });
  const [document] = documents;

  if (!document) {
    return notFound();
  }

  // Only allow the owner to view documents for now
  if (document.userId !== session.user.id) {
    return notFound();
  }

  return (
    <main className="mx-auto p-6">
      <h1 className="font-semibold text-2xl">{document.title}</h1>
      <article className="prose dark:prose-invert mt-4">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
        >
          {document.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
