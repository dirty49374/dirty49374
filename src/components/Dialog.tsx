import classNames from "classnames";
import React, { FC, ReactNode } from "react";

export type DialogProps = {
  className?: string;
  title?: ReactNode;
  children?: ReactNode;
};

const Dialog: FC<DialogProps> = ({ className, title, children }) => (
  <div
    className={classNames(
      "w-full mx-auto max-w-2xl border-2 border-gray-800",
      className
    )}
  >
    <h1 className="mt-2 mx-5 border-b-2 border-gray-800">{title}</h1>
    <div className="my-3 mx-5">{children}</div>
  </div>
);

export default Dialog;
