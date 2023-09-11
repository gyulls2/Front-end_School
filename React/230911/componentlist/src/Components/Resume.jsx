import React, { useState } from "react";

function Resume({ hello, name, hobby, food, color }) {
  const [like, setLike] = useState(0);
  const [text, setText] = useState("");

  function clickLike() {
    console.log();
    setLike(like + 1);
  }

  function likeBtnHandler() {
    if (!text) return setText("Like");
    else return setText("");
  }

  return (
    <>
      <h1>{name} 자기소개서</h1>
      <h2>{hello}</h2>
      <h3>취미 : {hobby}</h3>
      <h3>좋아하는 음식 : {food}</h3>
      <h3>
        좋아하는 색 : <span style={{ color: color }}>{color}</span>
      </h3>
      <button onClick={clickLike}>
        Like <span>{like}</span>
      </button>
      <button onClick={likeBtnHandler}>Like</button>
      {text}
    </>
  );
}
export default Resume;
