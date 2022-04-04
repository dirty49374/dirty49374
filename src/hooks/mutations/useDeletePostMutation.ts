import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useDeletePostMutation_Mutation } from "./__generated__/useDeletePostMutation_Mutation.graphql";

const useDeletePostMutation = () => {
  const [commit, isInFlight] = useMutation<useDeletePostMutation_Mutation>(graphql`
    mutation useDeletePostMutation_Mutation($input: DeletePostInput!) {
      deletePost(input: $input) {
        success
      }
    }
  `);

  return { commit, isInFlight };
};

export default useDeletePostMutation;

