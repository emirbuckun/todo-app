import React from "react";

function TodoCount({ todos }) {
  return (
    <div className="todo-count">
      You have
      {!todos.length
        ? " no todos"
        : todos.length === 1
        ? " 1 todo"
        : todos.length > 1
        ? ` ${todos.length} todos`
        : null}
    </div>
  );
}

export default TodoCount;
