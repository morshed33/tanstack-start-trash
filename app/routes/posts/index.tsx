import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchPosts } from "~/utils/posts";

export const Route = createFileRoute("/posts/")({
  loader: async () => fetchPosts(),
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);
  return (
    <div className="p-2">
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <p className="size-10 p-10 border">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
