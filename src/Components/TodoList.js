import React from 'react'

function TodoList(props) {
   let {todoProp , deleteProp}= props;
  return (
    <div className='text-center'>
       {todoProp.map((todo, index)=>{
        return (
            <div key={index}>
               <h5> {todo} &nbsp;<button onClick={()=>{deleteProp(index)}} className='border-2 bg-red-400 '>Delete</button> </h5> 
            </div>
        )
       })}
    </div>
  )
}

export default TodoList