import React from "react";
import { NextPage } from "next";
import { PostListWithSuspense } from "components/post/PostList";
import { useRouter } from "next/router";
import Page from "components/Page";

const PostCategoryPage: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Page>
      <h1>Category: {category}</h1>
      <PostListWithSuspense category={category as string} />
    </Page>
  );
};

export default PostCategoryPage;
