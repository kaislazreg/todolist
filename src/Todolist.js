import React from "react";
import Todo from "./Todo";

const TodoList = ({ todo, handelDelete, handleDone, }) => {
  console.log("todo", todo);
  return (
    <div>
      {todo.map((el) => (
        <Todo todol={el} handelDelete={handelDelete} handleDone={handleDone} />
      ))}
    </div>
  );
};

export default TodoList;