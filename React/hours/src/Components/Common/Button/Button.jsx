import React from "react";
import styles from "./Button.module.css";
import styled from "styled-components";

const Button = ({ color, text }) => {
  const Btn = styled.button`
    background: ${color};
    padding: 21px 49px;
    border-radius: 56px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    border: none;
    color: #5b2386;
  `;

  return <Btn>{text}</Btn>;
};

export default Button;
