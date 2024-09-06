import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import TodoContext from "../context/TodoContext";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, completedTodos, pendingTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter");

  const search = () => {
    if (filter === "completed") {
      return completedTodos;
    } else if (filter === "pending") {
      return pendingTodos;
    } else {
      return todos;
    }
  };

  const filteredTodos = search();

  return (
    <ListContainer>
      {filteredTodos.map((todo) => (
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
