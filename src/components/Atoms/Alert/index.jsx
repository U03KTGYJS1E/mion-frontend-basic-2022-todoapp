import React from "react";
import styled, { keyframes, css } from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const TextAlert = styled.div`
  color: ${COLOR.WHITE};
`;

export const Alert = ({ isActive }) => {
  return (
    <DisplayAlert isActive={isActive}>
      <TextAlert isActive={isActive}>タスク名なし</TextAlert>
    </DisplayAlert>
  );
};

const DisplayAlert = styled.div`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  top: 80px;
  width: 400px;
  display: flex;
  margin: 0 auto;
  background: ${COLOR.RED};
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    width: 100%;
  }
`;

export default Alert;
