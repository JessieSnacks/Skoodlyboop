import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import PageContent from "./PageContent";
const Error = () => {
  const error = useRouteError();
  let title = "An error occured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = `Error ${error.status} Not Found`;
    message = "Could not find resource or page";
  }
  return (
    <>
      <Navbar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
