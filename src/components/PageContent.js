import React from "react";
const PageContent = ({ children, title }) => {
  return (
    <section className="py-3">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default PageContent;
