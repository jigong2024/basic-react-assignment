import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { getTodos } from "../api/TodoClient";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const {
    data: todoList,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <ListContainer>
      {todoList.map((todo) => (
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
