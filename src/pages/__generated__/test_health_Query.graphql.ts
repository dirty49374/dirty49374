/**
 * @generated SignedSource<<e70999ff2d67693a3696ea455c30be66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type test_health_Query$variables = {};
export type test_health_Query$data = {
  readonly health: string;
};
export type test_health_Query = {
  variables: test_health_Query$variables;
  response: test_health_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "health",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "test_health_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "test_health_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "87d99c8bff8ec43f8e21322527ce208e",
    "id": null,
    "metadata": {},
    "name": "test_health_Query",
    "operationKind": "query",
    "text": "query test_health_Query {\n  health\n}\n"
  }
};
})();

(node as any).hash = "7b7fa801d1187fa3726a96c86c3d9a0a";

export default node;
