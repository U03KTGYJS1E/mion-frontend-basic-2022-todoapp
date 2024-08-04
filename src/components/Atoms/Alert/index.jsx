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
  line-height: 40px;
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
  display: flex;
  margin: 0 auto;
  background: ${COLOR.RED};
  margin-top: 80px;
  height: 40px;
  padding: 10px 20px;
  width: 400px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    margin-top: 40px;
    width: 100%;
  }
`;

export default Alert;
