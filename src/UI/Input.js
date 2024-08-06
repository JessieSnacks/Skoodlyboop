import { forwardRef } from "react";
import classes from "./Input.module.css";
const Input = forwardRef(({ label, id, ...props }, ref) => {
  const { control } = classes;
  return (
    <p className={control}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
