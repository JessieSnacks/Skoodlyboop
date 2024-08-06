import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ children, className = "", isOpen }) => {
  const { modal } = classes;
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (isOpen) {
      modal.showModal();
    }
    return () => modal.close();
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} className={`${modal} ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
