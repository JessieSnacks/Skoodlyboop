import React from "react";
import Container from "../../UI/Container";
import bottomPageImage from "../../assets/bakers.jpg";
import classes from "./BlogBottomPage.module.css";
const BlogBottomPage = ({ title, content }) => {
  const { bottom_content, description, image } = classes;
  return (
    <div>
      <Container>
        <div className={bottom_content}>
          <div className={`${description} py-3`}>
            <div className="aside">
              <h2>{title}</h2>
              <p className="p-3">{content}</p>
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
