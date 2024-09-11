import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { postTodo } from "../api/TodoClient";

const TodoForm = () => {
  const queryClient = useQueryClient();

  const [inputValue, setInputValue] = useState("");

  const { mutate } = useMutation({
    mutationFn: (newTodo) => postTodo(newTodo),
    onSuccess: () => {
      alert("투두 추가 성공!");
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { text: inputValue, completed: false };

    mutate(newTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
