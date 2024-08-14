import React, { useContext } from "react";
import Showcase from "./Showcase";
import { ApiContext } from "../../context/ApiCallsContext";
const Home = () => {
  const { items, isLoading } = useContext(ApiContext);

  return (
    <>
      {isLoading && <p>is Loading...</p>}
      {!isLoading && items && items.content && (
        <Showcase title={items.content.Title} />
      )}
    </>
  );
};

export default Home;
