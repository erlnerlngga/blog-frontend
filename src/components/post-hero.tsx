import Image from "next/image";
import { getBlurData } from "@/hooks/getBlurData";

import { PostType } from "@/types/database";
import { PostContent } from "@/components/post-content";

interface PropTypes {
  post: PostType;
}

export async function PostHero({ post }: PropTypes) {
  const image = await getBlurData(post.image);

  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-10"
        src={image.imageUrl}
        width={1200}
        height={500}
        alt={post.title}
        placeholder="blur"
        blurDataURL={image.blurDataUrl}
      />
    </div>
  );
}
