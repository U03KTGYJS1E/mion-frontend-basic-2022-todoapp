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
      <Text>タスクを追加</Text>
    </StyledAddTaskButton>
  );
};

const StyledAddTaskButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  height: 24px;
  gap: 10px;
  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
`;
const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

const Text = styled.span`
  color: ${COLOR.GREEN};
  ${TEXT.S}
  font-family: ${FONT_FAMILY.NOTO_SANS};
`;
