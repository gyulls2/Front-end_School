import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className="main">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <h2 className="mainTitle">
        “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
      </h2>
      <p className="mainText">
        <span>1만 시간의 법칙</span>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </div>
  );
};

export default Main;

// const alignCenter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const MainSection = styled.div`
//   ${alignCenter}
//   background: blue;
// `;

// const LogoBox = styled.div`
//   height: 250px;
//   margin: 20px auto;
//   background: url("images/logo_bg.png") no-repeat center center;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Logo = styled.img`
//   width: 50%;
// `;
