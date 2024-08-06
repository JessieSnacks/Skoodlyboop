import React from "react";
import BlogShowCase from "./BlogShowCase";
import ListArticles from "./ListArticles";

import data from "../../data/content.json";
import BlogBottomPage from "./BlogBottomPage";
const Blog = () => {
  return (
    <section>
      <h2>Welcome to My Blog</h2>
      <BlogShowCase />
      <ListArticles />
      <BlogBottomPage content={data.blog.content} title={data.blog.title} />
    </section>
  );
};

export default Blog;
