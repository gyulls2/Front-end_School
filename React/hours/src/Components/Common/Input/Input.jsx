import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.inpText}
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default Input;
