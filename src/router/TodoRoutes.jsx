import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import TodoDetail from "../pages/TodoDetail";

const TodoRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/todos/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TodoRoutes;
