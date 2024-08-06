import React, { useContext } from "react";
import Modal from "../Layout/Modal";
import ContactForm from "./ContactForm";
import { UIContext } from "../context/UI_context";
const Form = () => {
  const { isModalOpen, handleClose } = useContext(UIContext);
  return (
    <Modal isOpen={isModalOpen}>
      <h3>Sign Up for Email Updates</h3>
      <ContactForm close={handleClose} />
    </Modal>
  );
};

export default Form;
