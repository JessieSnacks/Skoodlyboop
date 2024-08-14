import React from "react";
import BlogShowCase from "./BlogShowCase";
import ListArticles from "./ListArticles";

import BlogBottomPage from "./BlogBottomPage";
const Blog = () => {
  return (
    <section>
      <h2 className="py-2">Welcome to The Nosh</h2>
      <BlogShowCase />
      <ListArticles />
      <BlogBottomPage />
    </section>
  );
};

export default Blog;
