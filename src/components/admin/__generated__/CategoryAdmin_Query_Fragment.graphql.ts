/**
 * @generated SignedSource<<34b965dbc026471d2ff81aa47abf95c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CategoryAdmin_Query_Fragment$data = {
  readonly serviceConfig: {
    readonly categories: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }>;
  };
  readonly " $fragmentType": "CategoryAdmin_Query_Fragment";
};
export type CategoryAdmin_Query_Fragment$key = {
  readonly " $data"?: CategoryAdmin_Query_Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CategoryAdmin_Query_Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryAdmin_Query_Fragment",
  "selections": [
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "1cb88ce76b021cbc186292c6343a4205";

export default node;
