import React, { useContext } from "react";
import Modal from "../Layout/Modal";
import ContactForm from "./ContactForm";
import { UIContext } from "../context/UI_context";
import classes from "./Form.module.css";
const Form = () => {
  const { center } = classes;
  const { isModalOpen, handleClose } = useContext(UIContext);
  return (
    <Modal isOpen={isModalOpen}>
      <h3>Sign Up for Email Updates</h3>
      <p className={`${center}`}>
        An infrequent email blast to keep informed about my next event.
      </p>
      <ContactForm close={handleClose} />
    </Modal>
  );
};

export default Form;
