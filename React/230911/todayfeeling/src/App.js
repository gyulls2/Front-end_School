import React, { useState } from "react";
import BtnList from "./Components/BtnList";
import Display from "./Components/Display";
import "../src/style.css";
import MenuList from "./Components/MenuList/MenuList";
import DisplayMood from "./Components/DisplayMood/DisplayMood";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div className="app">
      <h1>오늘의 기분을 선택해 주세요😄</h1>
      <div>
        <MenuList currentMood={currentMood} setCurrentMood={setCurrentMood} />
        <DisplayMood currentMood={currentMood} />
      </div>
    </div>
  );
}
export default App;
