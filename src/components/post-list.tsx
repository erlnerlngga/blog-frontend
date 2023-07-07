import { PostType } from "@/types/database";
import { PostCard } from "@/components/post-card";

interface PropTypes {
  posts: PostType[];
  layout?: "vertical" | "horizontal";
  category?: boolean;
}

export function PostList({
  posts,
  layout = "vertical",
  category = false,
}: PropTypes) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10  ${
        category ? "lg:grid-cols-3 gap-y-20" : ""
      }`}
    >
      {posts.map((val) => (
        <PostCard key={val.id} post={val} layout={layout} />
      ))}
    </div>
  );
}
