/**
 * @generated SignedSource<<0b67b1da47077362bc5fcee05850cb1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ContentType = "Markdown" | "PlainText" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PostSummary_post_Fragment$data = {
  readonly id: string;
  readonly postedAt: any;
  readonly title: string;
  readonly type: ContentType;
  readonly content: string;
  readonly author: {
    readonly id: string;
    readonly name: string;
    readonly avatar: string;
  } | null;
  readonly " $fragmentType": "PostSummary_post_Fragment";
};
export type PostSummary_post_Fragment$key = {
  readonly " $data"?: PostSummary_post_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostSummary_post_Fragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostSummary_post_Fragment",
  "selections": [
    (v0/*: any*/),
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
      "name": "type",
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
        (v0/*: any*/),
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
  "type": "Post",
  "abstractKey": null
};
})();

(node as any).hash = "c858398a56210f592c738d4a4bfba303";

export default node;
