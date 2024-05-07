import React, { useState } from 'react'
import TodoList from './TodoList';

function Cart() {
    const [search, setSearch] = useState('');
    const [todos, setTodos] = useState([]);

    const changeHandler = (e)=>{
        setSearch(e.target.value)
    }
    
    const submitHandler =(e)=>{
        e.preventDefault();
        let newTodos =[...todos , search]
        setTodos(newTodos)
        setSearch("")
    }

    const deleteHandler =(indexValue)=>{
        const newTodo = todos.filter((todo,index)=>
            index !== indexValue
        )
        setTodos(newTodo)
    }
    
    
  return (
    <>
    <div className='text-3xl text-blue-600 text-center m-2'>
        Todo Management Application
    </div>
    <div className='text-center mt-6 py-6'>
    <form className='items-center' onSubmit={submitHandler}>
        <input  type='text' className='border-2' value={search} onChange={changeHandler}/> &nbsp; &nbsp;
        <button className='border-2 rounded bg-blue-400 text-white ' >Add</button>
    </form>
    </div>
    <TodoList todoProp ={todos} deleteProp={deleteHandler}/>
    </>
  )
}

export default Cart