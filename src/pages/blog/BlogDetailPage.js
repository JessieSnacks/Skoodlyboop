import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiCallsContext";
import { filterBlogPost } from "../../utilities/utilityFunction";
import Container from "../../UI/Container";

const BlogDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const { items } = useContext(ApiContext);
  let content;
  if (items === null) {
    content = <p>...Fetching post</p>;
  } else {
    const item = filterBlogPost(items.data, id);
    console.log("item :>> ", item);
    const blogContentDescription = item[0].aricles.split(".").map((a, i) => (
      <p key={i} className="py-1">
        {a}.
      </p>
    ));
    console.log("blogContentDescription :>> ", blogContentDescription);
    content = (
      <Container>
        <h1>{item[0].titles}</h1>
        <p>{item[0].summary}</p>
        <div className="content">
          <article>{blogContentDescription}</article>
        </div>
      </Container>
    );
  }
  return <section className="py-3">{content}</section>;
};

export default BlogDetailPage;
