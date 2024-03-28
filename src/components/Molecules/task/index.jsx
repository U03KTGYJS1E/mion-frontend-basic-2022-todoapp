import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox/index";
import EditButton from "../../Atoms/EditButton/index";
import Input from "../../Atoms/Input/index";
import styled from "styled-components";
import TEXT from "../../../variables/texts";
import COLOR from "../../../variables/color";

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
  overflow: hidden;
`;
const StyledCheckboxWrapper = styled.div``;
const StyledNameAndButtonWrapper = styled.div``;
const StyledTaskName = styled.div``;
const StyledEditButtonWrapper = styled.div``;
