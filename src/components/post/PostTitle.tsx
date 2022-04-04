import { InputState, useInputState } from "hooks/useInputState";
import React from "react";

type PostTitleProps = {
  className?: string;
  edit?: "edit" | "preview" | "view";
  title: InputState;
};

const PostTitle: React.FC<PostTitleProps> = ({ className, title, edit }) => {
  if (edit === "edit") {
    return (
      <div className={className}>
        <input className="w-full bg-transparent text-white title-input border-b-slate-200 focus:outline-none" {...title} />
      </div>
    );
  }
  return <h1>{title.value}</h1>;
};

export default PostTitle;
