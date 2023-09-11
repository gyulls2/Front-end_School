import React from "react";
import "./MenuListItem.css";

const MenuListItem = ({ mood, currentMood, setCurrentMood }) => {
  const onitemClick = () => {
    setCurrentMood(mood);
  };

 
  // if (mood === currentMood) {
  //   btnItem.classList.add("bg-blue");
  // } else btnItem.classList.remove("bg-blue");

  return (
    <li>
      <button className="btn-item" onClick={onitemClick}>
        기분이 : {mood}
      </button>
    </li>
  );
};

export default MenuListItem;
