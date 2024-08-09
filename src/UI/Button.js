import React from "react";
import classes from "./Button.module.css";
const Button = ({ children, className, ...props }) => {
  const { button } = classes;
  return (
    <button className={`${button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
