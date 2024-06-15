import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import { Title } from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";
export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCardWrapper>
        <TodoCard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const StyledTodoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${BREAKPOINT.MEDIUM}) {
    width: 500px;
  }
`;
