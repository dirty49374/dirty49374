import React, { Suspense } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLazyLoadQuery } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { PostId_post_Query } from "./__generated__/PostId_post_Query.graphql";
import PostView from "components/post/PostView";

const PostPage_ = ({ postId }: { postId: string }) => {
  const data = useLazyLoadQuery<PostId_post_Query>(
    graphql`
      query PostId_post_Query($id: ID!) {
        post(id: $id) {
          ...PostView_post_Fragment
        }
      }
    `,
    { id: postId as string }
  );

  if (!data.post) return <>not found</>;

  return <PostView qref={data.post} />;
};

const PostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  if (postId) return <PostPage_ postId={postId as string} />;
  return <></>;
};

export default PostPage;
