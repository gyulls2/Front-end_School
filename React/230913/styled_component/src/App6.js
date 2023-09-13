import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: skyblue;
  color: #fff;
`;

// Button 스타일드컴포넌트를 확장
const Button2 = styled(Button)`
  color: black;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Button3 = styled(Button2)`
  background-color: greenyellow;
  color: #fff;
`;

export default function App6() {
  return (
    <>
      <Button>버튼1</Button>
      <Button2>버튼2</Button2>
      <Button3>버튼3</Button3>
    </>
  );
}
