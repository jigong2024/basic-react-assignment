import { useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
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
