import React from "react";
import BtnItem from "./BtnItem";

const BtnList = ({setState}) => {
  const menus = [
    "좋아요! 😃",
    "정말 좋아요! 🤭",
    "최고에요! 😄",
    "미쳤어요!! 🤪",
  ];

  const btnList = menus.map((state) => {
    return <BtnItem state={state} setState={setState} />;
  });

  return <div>{btnList}</div>;
};

export default BtnList;
