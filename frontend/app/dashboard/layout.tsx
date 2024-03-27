import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Layout</div>
      {children}
    </div>
  );
};

export default Layout;
