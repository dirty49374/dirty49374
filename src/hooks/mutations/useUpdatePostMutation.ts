import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useUpdatePostMutation_Mutation } from "./__generated__/useUpdatePostMutation_Mutation.graphql";

const useUpdatePostMutation = () => {
  const [commit, isInFlight] =
    useMutation<useUpdatePostMutation_Mutation>(graphql`
      mutation useUpdatePostMutation_Mutation($modify: UpdatePostModifyInput) {
        updatePost(modify: $modify) {
          post {
            id
            title
            type
            category
            content
            postedAt
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

export default useUpdatePostMutation;
