import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import styled from "styled-components";

const TodoForm = () => {
  const { handleSubmit, newTodo, setNewTodo } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default TodoForm;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  width: 300px;
  height: 30px;
  padding: 10px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-left: 20px;
  width: 80px;
  height: 30px;
  padding-left: 5px;
`;
