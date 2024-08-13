import React, { useContext } from "react";
import { UIContext } from "../../context/UI_context";
import showcase1 from "../../assets/bread_loaf.jpeg";
import showcase2 from "../../assets/homePageDessert.JPG";
import showcase3 from "../../assets/cooking_kitchen.jpg";
import showcase4 from "../../assets/strawberry_cake.jpg";
import classes from "./Showcase.module.css";
import Button from "../../UI/Button";

const Showcase = ({ title }) => {
  const {
    showcase,
    images,
    summary,
    summary_content,
    panoramic_picture,
    single_image,
  } = classes;
  const { handleOpen } = useContext(UIContext);
  return (
    <section className={showcase}>
      <div className={images}>
        <div className={single_image}>
          <img src={showcase2} alt="bakers" />
        </div>
        <div className={single_image}>
          <img src={showcase3} alt="cook" />
        </div>
        <div className={single_image}>
          <img src={showcase1} alt="loaf" />
        </div>
      </div>
      <div className={summary}>
        <div className={summary_content}>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            quo tempora suscipit labore neque ipsum obcaecati quidem ex, optio
            in doloremque veniam nemo numquam illum ut, eum voluptate assumenda,
            dolores sed minus impedit. Quo voluptates error at commodi qui
            dolorem eligendi, laudantium nesciunt libero reprehenderit ut ipsam
            magni atque veritatis, labore, illo ipsum tempore ducimus. Aut
            veniam a hic odit praesentium enim sunt, nam quod dicta natus
            placeat asperiores cupiditate.
          </p>
        </div>
        <Button onClick={handleOpen}>subscribe to newsletter</Button>
      </div>
      <div className={panoramic_picture}>
        <img src={showcase4} alt="strawberry_cake" />
      </div>
    </section>
  );
};

export default Showcase;
