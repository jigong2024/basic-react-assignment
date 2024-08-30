import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <SecondContainer>
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
