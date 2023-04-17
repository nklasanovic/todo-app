import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
    }
    setValue("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Insert task name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Create task
      </button>
    </form>
  );
};

export default TodoForm;
