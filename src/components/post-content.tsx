import Link from "next/link";

import { PostType } from "@/types/database";
import { ArrowRight } from "lucide-react";
import { getReadingTime } from "@/lib/utils";
import { getRelativeDate } from "@/lib/utils";

interface PropTypes {
  post: PostType;
  isPostPage?: boolean;
}

export function PostContent({ post, isPostPage = false }: PropTypes) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-teal-400"
              : "text-indigo-400"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-foreground/10" />
        {isPostPage ? (
          <>
            <div className="text-muted-foreground">
              {post.author.first_name} {post.author.last_name}
            </div>
            <div className="w-2 h-2 rounded-full bg-foreground/10" />
          </>
        ) : (
          ""
        )}
        <div className="text-muted-foreground">{getReadingTime(post.body)}</div>
        <div className="w-2 h-2 rounded-full bg-foreground/10" />
        <div className="text-muted-foreground">
          {getRelativeDate(post.date_created)}
        </div>
      </div>

      <h2
        className={
          isPostPage
            ? `scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`
            : `line-clamp-1 text-xl @md:text-2xl @lg:text-3xl font-semibold tracking-tight transition-colors mb-2`
        }
      >
        {post.title}
      </h2>
      <p className="text-base @lg:text-lg text-muted-foreground leading-snug line-clamp-3">
        {post.description}
      </p>

      {isPostPage ? (
        ""
      ) : (
        <Link
          href={`/post/${post.slug}`}
          className="inline-flex items-center gap-2 transition hover:underline hover:underline-offset-4"
        >
          Read Me <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
