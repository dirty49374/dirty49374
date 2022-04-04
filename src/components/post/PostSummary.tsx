import graphql from "babel-plugin-relay/macro";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useFragment } from "react-relay";
import Avatar from "../Avatar";
import Page from "../Page";
import { PostSummary_post_Fragment$key } from "./__generated__/PostSummary_post_Fragment.graphql";
import remarkGfm from "remark-gfm";
import useMe from "hooks/useMe";
import Link from "next/link";
import useDeletePostMutation from "hooks/mutations/useDeletePostMutation";

type PostSummaryProps = {
  className?: string;
  qref: PostSummary_post_Fragment$key;
};

const PostSummary: React.FC<PostSummaryProps> = ({ qref, className }) => {
  const data = useFragment(
    graphql`
      fragment PostSummary_post_Fragment on Post {
        id
        postedAt
        title
        type
        content
        author {
          id
          name
          avatar
        }
      }
    `,
    qref
  );

  const [summary, setSummary] = useState("");
  useEffect(() => {
    const maxLines = 5;

    const lines = data.content.split(/\r?\n/);
    if (lines.length > maxLines) {
      setSummary(lines.splice(0, maxLines).join("\n") + "\n...\n");
    } else {
      setSummary(data.content);
    }
  }, [data]);

  return (
    <Page className={className}>
      <h1>
        <Link href={`/posts/${data.id}`}>{data.title}</Link>
      </h1>
      <Avatar size="big" uri={data.author?.avatar} />
      <p className="meta text-sm">author: {data.author?.name}</p>
      <p className="meta text-sm">
        postd at: {moment(data.postedAt).format("YYYY-MM-DD HH:mm:ss")}
      </p>
      {data.type === "Markdown" && (
        <ReactMarkdown
          className="prose prose-invert"
          remarkPlugins={[remarkGfm]}
        >
          {summary}
        </ReactMarkdown>
      )}
    </Page>
  );
};

export default PostSummary;
