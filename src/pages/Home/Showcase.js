import { Link } from "react-router-dom";
import jessieCooking from "../../assets/jessie_cooking.jpg";
import breadLoaf from "../../assets/bread_loaf.jpeg";
import strawberryCake from "../../assets/strawberries_cake.jpg";
import chocolate from "../../assets/kid_dessert_min.JPG";
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
    hero_description,
    summary_image,
    summary_btn,
    summary_description,
  } = classes;
  // Can you make this section three panels? The panel most the right would be the text, the middle panel would be the work with me button and the panel on the right would be the picture of the chocolates that's currently above this section.
  return (
    <section className={showcase}>
      <div className={images}>
        <div className={single_image}>
          <img src={jessieCooking} alt="Jessie Cooking" />
          <div className={hero_description}>
            <h3>Jessie Wesley</h3>
            <p>Educator, Facilitator, Home Chef</p>
          </div>
        </div>
        <div className={single_image}>
          <img src={breadLoaf} alt="loaf" />
        </div>
      </div>
      <div className={summary}>
        <div className={summary_content}>
          <div className={summary_image}>
            <img src={chocolate} alt="chocolate" />
          </div>
          <div className={summary_btn}>
            <Link to="/contact" className={contact}>
              Work with Me
            </Link>
          </div>
          <div className={summary_description}>
            <h3>{title}</h3>
            <p>
              I host cooking classes, food events, and cater dinners. Beyond the
              plate, I work to break down barriers to food access. I have a
              master's degree in public health and city planning, and consult
              with city and state agencies, nonprofits, and developers. I
              champion equitable food policies, work with restaurants, farmers
              and schools, conduct community focused needs assessments, and
              design evaluations.
            </p>
          </div>
        </div>
      </div>
      <div className={panoramic_picture}>
        <img src={strawberryCake} alt="strawberry_cake" />
      </div>
    </section>
  );
};

export default Showcase;
