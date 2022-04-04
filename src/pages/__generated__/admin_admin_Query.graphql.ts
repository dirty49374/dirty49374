/**
 * @generated SignedSource<<2ec8c4760656b1c1fbd195728cc1ad47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type admin_admin_Query$variables = {};
export type admin_admin_Query$data = {
  readonly health: string;
  readonly " $fragmentSpreads": FragmentRefs<"CategoryAdmin_Query_Fragment">;
};
export type admin_admin_Query = {
  variables: admin_admin_Query$variables;
  response: admin_admin_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "health",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "admin_admin_Query",
    "selections": [
      (v0/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CategoryAdmin_Query_Fragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "admin_admin_Query",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ServiceConfig",
        "kind": "LinkedField",
        "name": "serviceConfig",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "categories",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e52e65657e1183b663d7a68045ba3cd0",
    "id": null,
    "metadata": {},
    "name": "admin_admin_Query",
    "operationKind": "query",
    "text": "query admin_admin_Query {\n  health\n  ...CategoryAdmin_Query_Fragment\n}\n\nfragment CategoryAdmin_Query_Fragment on Query {\n  serviceConfig {\n    categories {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8862932cac732ff6e797d0d44945a5d2";

export default node;
