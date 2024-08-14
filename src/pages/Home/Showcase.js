import { Link } from "react-router-dom";
import showcase1 from "../../assets/bread_loaf.jpeg";
import showcase2 from "../../assets/homePageDessert.JPG";
import showcase3 from "../../assets/cooking_kitchen.jpg";
import showcase4 from "../../assets/strawberry_cake.jpg";
import classes from "./Showcase.module.css";

const Showcase = ({ title }) => {
  const {
    showcase,
    images,
    summary,
    summary_content,
    panoramic_picture,
    single_image,
    contact,
  } = classes;
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
            I host cooking classes, food events, and cater dinners. Beyond the
            plate, I work to break down barriers to food access. I have a
            master's degree in public health and city planning, and consult with
            city and state agencies, nonprofits, and developers. I champion
            equitable food policies, work with restaurants, farmers and schools,
            conduct community focused needs assessments, and design evaluations.
          </p>
          <Link to="/contact" className={contact}>
            Work with Me
          </Link>
        </div>
      </div>
      <div className={panoramic_picture}>
        <img src={showcase4} alt="strawberry_cake" />
      </div>
    </section>
  );
};

export default Showcase;
