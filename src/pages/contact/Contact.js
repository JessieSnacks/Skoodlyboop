import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { validateText, validateEmail } from "../../utilities/validations";
import Input from "../../UI/Input";
import classes from "./Contact.module.css";
import Button from "../../UI/Button";

const Contact = () => {
  const { container_sm, contact } = classes;

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const submitEmailHandler = async (e) => {
    e.preventDefault();
    try {
      const nameRefInput = nameRef.current.value;
      const emailRefInput = emailRef.current.value;
      const messageRefInput = messageRef.current.value;

      // Validation of data
      const isValid =
        validateText(nameRefInput) &&
        validateText(messageRef) &&
        validateEmail(emailRefInput);
      if (!isValid) {
        alert(
          "Please fill out all the required fields of the form before sending"
        );
        return;
      }
      const values = {
        name: nameRefInput,
        email: emailRefInput,
        message: messageRefInput,
      };
      const sendEmail = await emailjs.sendForm("", "", values, "");
      if (!sendEmail.ok) {
        alert("something happened when sending Email");
        return;
      }
      const result = await sendEmail;
      if (result.ok) {
        alert("Email received, We will be in touch in the next couple of days");
      }
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log(
        "error :>> ",
        new Error(`Something went wrong when sending email: ${error}`)
      );
    }
  };
  return (
    <section className={contact}>
      <h1>Let's Connect</h1>
      <div className={container_sm}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          laborum est veritatis molestiae perspiciatis placeat libero voluptates
          corrupti soluta veniam iusto doloribus asperiores cumque rem accusamus
          quis, amet aspernatur voluptatem maiores dolore sequi nihil eum!
        </p>
        <form onSubmit={submitEmailHandler}>
          <Input type="text" name="name" placeholder="Name" ref={nameRef} />
          <Input type="email" name="email" placeholder="Email" ref={emailRef} />
          <label htmlFor="Send Message">What's on your mind?</label>
          <textarea name="message" ref={messageRef}></textarea>
          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
