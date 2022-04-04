import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useCreatePostMutation_Mutation } from "./__generated__/useCreatePostMutation_Mutation.graphql";

export const useCreatePostMutation = () => {
  const [commit, isInFlight] =
    useMutation<useCreatePostMutation_Mutation>(graphql`
      mutation useCreatePostMutation_Mutation($input: CreatePostInput!) {
        createPost(input: $input) {
          post {
            id
            postedAt
            title
            content
            author {
              id
              name
              avatar
            }
          }
        }
      }
    `);

  return { commit, isInFlight };
};
