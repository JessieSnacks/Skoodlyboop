import React, { useContext } from "react";
import reactStringReplace from "react-string-replace";

import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../context/ApiCallsContext";
import {
  filterBlogPost,
  linksObject,
  searchAlgo,
} from "../../utilities/utilityFunction";
import classes from "./BlogDetailPage.module.css";
const BlogDetailPage = () => {
  const { article_content, sentence, link_under } = classes;
  const params = useParams();
  const id = params.id;
  const { items } = useContext(ApiContext);
  let content;
  if (items === null) {
    content = <p>...Fetching post</p>;
  } else {
    const item = filterBlogPost(items.data, id);
    const linksFormat = linksObject(item[0].links);
    const matchingLinks = searchAlgo(item[0].articles, linksFormat);
    let articleToManipulate = item[0].articles.slice();

    let replaceStr = articleToManipulate;

    const blogContentDescription = replaceStr.split("\n").map((a, i) => {
      matchingLinks.forEach((link) => {
        const stringReplaced = link["key"];
        a = reactStringReplace(a, stringReplaced, (match, i) => (
          <Link to={link["value"]} key={match + i}>
            <span className={link_under} key={stringReplaced + i}>
              {link["key"]}
            </span>
          </Link>
        ));
      });

      return (
        <p key={i} className={sentence}>
          {a}
        </p>
      );
    });
    content = (
      <>
        <h1>{item[0].titles}</h1>
        <article className={`${article_content} py-3`}>
          {blogContentDescription}
        </article>
      </>
    );
  }
  return <section className="py-3">{content}</section>;
};

export default BlogDetailPage;
