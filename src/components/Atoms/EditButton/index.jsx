import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={pencil} />
    </Button>
  );
};
export default EditButton;

const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  transition: 0.2s;

  img {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
