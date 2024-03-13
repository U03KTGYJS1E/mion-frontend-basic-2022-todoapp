import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    onEditComplete(inputRef.current.value);
  };

  return (
    <StyledInput
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      ref={inputRef}
    />
  );
};

const StyledInput = styled.input.attrs((props) => ({ ...props }))`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  border-radius: 2px;
  padding: 0px 4px;
  border: none;
  outline: none;
  width: 100%;
`;
