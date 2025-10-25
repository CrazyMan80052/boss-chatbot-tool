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
  // Next's searchParams can be string | string[] | undefined for each key
  // and in some Next versions it may be a Promise that should be awaited.
  searchParams?:
    | { [key: string]: string | string[] | undefined }
    | Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Resolve searchParams whether it's a plain object or a Promise (per Next's warning)
  const params = (await Promise.resolve(searchParams)) as
    | { [key: string]: string | string[] | undefined }
    | undefined;

  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : (rawId as string | undefined);

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
