import React from "react";
import "./DisplayMood.css";

const DisplayMood = ({ currentMood }) => {
  return (
    <div className="container">
      <h2>{currentMood ? `기분이 ${currentMood}` : "아직 선택하지 않았어요."}</h2>
    </div>
  );
};

export default DisplayMood;
