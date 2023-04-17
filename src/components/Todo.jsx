import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <AiFillEdit onClick={() => editTodo(task.id)} />
        <BsFillTrash2Fill onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
