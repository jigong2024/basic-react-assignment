import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
