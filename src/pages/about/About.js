import React, { useContext } from "react";
import jessie from "../../assets/Aboutme.jpeg";
import classes from "./About.module.css";
import { ApiContext } from "../../context/ApiCallsContext";

const About = () => {
  const { image, about, about_content, description } = classes;
  const {
    items: { content },
  } = useContext(ApiContext);

  const title = content.aboutme_title;
  const aboutMeContent = content.aboutme_content.split(".").map((a, i) => (
    <p key={i} className="p1">
      {a}.
    </p>
  ));

  return (
    <section className={about}>
      <div className={`${about_content} p-1`}>
        <div className={image}>
          <img src={jessie} alt="Jessie" />
        </div>
        <div className={`${description} p-3`}>
          <h2 className="py-3">{title}</h2>
          {aboutMeContent}
        </div>
      </div>
    </section>
  );
};

export default About;
