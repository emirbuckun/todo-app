import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getTime(),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={input}
        placeholder="Add todo"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
