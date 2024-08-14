import React from "react";
import Container from "../../UI/Container";
import salads from "../../assets/salads.JPG";
import vegetarian from "../../assets/fruitGreen_EventPage.JPG";
import mostPopular from "../../assets/differentDessertPlate.jpg";
import desserts from "../../assets/homePageDessert.JPG";
import classes from "./BlogShowCase.module.css";
const BlogShowCase = () => {
  const { blog_showcase, category, food_category } = classes;
  return (
    <div className={`${blog_showcase} py-3`}>
      <Container>
        <div className={category}>
          <div className={`${food_category}`}>
            <img src={salads} alt="Salad" />
          </div>
          <div className={food_category}>
            <img src={vegetarian} alt="Vegetarian" />
          </div>
          <div className={food_category}>
            <img src={mostPopular} alt="Most Popular" />
          </div>
          <div className={food_category}>
            <img src={desserts} alt="Desserts" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogShowCase;
