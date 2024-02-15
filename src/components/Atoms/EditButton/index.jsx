import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={pencil} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  outline: none;
  transition: 0.2s ease;

  img {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
