/**
 * @generated SignedSource<<dc8d49a1a6af34c26236d04435b17476>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostListFragment_posts$data = {
  readonly posts: {
    readonly edges: ReadonlyArray<{
      readonly __id: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"PostSummary_post_Fragment">;
      };
    }>;
  };
  readonly " $fragmentType": "PostListFragment_posts";
};
export type PostListFragment_posts$key = {
  readonly " $data"?: PostListFragment_posts$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostListFragment_posts">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "posts"
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "category"
    },
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./PostListFragment_posts_PaginationQuery.graphql')
    }
  },
  "name": "PostListFragment_posts",
  "selections": [
    {
      "alias": "posts",
      "args": [
        {
          "kind": "Variable",
          "name": "category",
          "variableName": "category"
        }
      ],
      "concreteType": "PostConnection",
      "kind": "LinkedField",
      "name": "__PostListFragment_posts_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PostEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Post",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "PostSummary_post_Fragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__id",
                  "storageKey": null
                }
              ]
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "faf4d0919415274fbf9ca16e2ca531f8";

export default node;
