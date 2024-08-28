import React from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default TodoProvider;
