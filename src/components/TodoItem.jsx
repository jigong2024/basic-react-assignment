import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../api/TodoClient";

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      alert("삭제 성공>ㅡ<");
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: edit } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo({ id, completed }),
    onSuccess: () => {
      alert("수정 성~공");
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <List key={todo.id}>
      <StyledLink to={`/todos/${todo.id}`} $completed={todo.completed}>
        {`${todo.text} ---- ${todo.completed ? "(완료)" : "(진행중)"}`}
      </StyledLink>
      <div>
        <Button
          $btn="rgb(88 43 231)"
          onClick={() => {
            edit({ id: todo.id, completed: !todo.completed });
          }}
        >
          {todo.completed ? "취소" : "완료"}
        </Button>
        <Button
          $btn="rgb(244 54 73)"
          onClick={() => {
            remove(todo.id);
          }}
          style={{
            marginLeft: "10px",
          }}
        >
          삭제
        </Button>
      </div>
    </List>
  );
};

export default TodoItem;

const List = styled.div`
  background-color: rgb(255 255 255);
  border-radius: 4px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-direction: row;
  font-size: 0.8rem;
  flex-wrap: wrap;
  /* width: 100%; */
`;

const StyledLink = styled(Link)`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  color: ${({ $completed }) => ($completed ? "gray" : "inherit")};
`;

const Button = styled.button`
  background-color: ${({ $btn }) => $btn};
  color: white;
  width: 30px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
