import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useChatMutation_Mutation } from "./__generated__/useChatMutation_Mutation.graphql";

const useChatMutation = () => {
  const [commit, isInFlight] = useMutation<useChatMutation_Mutation>(graphql`
    mutation useChatMutation_Mutation($message: String!) {
      chat(message: $message)
    }
  `);

  return { commit, isInFlight };
};

export default useChatMutation;
