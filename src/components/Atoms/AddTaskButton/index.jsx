import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const AddTaskButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <img src={plus} className="button" />
      <div className="task">タスクを追加</div>
    </Button>
  );
};
export default AddTaskButton;

const Button = styled.button`
  display: flex;
  padding: 2px, 6px;
  background: none;
  border: none;
  transition: 0.2s;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
  .button {
    width: 20px;
    height: 20px;
  }
  .task {
    color: ${COLOR.GREEN};
    ${TEXTS.S}
    font-family: ${FONT_FAMILY.NOTO_SANS};
  }
`;
