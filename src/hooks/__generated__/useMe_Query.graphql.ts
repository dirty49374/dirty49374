/**
 * @generated SignedSource<<3cd3781d57c0da00d2ea1532c8cccd73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Role = "Admin" | "Member" | "%future added value";
export type useMe_Query$variables = {};
export type useMe_Query$data = {
  readonly me: {
    readonly id: string;
    readonly userId: string | null;
    readonly name: string | null;
    readonly role: Role | null;
    readonly avatar: string;
    readonly loggedIn: boolean;
  };
  readonly serviceConfig: {
    readonly id: string;
    readonly categories: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }>;
  };
};
export type useMe_Query = {
  variables: useMe_Query$variables;
  response: useMe_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Me",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "role",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatar",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "loggedIn",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ServiceConfig",
    "kind": "LinkedField",
    "name": "serviceConfig",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "useMe_Query",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "useMe_Query",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a122e00ba474ccd274d1c3f187214320",
    "id": null,
    "metadata": {},
    "name": "useMe_Query",
    "operationKind": "query",
    "text": "query useMe_Query {\n  me {\n    id\n    userId\n    name\n    role\n    avatar\n    loggedIn\n  }\n  serviceConfig {\n    id\n    categories {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9bcf4e07feecd25fe6f218248faec7ee";

export default node;
