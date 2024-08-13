import React from "react";
import BlogShowCase from "./BlogShowCase";
import ListArticles from "./ListArticles";

import BlogBottomPage from "./BlogBottomPage";
const Blog = () => {
  return (
    <section>
      <h2>Welcome to My Blog</h2>
      <BlogShowCase />
      <ListArticles />
      <BlogBottomPage />
    </section>
  );
};

export default Blog;
