/**
 * @generated SignedSource<<6034e77e129dc2125156e203a7f0ef51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeletePostInput = {
  id: string;
};
export type useDeletePostMutation_Mutation$variables = {
  input: DeletePostInput;
};
export type useDeletePostMutation_Mutation$data = {
  readonly deletePost: {
    readonly success: boolean;
  };
};
export type useDeletePostMutation_Mutation = {
  variables: useDeletePostMutation_Mutation$variables;
  response: useDeletePostMutation_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeletePostOutput",
    "kind": "LinkedField",
    "name": "deletePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDeletePostMutation_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeletePostMutation_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6a69363c2291760fc5c5fd9e2912935a",
    "id": null,
    "metadata": {},
    "name": "useDeletePostMutation_Mutation",
    "operationKind": "mutation",
    "text": "mutation useDeletePostMutation_Mutation(\n  $input: DeletePostInput!\n) {\n  deletePost(input: $input) {\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "7c06a5731e454818f1aff000ea097a7d";

export default node;
