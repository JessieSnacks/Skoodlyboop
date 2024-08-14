import React, { useContext } from "react";
import jessie from "../../assets/Aboutme.jpeg";
import classes from "./About.module.css";
import { ApiContext } from "../../context/ApiCallsContext";

const About = () => {
  const { image, about, about_content, description, abtme } = classes;
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
        </div>
      </div>
    </section>
  );
};

export default About;
