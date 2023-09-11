import React, { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";

const App4 = () => {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  // 로그인 상태를 판단하는 state
  const [login, setLogin] = useState(false);

  return <div>{login ? <Homepage idUser={user.idUser}/> : <Login infoUser={user} setLogin={setLogin}/>}</div>;
};

export default App4;
