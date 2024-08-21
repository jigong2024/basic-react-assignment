import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

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
