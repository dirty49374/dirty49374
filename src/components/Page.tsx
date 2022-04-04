import classNames from "classnames";
import React, { ReactNode } from "react";

type PageProps = {
  className?: string;
  children?: ReactNode;
};

const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div className={classNames("w-full max-w-4xl p-5", className)}>
      {children}
    </div>
  );
};

export default Page;
