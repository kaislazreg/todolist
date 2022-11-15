import React, { useState } from "react";
import Addtodo from "./Addtodo";
import TodoList from "./Todolist";
const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "todo list 1", isDone: false },
    { id: 2, text: "todolist 2", isDone: false },
    { id: 3, text: "todolist 3", isDone: false },
  ]);

  const handelDelete = (ID) => {
    setTodo(todo.filter((el) => el.id !== ID));
  };

  const handleDone = (ID) => {
    setTodo(
      todo.map((el) => (el.id == ID ? { ...el, isDone : !el.isDone  } : { ...el }))
    );

  };
  const Addtask =(newtodo)=>{
    setTodo([...todo,newtodo])
  }

  return (
    <div>
      <h1>TodoList</h1>

      <TodoList
        todo={todo}
        handelDelete={handelDelete}
        handleDone={handleDone}

      />

      <Addtodo Addtask={Addtask}/>

    </div>
  );
};

export default App;
