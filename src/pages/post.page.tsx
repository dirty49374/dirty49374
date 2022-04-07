import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import LoadingButton from "components/LoadingButton";
import Page from "components/Page";
import { useCreatePostMutation } from "hooks/mutations/useCreatePostMutation";
import useErrorState from "hooks/useErrorState";
import { useInputState } from "hooks/useInputState";
import useMe, { afterMe } from "hooks/useMe";
import Router from "next/router";
import React from "react";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type PostPageProps = {};

const PostPage: React.FC<PostPageProps> = ({}) => {
  const { serviceConfig } = useMe({ redirectTo: "/api/auth/signin" });

  const [title] = useInputState("");
  const [content] = useInputState("");
  const [category] = useInputState(serviceConfig?.categories[0].id || "");
  const [error, setError] = useErrorState();

  const createPost = useCreatePostMutation();

  const handlePost = () => {
    setError(null);
    createPost.commit({
      variables: {
        input: {
          type: "Markdown",
          title: title.value,
          category: category.value,
          content: content.value,
        },
      },
      onCompleted: () => {
        Router.push("/");
      },
      onError: setError,
    });
  };

  return (
    <Page>
      <div>
        <input
          className="w-full"
          placeholder="제목을 입력하세요..."
          {...title}
        />
      </div>
      <div className="mt-5">
        <select {...category}>
          {serviceConfig?.categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <MDEditor height={512} minHeight={256} className="h-96" {...content} />
      </div>
      <div>{error}</div>
      <div>
        <LoadingButton loading={createPost.isInFlight} onClick={handlePost}>
          POST
        </LoadingButton>
      </div>
    </Page>
  );
};

export default afterMe(PostPage);
