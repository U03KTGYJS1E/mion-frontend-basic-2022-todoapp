import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <img src={plus} className="PlusButton" />
      <div className="AddTask">タスクを追加</div>
    </StyledAddTaskButton>
  );
};

const StyledAddTaskButton = styled.button`
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
  .PlusButton {
    width: 20px;
    height: 20px;
  }
  .AddTask {
    color: ${COLOR.GREEN};
    ${TEXTS.S}
    font-family: ${FONT_FAMILY.NOTO_SANS};
  }
`;
