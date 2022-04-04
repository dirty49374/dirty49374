import React, { Suspense } from "react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { PostList_posts_Query } from "./__generated__/PostList_posts_Query.graphql";
import { PostListFragment } from "./PostListFragment";

type PostListProps = {
  category?: string;
};

const PostList: React.FC<PostListProps> = ({ category }) => {
  const data = useLazyLoadQuery<PostList_posts_Query>(
    graphql`
      query PostList_posts_Query($category: String) {
        ...PostListFragment_posts
      }
    `,
    { category },
    { fetchPolicy: "network-only" }
  );

  if (!data) return <div>not found</div>;

  return (
    <div className="posts">
      <PostListFragment qref={data} />
    </div>
  );
};

export default PostList;

export const PostListSuspense = () => <div>loading PostList ...</div>;

export const PostListWithSuspense = (props: PostListProps) => (
  <Suspense fallback={<PostListSuspense />}>
    <PostList {...props} />
  </Suspense>
);
