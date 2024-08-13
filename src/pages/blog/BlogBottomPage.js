import React, { useContext } from "react";
import Container from "../../UI/Container";
import bottomPageImage from "../../assets/bakers.jpg";
import { ApiContext } from "../../context/ApiCallsContext";
import { UIContext } from "../../context/UI_context";

import classes from "./BlogBottomPage.module.css";
const BlogBottomPage = () => {
  const { bottom_content, description, image, btn } = classes;
  const { handleOpen } = useContext(UIContext);
  const {
    items: { content },
  } = useContext(ApiContext);
  console.log("content :>> ", content);
  return (
    <div>
      <Container>
        <div className={bottom_content}>
          <div className={`${description} py-3`}>
            <div className="aside">
              <h2>{content.blog_title}</h2>
              <p className="p-3">{content.blog_content}</p>
              <div className={`${btn} p-3`}>
                <span onClick={handleOpen}>
                  Click here to check out past newsletter
                </span>
              </div>
            </div>
          </div>
          <div className={image}>
            <img src={bottomPageImage} alt="bakers" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogBottomPage;
