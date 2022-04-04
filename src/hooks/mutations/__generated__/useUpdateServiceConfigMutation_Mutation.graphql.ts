/**
 * @generated SignedSource<<b9d46bfd35cd099f658d83239ab5dd0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateCategoryConfigInput = {
  categories: ReadonlyArray<CategoryInput>;
};
export type CategoryInput = {
  id: string;
  name: string;
};
export type useUpdateServiceConfigMutation_Mutation$variables = {
  category?: UpdateCategoryConfigInput | null;
};
export type useUpdateServiceConfigMutation_Mutation$data = {
  readonly updateServiceConfig: {
    readonly serviceConfig: {
      readonly id: string;
      readonly categories: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
      }>;
    };
  };
};
export type useUpdateServiceConfigMutation_Mutation = {
  variables: useUpdateServiceConfigMutation_Mutation$variables;
  response: useUpdateServiceConfigMutation_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "category",
        "variableName": "category"
      }
    ],
    "concreteType": "UpdateConfigOutput",
    "kind": "LinkedField",
    "name": "updateServiceConfig",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ServiceConfig",
        "kind": "LinkedField",
        "name": "serviceConfig",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
          }
        ],
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
    "name": "useUpdateServiceConfigMutation_Mutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateServiceConfigMutation_Mutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "52d044b3d5a3793f12fd302ab19c3229",
    "id": null,
    "metadata": {},
    "name": "useUpdateServiceConfigMutation_Mutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateServiceConfigMutation_Mutation(\n  $category: UpdateCategoryConfigInput\n) {\n  updateServiceConfig(category: $category) {\n    serviceConfig {\n      id\n      categories {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "68ab14fb5bd24fe6d42325513b31e9ce";

export default node;
