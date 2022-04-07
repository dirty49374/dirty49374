/**
 * @generated SignedSource<<21def9ed399193269c28008cbec4cdbb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useChatMutation_Mutation$variables = {
  message: string;
};
export type useChatMutation_Mutation$data = {
  readonly chat: boolean | null;
};
export type useChatMutation_Mutation = {
  variables: useChatMutation_Mutation$variables;
  response: useChatMutation_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "message"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "message",
        "variableName": "message"
      }
    ],
    "kind": "ScalarField",
    "name": "chat",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useChatMutation_Mutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useChatMutation_Mutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "94059e32d31c8a3b16859363309dbfe2",
    "id": null,
    "metadata": {},
    "name": "useChatMutation_Mutation",
    "operationKind": "mutation",
    "text": "mutation useChatMutation_Mutation(\n  $message: String!\n) {\n  chat(message: $message)\n}\n"
  }
};
})();

(node as any).hash = "60669f8bc20c7020ad3a981db5884692";

export default node;
