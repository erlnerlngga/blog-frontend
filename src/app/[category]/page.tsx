import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";

import PaddingContainer from "@/components/layout/padding-container";
import { PostList } from "@/components/post-list";
import { NotFound } from "@/components/not-found";

export function generateStaticParams() {
  return DUMMY_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

interface PropTypes {
  params: { category: string };
}

export default function Page({ params }: PropTypes) {
  const post = DUMMY_POSTS.filter(
    (val) => val.category.title.toLocaleLowerCase() === params.category
  );

  const category = DUMMY_CATEGORIES.find((val) => val.slug === params.category);

  if (post.length === 0 || !category) {
    return <NotFound />;
  }

  return (
    <PaddingContainer>
      <div className="mb-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {category.title}
        </h1>
        <p className="text-xl text-muted-foreground">{category.description}</p>
      </div>
      <PostList posts={post} category />
    </PaddingContainer>
  );
}
