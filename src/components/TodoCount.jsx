import React from "react";

function TodoCount({ todos }) {
  return (
    <div className="todo-count">
      You have
      {!todos.length
        ? " no tasks"
        : todos.length === 1
        ? " 1 task"
        : todos.length > 1
        ? ` ${todos.length} tasks`
        : null}
    </div>
  );
}

export default TodoCount;
