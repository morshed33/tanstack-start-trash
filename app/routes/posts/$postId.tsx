import { ErrorComponent, Link, createFileRoute } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound";
import { fetchPost, fetchPostComments } from "~/utils/posts";

export const Route = createFileRoute("/posts/$postId")({
  loader: async ({ params: { postId } }) => {
    const [post, comments] = await Promise.all([
      fetchPost({ data: postId }),
      fetchPostComments({ data: postId }),
    ]);

    return { post, comments };
  },
  errorComponent: PostErrorComponent,
  component: PostComponent,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>;
  },
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const { post, comments } = Route.useLoaderData();

  return (
    <div className="space-y-4 p-20">
      <h4 className="text-xl font-bold">{post.title}</h4>
      <div className="text-sm">{post.body}</div>

      <div className="mt-6">
        <h5 className="text-lg font-semibold">Comments</h5>
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <li key={comment.id} className="border p-2 rounded">
                <strong>{comment.email}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments available.</p>
        )}
      </div>
    </div>
  );
}
