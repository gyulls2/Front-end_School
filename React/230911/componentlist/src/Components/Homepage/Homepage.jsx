import React from "react";

const Homepage = ({ idUser, setLogin }) => {
  return (
    <>
      <h1>{idUser}님 반가워요!</h1>
      <button onClick={() => setLogin(false)}>로그아웃</button>
    </>
  );
};

export default Homepage;
