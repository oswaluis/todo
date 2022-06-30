import React from 'react'
import './form.css'
import {BsPlusLg} from 'react-icons/bs'

const Form = ({setInputText,inputText, setTodos, todos, setStatus}) => {
    const inputTextHandler =(e)=>{
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText , id:Math.random() * 1000, completed:false }
        ]);
        setInputText('');
        
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return (
    <form className=' container container-form'>
        <div className='input-form'>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text"
                className='todo-input'
                placeholder='Escribe aqui tu tarea pendiente' />
            <button onClick={submitTodoHandler} type='submit' className='todo-button'>
                <BsPlusLg className='todo-icon'/>
            </button>
        </div>

        <div className="select">
            <select onChange={statusHandler} name="todos" id="" className='filter-todo'>
                <option className='option' value="all">Todos</option>
                <option className='option' value="completed">Completados</option>
                <option className='option' value="toCompleted">Por completar</option>
            </select>
        </div>
    </form>
    )
}

export default Form