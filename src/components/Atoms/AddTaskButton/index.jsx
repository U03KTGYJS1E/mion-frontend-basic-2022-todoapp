import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <StyledImg src={plus} />
      <StyledButton>タスクを追加</StyledButton>
    </StyledAddTaskButton>
  );
};

const StyledAddTaskButton = styled.button`
  display: flex;
  padding: 2px, 6px;
  background: none;
  border: none;
  transition: 0.2s ease;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
  .StyledImg {
    width: 20px;
    height: 20px;
  }
  .StyledButton {
    color: ${COLOR.GREEN};
    ${TEXTS.S}
    font-family: ${FONT_FAMILY.NOTO_SANS};
  }
`;
