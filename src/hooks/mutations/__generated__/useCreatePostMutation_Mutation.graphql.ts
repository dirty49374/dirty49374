/**
 * @generated SignedSource<<c105a490df3fcee043e80eb9784745f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ContentType = "Markdown" | "PlainText" | "%future added value";
export type CreatePostInput = {
  title: string;
  category: string;
  content: string;
  type: ContentType;
};
export type useCreatePostMutation_Mutation$variables = {
  input: CreatePostInput;
};
export type useCreatePostMutation_Mutation$data = {
  readonly createPost: {
    readonly post: {
      readonly id: string;
      readonly postedAt: any;
      readonly title: string;
      readonly content: string;
      readonly author: {
        readonly id: string;
        readonly name: string;
        readonly avatar: string;
      } | null;
    } | null;
  };
};
export type useCreatePostMutation_Mutation = {
  variables: useCreatePostMutation_Mutation$variables;
  response: useCreatePostMutation_Mutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreatePostOutput",
    "kind": "LinkedField",
    "name": "createPost",
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
            "name": "postedAt",
            "storageKey": null
          },
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
            "name": "content",
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
    "name": "useCreatePostMutation_Mutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreatePostMutation_Mutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "9794d799942b502916ed0bae2a39c7bf",
    "id": null,
    "metadata": {},
    "name": "useCreatePostMutation_Mutation",
    "operationKind": "mutation",
    "text": "mutation useCreatePostMutation_Mutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      postedAt\n      title\n      content\n      author {\n        id\n        name\n        avatar\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3c02384ec61bf59aa5ca314e0bc59ef";

export default node;
