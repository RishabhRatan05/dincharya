import React, { useEffect, useState } from 'react'
import { useDeleteProgressMutation, useEditProgressMutation, useGetTodosQuery } from '../redux/api/todo/todo'

const TaskCard = ({todo, id}) => {
  const {title, description, isCompleted} = todo
  const url = 'http://localhost:8000/api/progress/'


  const deleteTodo= useDeleteProgressMutation()[0]
  const updateTodo = useEditProgressMutation()[0]
  const handleDelete =()=>{
    deleteTodo(id)
  }
  const handleDone = ()=>{
    const newTodo = {
      id:id,
      title:title,
      description:description,
      isCompleted:true,
    }
    updateTodo(newTodo)
  }

  return (
    <div className={`flex justify-between items-center ${isCompleted ? 'bg-kalar-200' : 'bg-kalar-green'}  w-full p-2 md:m-2 my-2`}>
      <div className='text-2xl md:text-4xl text-kalar-100'>{title}</div>
      <div className='text-1xl'>{description}</div>
      <div>
      <button className='bg-kalar-400 text-kalar-100 p-1 mr-1'>Edit</button>
      {isCompleted?
      <button onClick={handleDelete} className='bg-kalar-400 text-kalar-100 p-1'>
        Delete
      </button>
      :<button onClick={handleDone} className='bg-kalar-400 text-kalar-100 p-1'>
        Done
      </button>}
      </div>
    </div>
  )
}

export default TaskCard