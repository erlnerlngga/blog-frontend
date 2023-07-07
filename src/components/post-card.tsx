import { PostType } from "@/types/database";
import Image from "next/image";

import { PostContent } from "@/components/post-content";
import { getBlurData } from "@/hooks/getBlurData";

interface PropTypes {
  post: PostType;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

export async function PostCard({
  post,
  layout = "horizontal",
  reverse = false,
}: PropTypes) {
  const image = await getBlurData(post.image);

  return (
    <div
      className={`@container
        ${
          layout === "horizontal"
            ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            : "space-y-10"
        }
      `}
    >
      <Image
        className={`rounded-md w-full object-cover object-center h-full max-h-[250px] md:max-h-[300px] ${
          reverse ? "md:order-last" : ""
        }`}
        alt={post.title}
        src={image.imageUrl}
        width={600}
        height={300}
        placeholder="blur"
        blurDataURL={image.blurDataUrl}
      />
      <PostContent post={post} />
    </div>
  );
}
