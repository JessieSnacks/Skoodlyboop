import React, { useContext } from "react";
import Showcase from "./Showcase";
import { ApiContext } from "../../context/ApiCallsContext";
const Home = () => {
  const {
    items: { content },
  } = useContext(ApiContext);
  return (
    <>
      <Showcase title={content.Title} />
    </>
  );
};

export default Home;
