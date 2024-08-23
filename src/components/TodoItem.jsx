import React from "react";

const TodoItem = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <div>
      <li
        style={{
          marginTop: "20px",
        }}
        key={todo.id}
      >
        {`${todo.text} ---- ${todo.completed ? "(완료)" : "(진행중)"}`} <br />
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
    </div>
  );
};

export default TodoItem;
