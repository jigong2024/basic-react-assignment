import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import TodoFrom from "./TodoForm";
import SampleTodoContext from "../contexts/SampleTodoContext";

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
    <div>
      <TodoFrom
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
