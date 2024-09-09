import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import todoClient from "../api/TodoClient";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const { data } = await todoClient.get("/");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    // setTodos([
    //   { id: crypto.randomUUID(), text: newTodo, completed: false },
    //   ...todos,
    // ]);
    // setNewTodo("");
    await addTodo(newTodo);
  };

  const addTodo = async (newTodo) => {
    await todoClient.post("/", {
      text: newTodo,
      completed: false,
    });

    fetchTodos();
    setNewTodo("");
  };

  const handleUpdate = async (id, completed) => {
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
    await todoClient.patch(`/${id}`, {
      completed,
    });

    fetchTodos();
  };

  const handleDelete = async (id) => {
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    await todoClient.delete(`/${id}`);

    fetchTodos();
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        handleSubmit,
        handleUpdate,
        handleDelete,
        completedTodos,
        pendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
