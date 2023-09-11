import React from "react";

const Homepage = (props) => {
  return (
    <>
      <h1>{props.idUser}님 반가워요!</h1>
      <button>로그아웃</button>
    </>
  );
};

export default Homepage;
