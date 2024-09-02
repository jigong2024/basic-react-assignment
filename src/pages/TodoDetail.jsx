import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";

const TodoDetail = () => {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);
  const navigate = useNavigate();

  const foundTodo = todos.find((todo) => todo.id === id);

  useEffect(() => {
    if (!foundTodo) {
      navigate("/");
    }
  }, [foundTodo, navigate]);

  if (!foundTodo) {
    return null;
  }

  return (
    <div>
      <h1>Todo Detail</h1>
      <ListContainer>
        <TodoItem todo={foundTodo} />
      </ListContainer>

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default TodoDetail;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  max-width: 720px;
  border: 1px solid black;
`;
