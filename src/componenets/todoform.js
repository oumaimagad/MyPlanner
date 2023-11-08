import React,{useState} from 'react'

export const Todoform = ({addTodo}) => {
    const[value,setValue]=useState("");

    const handelSubmit=e=>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
   <form className='TodoForm' onSubmit={handelSubmit}>
    <input type='text' className='todo-input' value={value} placeholder='What is the task to day '
    onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Add Task</button>
   </form>
  )
}
