import check from "../../../assets/svg/check.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const Checkbox = (props) => {
  return (
    <Button onClick={props.onClick}>
      <img src={check} className="checkbox" />
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

  .checkbox {
    display: none;
    width: 100%;
    height: 100%;
  }

  :hover {
    .checkbox {
      display: block;
    }
  }
`;
