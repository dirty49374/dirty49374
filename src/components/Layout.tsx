import React, { ReactNode } from "react";
import HomeNav from "./HomeNav";

type LayoutProps = {
  children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <HomeNav />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
