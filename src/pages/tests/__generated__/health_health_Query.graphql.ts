/**
 * @generated SignedSource<<90883df781fc7d904ea577023d80f886>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type health_health_Query$variables = {};
export type health_health_Query$data = {
  readonly health: string;
};
export type health_health_Query = {
  variables: health_health_Query$variables;
  response: health_health_Query$data;
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
    "name": "health_health_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "health_health_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1039c87ee808d3012fad13459dc7ad7a",
    "id": null,
    "metadata": {},
    "name": "health_health_Query",
    "operationKind": "query",
    "text": "query health_health_Query {\n  health\n}\n"
  }
};
})();

(node as any).hash = "b0f28bd720611b157c94170ad1a8db49";

export default node;
