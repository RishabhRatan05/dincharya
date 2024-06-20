import React, { useEffect, useState } from 'react'
import { useDeleteProgressMutation, useEditProgressMutation, useGetTodosQuery } from '../redux/api/todo/todo'
import { useDispatch } from 'react-redux'
import { updateTodos } from '../redux/slices/todo/todo'
import { valueChange } from '../redux/slices/todo/editTodo'

const TaskCard = ({todo, id}) => {
  const {title, description, isCompleted} = todo
  const dispatch = useDispatch()
  const {data,isSuccess, refetch} = useGetTodosQuery()

  const deleteTodo= useDeleteProgressMutation()[0]
  const updateTodo = useEditProgressMutation()[0]

  const handleDelete =async()=>{
    await deleteTodo(id)
    refetch()
  }
  const handleDone = async()=>{
    const newTodo = {
      id:id,
      title:title,
      description:description,
      isCompleted:true,
    }
    await updateTodo(newTodo)
    refetch()
  }
  const handleEdit = ()=>{
    const editTodo = {
      title:title,
      id:id,
      description:description,
      editing:true
    }
    dispatch(valueChange(editTodo))

  }
  const handleRepeat = async()=>{
    const newTodo = {
      id:id,
      title:title,
      description:description,
      isCompleted:false,
    }
    await updateTodo(newTodo)
    refetch()
  }

  const getAllTodos = async()=>{
    try {
      if(isSuccess){
        const res = await data
        const par = await JSON.parse(res.daa)
        dispatch(updateTodos(par))

      }
    } catch (error) {
      console.error('inside',error)
    }
  }

  useEffect(()=>{
    getAllTodos()
  },[isSuccess,data])



  return (
    <div className={`flex justify-between items-center ${isCompleted ? 'bg-kalar-200' : 'bg-kalar-green'}  w-full p-2 md:m-2 my-2`}>
      <div className='text-2xl md:text-4xl text-kalar-100'>{title}</div>
      <div className='text-1xl'>{description}</div>
      <div>
        {isCompleted?
      <button onClick={handleRepeat} className='bg-kalar-400 text-kalar-100 p-1 mr-1'>Repeat</button>
        :
      <button onClick={handleEdit} className='bg-kalar-400 text-kalar-100 p-1 mr-1'>Edit</button>
        }
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