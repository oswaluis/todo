
import React from 'react'
import './todo.css'
import {BsCheckLg , BsTrashFill} from 'react-icons/bs'

const Todo = ({text,todo, todos, setTodos}) => {
    //eventos
    const deleteHandler = ()=>{
        setTodos(todos.filter((el) =>el.id !== todo.id))
    }

    const completeHandler = ()=>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ?"completed" : ''}`}>{text}</li>
        <button className='complete-btn' onClick={completeHandler}> <BsCheckLg/></button>
        <button className='trash-btn' onClick={deleteHandler}> <BsTrashFill/></button>
    </div>
  )
}

export default Todo