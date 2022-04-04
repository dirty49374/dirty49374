import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { InputState } from "hooks/useInputState";
import dynamic from "next/dynamic";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownCode from "./MarkdownCode";
// import MarkDownPreview from '@uiw/react-markdown-preview';

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const MDPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

type PostMarkdownProps = {
  className?: string;
  edit?: "edit" | "preview" | "view";
  content: InputState;
};

const PostMarkdown: React.FC<PostMarkdownProps> = ({
  className,
  content,
  edit,
}) => {
  if (edit === "edit") {
    return (
      <div className={className} data-color-mode="dark">
        <MDEditor
          height={512}
          minHeight={256}
          className="h-96"
          {...content}
          previewOptions={{
            components: {
              code: MarkdownCode,
            },
          }}
        />
      </div>
    );
  }
  return (
    <div className={className} data-color-mode="dark">
      <MDPreview
        className="bg-none"
        source={content.value}
        components={{ code: MarkdownCode }}
      />
    </div>
  );
};

export default PostMarkdown;
