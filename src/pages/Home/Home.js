import React from "react";
import Showcase from "./Showcase";
import data from "../../data/content.json";
const Home = () => {
  return (
    <>
      <Showcase title={data.Title} />
    </>
  );
};

export default Home;
