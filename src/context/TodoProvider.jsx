import React, { useContext, useState } from "react";
import TodoContext from "./TodoContext";
import SampleTodoContext from "./SampleTodoContext";

const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        handleSubmit,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
