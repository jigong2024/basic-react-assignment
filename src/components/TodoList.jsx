import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

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

  // const handleDelete = (id) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);

  //   setTodos(updatedTodos);
  // };

  // const handleDelete = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            style={{
              marginTop: "20px",
            }}
            key={todo.id}
          >
            {`${todo.text} ---- ${todo.completed ? "(완료)" : "(진행중)"}`}{" "}
            <br />
            <button
              onClick={() => {
                handleUpdate(todo.id);
              }}
            >
              {todo.completed ? "취소" : "완료"}
            </button>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
              style={{
                marginLeft: "10px",
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
