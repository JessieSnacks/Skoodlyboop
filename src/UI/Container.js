import React from "react";
import classes from "./Container.module.css";
const Container = ({ children }) => {
  const { container } = classes;
  return <div className={container}>{children}</div>;
};

export default Container;
