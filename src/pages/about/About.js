import React from "react";
import jessie from "../../assets/Aboutme.jpeg";
import classes from "./About.module.css";
import data from "../../data/content.json";

const About = () => {
  const { image, about, about_content, description } = classes;

  const title = data.About_me.title;
  const aboutMeContent = data.About_me.content.split(".").map((a, i) => (
    <p key={i} className="p1">
      {a}.
    </p>
  ));

  // console.log("aboutme :>> ", aboutMe);
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
