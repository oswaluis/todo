
import React, {useState, useEffect}  from 'react'
import Form from './components/Form/Form'
import TodoList from './components/Form/TodoList'
import Header from './components/header/Header'


const App = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState ([]);
    const [status, setStatus] = useState ('all');
    const [filteredTodos, setFilteredTodos] = useState ([]) 
    
    //useEFFect
    useEffect(()=>{
        getLocalTodos();
    }, []);
    useEffect(()=>{
        filterHandler();
        saveLocalTodos();
    },[todos, status])
    //function
    const filterHandler = ()=>{
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed ===true))
                break;
            case "toCompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break
        }
    }

    const saveLocalTodos = ()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
        }

    const getLocalTodos = ()=>{
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else{
            let todoLocal = JSON.parse(localStorage.getItem('todos',JSON.stringify(todos) ))
            setTodos(todoLocal)
        }
    }
    return (
    <>
        <Header/>
        <Form 
            inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}/>
        <TodoList 
            todos={todos} 
            filteredTodos = {filteredTodos}
            setTodos={setTodos}  />
    
    </>
  )
}

export default App