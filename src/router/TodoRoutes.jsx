import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import TodoDetail from "../pages/TodoDetail";
import TodoProvider from "../context/TodoProvider";

const TodoRoutes = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default TodoRoutes;
