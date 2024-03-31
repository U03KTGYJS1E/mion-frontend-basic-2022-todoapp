import React, { useState } from "react";
import { Checkbox } from "../../Atoms/Checkbox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
`;

const StyledCheckboxWrapper = styled.div`
  margin-right: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: auto;
`;

const StyledTaskName = styled.div`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  flex: auto;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledEditButtonWrapper = styled.div`
  flex: 0;
  display: flex;
  align-items: center;
`;
