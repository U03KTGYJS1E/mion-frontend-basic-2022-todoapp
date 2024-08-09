import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

const TextAlert = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  padding: 10px 20px;
`;

/*テキスト表示*/
export const Alert = ({ isActive, isActiveText }) => {
  return (
    <DisplayAlert isActive={isActive}>
      <TextAlert isActive={isActive}>{isActiveText}</TextAlert>
    </DisplayAlert>
  );
};

const DisplayAlert = styled.div`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: 0.5s;
  transform: translate(-50%, 0);
  display: flex;
  margin: 0 auto;
  background: ${COLOR.RED};
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 40px;
  width: 400px;
  border-radius: 4px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    width: 100%;
    max-width: 400px;
    margin: 0px 20px;
  }
`;
