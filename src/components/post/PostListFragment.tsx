import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay/hooks";
import PostSummary from "./PostSummary";
import { PostListFragment_posts$key } from "./__generated__/PostListFragment_posts.graphql";
import { PostListFragment_posts_PaginationQuery } from "./__generated__/PostListFragment_posts_PaginationQuery.graphql";

type PostListFragmentProps = {
  category?: string;
  qref: PostListFragment_posts$key;
};
export const PostListFragment: React.FC<PostListFragmentProps> = ({
  qref,
  category,
}) => {
  const pagination = usePaginationFragment<
    PostListFragment_posts_PaginationQuery,
    PostListFragment_posts$key
  >(
    graphql`
      fragment PostListFragment_posts on Query
      @refetchable(queryName: "PostListFragment_posts_PaginationQuery")
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 3 }
      ) {
        posts(first: $count, after: $cursor, category: $category)
          @connection(key: "PostListFragment_posts") {
          edges {
            __id
            node {
              ...PostSummary_post_Fragment
            }
          }
        }
      }
    `,
    qref
  );

  const { data, loadNext, hasNext, isLoadingNext } = pagination;

  const { posts } = data;

  return (
    <>
      {posts.edges.map((edge) => (
        <PostSummary key={edge.__id} qref={edge.node} />
      ))}
      {isLoadingNext ? (
        <div>loading next ...</div>
      ) : (
        hasNext && <button onClick={() => loadNext(3)}>NEXT</button>
      )}
    </>
  );
};
