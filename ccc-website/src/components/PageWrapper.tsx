import React from "react";

function PageWrapper({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div>{children}</div>;
}

export default PageWrapper;
