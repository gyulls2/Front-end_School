import React, { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Modal from "./Components/Modal";

const App4 = () => {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  const [openModal, setOpenModal] = useState(true);

  return (
    <div>
      {login ? (
        <Homepage idUser={user.idUser} setLogin={setLogin} />
      ) : (
        <Login infoUser={user} setLogin={setLogin} />
      )}
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default App4;
