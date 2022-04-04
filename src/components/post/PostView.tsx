import graphql from "babel-plugin-relay/macro";
import classNames from "classnames";
import useDeletePostMutation from "hooks/mutations/useDeletePostMutation";
import useUpdatePostMutation from "hooks/mutations/useUpdatePostMutation";
import { useInputState } from "hooks/useInputState";
import useMe from "hooks/useMe";
import moment from "moment";
import React, { useState } from "react";
import { useFragment } from "react-relay";
import Avatar from "../Avatar";
import Page from "../Page";
import PostMarkdown from "./PostMarkdown";
import PostTitle from "./PostTitle";
import { PostView_post_Fragment$key } from "./__generated__/PostView_post_Fragment.graphql";

type PostViewProps = {
  className?: string;
  qref: PostView_post_Fragment$key;
};

const PostView: React.FC<PostViewProps> = ({ qref, className }) => {
  const { me } = useMe();

  const data = useFragment(
    graphql`
      fragment PostView_post_Fragment on Post {
        id
        postedAt
        title
        type
        category
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

  const [edit, setEdit] = useState<"edit" | "preview" | "view">("view");

  const title = useInputState(data.title);
  const content = useInputState(data.content);

  const deletePost = useDeletePostMutation();
  const updatePost = useUpdatePostMutation();

  const handleDelete = () => {
    deletePost.commit({
      variables: { input: { id: data.id } },
    });
  };
  const beginEdit = () => {
    title.onChange({ target: { value: data.title } } as any);
    content.onChange({ target: { value: data.content } } as any);
    setEdit("edit");
  };
  const handleUpdate = () => {
    updatePost.commit({
      variables: {
        modify: {
          id: data.id,
          category: data.category,
          title: title.value,
          content: content.value,
        },
      },
      onCompleted: () => setEdit("view"),
    });
  };

  const controlButtons = (
    <>
      <button className="btn-warning btn-xs" onClick={handleDelete}>
        delete
      </button>
      <button onClick={beginEdit} className="btn-warning btn-xs">
        edit
      </button>
    </>
  );

  const isMyPost = data.author?.name && data.author?.name == me?.name;

  return (
    <Page className={classNames("p-5", className)}>
      <PostTitle title={title} edit={edit} />
      <div className="flex flex-row items-center">
        <Avatar size="medium" uri={data.author?.avatar} />
        <div className="flex flex-col justify-center ml-5">
          <p className="meta text-sm">author: {data.author?.name}</p>
          <p className="meta text-sm">
            postd at: {moment(data.postedAt).format("YYYY-MM-DD HH:mm:ss")}
          </p>
          <p className="meta text-sm">
            {isMyPost && edit === "view" && controlButtons}
          </p>
        </div>
      </div>
      <PostMarkdown className="mt-7" edit={edit} content={content} />
      {edit !== "view" && (
        <div className="mt-5">
          <button onClick={handleUpdate} className="mr-2 btn-primary">
            UPDATE
          </button>

          {edit === "edit" ? (
            <button
              onClick={() => setEdit("preview")}
              className="mr-2 btn-primary"
            >
              PREVIEW
            </button>
          ) : (
            <button
              onClick={() => setEdit("edit")}
              className="mr-2 btn-primary"
            >
              EDIT
            </button>
          )}
          <button onClick={() => setEdit("view")} className="mr-2 btn-warning">
            CANCEL
          </button>
        </div>
      )}
      {/* <pre className="mt-10 mb-10">{data.content}</pre> */}
    </Page>
  );
};

export default PostView;
