/**
 * @generated SignedSource<<48a6b7eb3c69842dea076b7a98a3e6da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type chat_newChat_Subscription$variables = {};
export type chat_newChat_Subscription$data = {
  readonly newChat: string;
};
export type chat_newChat_Subscription = {
  variables: chat_newChat_Subscription$variables;
  response: chat_newChat_Subscription$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "newChat",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "chat_newChat_Subscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "chat_newChat_Subscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ed967047994612e43958bec622bc0213",
    "id": null,
    "metadata": {},
    "name": "chat_newChat_Subscription",
    "operationKind": "subscription",
    "text": "subscription chat_newChat_Subscription {\n  newChat\n}\n"
  }
};
})();

(node as any).hash = "6d81a0da173ee51287e6379abf24c46c";

export default node;
