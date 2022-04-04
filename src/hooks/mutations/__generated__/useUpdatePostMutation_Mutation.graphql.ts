/**
 * @generated SignedSource<<8e338d5a6997ed87e00dfa3356c95370>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ContentType = "Markdown" | "PlainText" | "%future added value";
export type UpdatePostModifyInput = {
  id: string;
  title: string;
  category: string;
  content: string;
};
export type useUpdatePostMutation_Mutation$variables = {
  modify?: UpdatePostModifyInput | null;
};
export type useUpdatePostMutation_Mutation$data = {
  readonly updatePost: {
    readonly post: {
      readonly id: string;
      readonly title: string;
      readonly type: ContentType;
      readonly category: string;
      readonly content: string;
      readonly postedAt: any;
      readonly author: {
        readonly id: string;
        readonly name: string;
        readonly avatar: string;
      } | null;
    } | null;
  };
};
export type useUpdatePostMutation_Mutation = {
  variables: useUpdatePostMutation_Mutation$variables;
  response: useUpdatePostMutation_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "modify"
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
        "name": "modify",
        "variableName": "modify"
      }
    ],
    "concreteType": "UpdatePostOutput",
    "kind": "LinkedField",
    "name": "updatePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "postedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar",
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
    "name": "useUpdatePostMutation_Mutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdatePostMutation_Mutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "43b22e70546b8f53f6debe5a7ebd8313",
    "id": null,
    "metadata": {},
    "name": "useUpdatePostMutation_Mutation",
    "operationKind": "mutation",
    "text": "mutation useUpdatePostMutation_Mutation(\n  $modify: UpdatePostModifyInput\n) {\n  updatePost(modify: $modify) {\n    post {\n      id\n      title\n      type\n      category\n      content\n      postedAt\n      author {\n        id\n        name\n        avatar\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20c6de8d314d48f20322a4045a8a1b94";

export default node;
