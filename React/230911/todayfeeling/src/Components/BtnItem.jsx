import React from "react";

const BtnItem = ({ state, setState }) => {
  const clickBtnHandler = () => {
    setState(state)
  };

  return (
    <div className="btn" onClick={clickBtnHandler}>
      기분이 : {state}
    </div>
  );
};

export default BtnItem;
