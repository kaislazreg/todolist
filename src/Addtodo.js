import React, { useState } from 'react'

const Addtodo = ({Addtask}) => {
    const [text,setText]=useState ("");


    const  kais= () => {
      // 👇️ clear input value
      Addtask({id:Math.random(),text:text,isDone:false})
      setText("");
    };


   
  return (
    <div>
      <input value={text} placeholder='what you want to do' type="text" onChange={e=>setText(e.target.value)} />
      <button onClick={()=>kais()}>Add</button>
    </div>
  )
}

export default Addtodo 