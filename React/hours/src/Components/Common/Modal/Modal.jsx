import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal_backdrop}>
      <article className={styles.modal}>{props.children}</article>
    </div>
  );
};

export default Modal;
