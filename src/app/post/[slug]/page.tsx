import { DUMMY_POSTS } from "@/DUMMY_DATA";

import PaddingContainer from "@/components/layout/padding-container";
import { NotFound } from "@/components/not-found";
import { PostHero } from "@/components/post-hero";
import { SocialLinks } from "@/components/social-links";
import { PostBody } from "@/components/post-body";
import { CTACard } from "@/components/cta-card";

export function generateStaticParams() {
  return DUMMY_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PropTypes {
  params: { slug: string };
}

export default function Page({ params }: PropTypes) {
  const post = DUMMY_POSTS.find((val) => val.slug === params.slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <PaddingContainer>
      <div className="space-y-10">
        <PostHero post={post} />
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="relative">
            <div className="sticky flex items-center md:flex-col gap-5 top-28">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLinks
                isShareURL
                platform="facebook"
                link={`https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_SITE}}/post/${post.slug}}`}
              />
              <SocialLinks
                isShareURL
                platform="twitter"
                link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE}}/post/${post.slug}}`}
              />
              <SocialLinks
                isShareURL
                platform="linkedin"
                link={`https://www.facebook.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE}}/post/${post.slug}`}
              />
            </div>
          </div>

          <PostBody body={post.body} />
        </div>

        <CTACard />
      </div>
    </PaddingContainer>
  );
}
