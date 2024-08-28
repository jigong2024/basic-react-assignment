import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos, handleUpdate, handleDelete } = useContext(TodoContext);

  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  max-width: 720px;
`;
