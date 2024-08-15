import React, { useContext } from "react";
import Showcase from "./Showcase";
import { ApiContext } from "../../context/ApiCallsContext";
import Container from "../../UI/Container";
import classes from "./Home.module.css";
const Home = () => {
  const { loader } = classes;
  const { items, isLoading } = useContext(ApiContext);
  return (
    <>
      {isLoading && (
        <section>
          <Container>
            <p className={loader}>
              Welcome to the Nosh, Application is being loaded, please give it a
              few seconds.
              <big>Loading ...</big>
            </p>
          </Container>
        </section>
      )}
      {!isLoading && items && items.content && (
        <Showcase title={items.content.Title} />
      )}
    </>
  );
};

export default Home;
