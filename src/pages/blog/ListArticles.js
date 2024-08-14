import React, { useContext } from "react";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import classes from "./ListArticles.module.css";
import { ApiContext } from "../../context/ApiCallsContext";

import showcase1 from "../../assets/bread_loaf.jpeg";

const ListArticles = () => {
  const { list_items_content, list_items, item, blog_post, info } = classes;

  const { items, isLoading, error } = useContext(ApiContext);
  return (
    <Container>
      <hr />
      <div className={`${list_items_content} py-2`}>
        <div className={blog_post}>
          <h3 className="py-2">The Latest and Greatest</h3>
          {!isLoading && error && (
            <big>Could not get the list of articles.</big>
          )}
          {isLoading && <p>...Loading</p>}
          {!error &&
            !isLoading &&
            items &&
            items.data.map((itemList) => {
              return (
                <div className={list_items} key={itemList.id}>
                  <div className={item}>
                    <img src={showcase1} alt="" />
                    <div className={info}>
                      <time>
                        {new Date(itemList.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <h3>{itemList.titles}</h3>
                      <p>{itemList.summary}</p>
                    </div>

                    <Link to={`/blog/${itemList.titles}`}>
                      Continue Reading
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default ListArticles;
