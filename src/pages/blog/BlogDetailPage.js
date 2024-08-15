import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiCallsContext";
import { filterBlogPost } from "../../utilities/utilityFunction";
import Container from "../../UI/Container";
import classes from "./BlogDetailPage.module.css";
const BlogDetailPage = () => {
  const { article_content, sentence } = classes;
  const params = useParams();
  const id = params.id;
  const { items } = useContext(ApiContext);
  let content;
  if (items === null) {
    content = <p>...Fetching post</p>;
  } else {
    const item = filterBlogPost(items.data, id);
    const blogContentDescription = item[0].articles.split("\n").map((a, i) => (
      <p key={i} className={sentence}>
        {a}
      </p>
    ));

    content = (
      <Container>
        <h1>{item[0].titles}</h1>
        <article className={`${article_content} py-3`}>
          {blogContentDescription}
        </article>
      </Container>
    );
  }
  return <section className="py-3">{content}</section>;
};

export default BlogDetailPage;
