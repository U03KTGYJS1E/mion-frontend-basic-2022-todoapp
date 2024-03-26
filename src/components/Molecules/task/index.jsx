import React, { useState } from "react";
import { CheckBox } from "../../Atoms/CheckBox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";
import styled from "styled-components";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = (e) => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <CheckBox onClick={onTaskComplete} />
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
export default Task;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  overflow: hidden;
  gap: 10px;
`;
