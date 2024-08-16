import React, { useContext } from "react";
import { Link } from "react-router-dom";
import jessie from "../../assets/about_me.png";
import classes from "./About.module.css";
import { ApiContext } from "../../context/ApiCallsContext";

const About = () => {
  const { image, about, about_content, description, abtme, contact, abt_btn } =
    classes;
  const {
    items: { content },
  } = useContext(ApiContext);

  const title = content.aboutme_title;

  return (
    <section className={about}>
      <div className={`${about_content} p-1`}>
        <div className={image}>
          <img src={jessie} alt="Jessie" />
        </div>
        <div className={`${description} p-3`}>
          <div className={abtme}>
            <h2 className="py-3">{title}</h2>
            <p>{content.aboutme_content}</p>
          </div>
          <div className={abt_btn}>
            <Link to="/contact" className={contact}>
              Work with Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
