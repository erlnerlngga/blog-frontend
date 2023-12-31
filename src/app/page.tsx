import PaddingContainer from "@/components/layout/padding-container";
import { PostCard } from "@/components/post-card";
import { PostList } from "@/components/post-list";
import { CTACard } from "@/components/cta-card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="flex flex-col space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList posts={DUMMY_POSTS.filter((_, idx) => idx > 0 && idx < 3)} />
        <CTACard />
        <PostCard reverse post={DUMMY_POSTS[3]} />
        <PostList posts={DUMMY_POSTS.filter((_, idx) => idx > 3 && idx < 6)} />
      </main>
    </PaddingContainer>
  );
}
