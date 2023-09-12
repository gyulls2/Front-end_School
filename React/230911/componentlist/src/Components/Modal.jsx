import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>회원이 되신것을 환영합니다!</h2>
        <button onClick={() => setOpenModal(false)}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
