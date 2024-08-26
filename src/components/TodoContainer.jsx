import { useContext, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// import StyledComponents from "./StyledComponents";
import SampleTodoContext from "../contexts/SampleTodoContext";
import styled from "styled-components";

const TodoContainer = () => {
  const sampleTodos = useContext(SampleTodoContext);

  const [todos, setTodos] = useState(sampleTodos);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodos([
      { id: crypto.randomUUID(), text: newTodo, completed: false },
      ...todos,
    ]);
    setNewTodo("");
  };

  const handleUpdate = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <SecondContainer>
      {/* <StyledComponents /> */}
      <TodoForm
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </SecondContainer>
  );
};

export default TodoContainer;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
