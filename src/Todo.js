import React from "react";

const Todo = ({ todol, handelDelete, handleDone }) => {
  console.log("todol", todol);

  return (
    <div>
      <ul>
        <li>{todol.text}</li>
        <button onClick={() => handelDelete(todol.id)}>remove</button>
        <button
          onClick={() => handleDone(todol.id)}
          
        >
          {todol.isDone ? "done" : "notDone"}
        </button>
      </ul>
    </div>
  );
};

export default Todo;