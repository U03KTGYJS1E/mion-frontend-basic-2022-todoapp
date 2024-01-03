import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

export const Checkbox = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={check} className="check" />
    </Button>
  );
};
export default Checkbox;

const Button = styled.button`
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  background: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  .check {
    display: none;
    width: 100%;
    height: 100%;
  }

  :hover {
    .check {
      display: block;
    }
  }
`;
