import { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../context/TodoContext";
import { Link } from "react-router-dom";

const TodoItem = ({ todo }) => {
  const { handleUpdate, handleDelete } = useContext(TodoContext);

  return (
    <List key={todo.id}>
      <Link to={`/todos/${todo.id}`}>
        {`${todo.text} ---- ${todo.completed ? "(완료)" : "(진행중)"}`}
      </Link>
      <div>
        <Button
          $btn="rgb(88 43 231)"
          onClick={() => {
            handleUpdate(todo.id);
          }}
        >
          {todo.completed ? "취소" : "완료"}
        </Button>
        <Button
          $btn="rgb(244 54 73)"
          onClick={() => {
            handleDelete(todo.id);
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
