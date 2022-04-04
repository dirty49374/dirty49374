import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useUpdateServiceConfigMutation_Mutation } from "./__generated__/useUpdateServiceConfigMutation_Mutation.graphql";

const useUpdateServiceConfigMutation = () => {
  const [commit, isInFlight] =
    useMutation<useUpdateServiceConfigMutation_Mutation>(graphql`
      mutation useUpdateServiceConfigMutation_Mutation(
        $category: UpdateCategoryConfigInput
      ) {
        updateServiceConfig(category: $category) {
          serviceConfig {
            id
            categories {
              id
              name
            }
          }
        }
      }
    `);

  return { commit, isInFlight };
};

export default useUpdateServiceConfigMutation;
