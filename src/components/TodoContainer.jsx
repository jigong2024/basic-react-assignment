import { useContext, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// import StyledComponents from "./StyledComponents";
import SampleTodoContext from "../context/SampleTodoContext";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <SecondContainer>
      {/* <StyledComponents /> */}
      <TodoForm />
      <TodoList />
    </SecondContainer>
  );
};

export default TodoContainer;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
