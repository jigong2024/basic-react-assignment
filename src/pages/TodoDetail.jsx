import { useNavigate, useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/TodoClient";

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: todoList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isPending) {
    return <div>로딩중 ...</div>;
  }

  if (isError) {
    return <div>에러 발생: {error.message}</div>;
  }

  const foundTodo = todoList.find((todo) => todo.id === id);

  if (!foundTodo) {
    return <div>404 not found todo!</div>;
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
