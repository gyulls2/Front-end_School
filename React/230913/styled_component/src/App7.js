import React from "react";
import styled, { css } from "styled-components";

const BorderNone = css`
  border: none;
`;
const BorderRadius = css`
  border-radius: 8px;
`;
const BoxShadow = css`
  box-shadow: 0 0 5px #33333333;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background-color: skyblue;
  color: #fff;
`;

// Button 스타일드컴포넌트를 확장
const ExtendedBtn = styled(Button)`
  ${BorderNone}
  ${BorderRadius}
  ${BoxShadow}  
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

export default function App6() {
  return (
    <>
      <Button>버튼1</Button>
      <ExtendedBtn color="black">버튼2</ExtendedBtn>
      <ExtendedBtn bgColor="yellowgreen">버튼3</ExtendedBtn>
    </>
  );
}
