import React, { useRef, useState } from "react";
import { validateEmail, validateText } from "../utilities/validations";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Container from "../UI/Container";
import classes from "./ContactForm.module.css";
const ContactForm = ({ close }) => {
  const { control_row, modal_actions } = classes;
  const [clicked, setClicked] = useState(false);
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    try {
      const nameRefInput = nameRef.current.value;
      const emailRefInput = emailRef.current.value;
      const isValid =
        validateText(nameRefInput) && validateEmail(emailRefInput);
      if (!isValid) {
        alert("please enter valid name and email");
        setClicked(false);
        return;
      }
      const response = await fetch(process.env.REACT_APP_CONTACT_SHEET_API, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      const data = await response.json();
      e.target.reset();
      close();
      alert(data.msg);
    } catch (error) {
      setClicked(false);
      alert("Something is wrong: ", error);
    }
    setClicked(false);
  };

  return (
    <Container>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={control_row}>
          <Input label="Full name" id="full_name" type="text" ref={nameRef} />
        </div>
        <div className={control_row}>
          <Input label="email address" id="email" type="email" ref={emailRef} />
        </div>
        <div className={modal_actions}>
          <Button onClick={close} className="small" type="button">
            Close
          </Button>
          <Button disabled={clicked} className="small">
            Send
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
