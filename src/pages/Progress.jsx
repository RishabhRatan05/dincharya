import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from '../components/Navbar'
import TaskCard from '../components/TaskCard'
import Footer from '../components/Footer'
import { createTodo, getAllTodos } from '../redux/slices/todo/todo'
import { useCreateProgressMutation, useEditProgressMutation, useGetTodosQuery } from '../redux/api/todo/todo'

const Progress = () => {

  const [todos,setTodos] = useState()

  const {data, isError, isLoading, isFetching, isSuccess} = useGetTodosQuery()

  const getAllTodos = async()=>{
    try {
      if(isSuccess){
        const res = await data
        const par = await JSON.parse(res.daa)
        setTodos(par)
      }
    } catch (error) {
      console.error('inside',error)
    }
  }

  useEffect(()=>{
    getAllTodos()
    
  },[isSuccess])

  const createProgress = useCreateProgressMutation()[0]

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [todoo,setTodo] = useState({
    title:'',
    description:'',
    isCompleted:false,
  })

//change value
  const handleChange=(e)=>{
      const val = e.target.name
      const value= e.target.value
      if(val==='title'){
        setTodo(prev=>({...prev,title:value}))
        setTitle(value)
        return
      }
        setTodo(prev=>({...prev,description:value}))
      setDescription(value)
      return
  }

//Create Todo
  const handleSubmit =async (e)=>{
      e.preventDefault()
      if(title==='') alert('Title is required')
      else{
          createProgress(todoo)
      }
  }


  return (
    <>
    <Navbar/>
    <main className='px-5 flex flex-col   bg-gradient-to-tr from bg-kalar-100 to bg-kalar-200'>
    <div className='md:flex md:justify-around  gap-2  '>
      <div className=''>
        <div className=' text-6xl md:8xl text-kalar-400 mt-3 flex justify-center items-center'>
          To be done
        </div>
        {isLoading? <h1>loading ...</h1>
        :
        <div className=''>
          {todos && todos?.map((todo, index)=>(
            todo &&(
            <> 
            { todo?.isCompleted?
            <></>      
            :
           <TaskCard key={todo._id} id={todo._id} todo={todo}/>
             }
           </>)
          ))
          }
        </div>
        }


      </div>
        <div className='h-1 mt-3 md:hidden w-64 mx-auto bg-kalar-100'></div>

      <div>
        <div className=' text-6xl md:8xl text-kalar-400 mt-3 flex justify-center items-center'>
        Completed
        </div>
        <div className=''>
          {todos && todos?.map((todo, index)=>(
            todo && 
          (<>
            {todo?.isCompleted?
           <TaskCard key={todo._id} id={todo._id} todo={todo}/>
            :
            <></>
            }
          </>)
          )) 
          }
        </div>
      </div>

    </div>
      <div className='h-1 md:w-full mt-3 w-64 mx-auto bg-kalar-100'></div>

    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-full  flex flex-col max-w-md md:p-4 p-1'>
        <label className='text-2xl'>Title</label>
        <input name='title' value={title} type='text' onChange={handleChange} className='focus:outline-none text-2xl p-1'></input>
        <label className='text-2xl'>Description</label>
        <textarea name='description' value={description} onChange={handleChange} className='h-20 text-1xl focus:outline-none p-1'></textarea>
        <button type='submit' className='mt-2 bg-kalar-400 text-kalar-100 p-1 text-3xl'>Add New Task</button>
      </form>
    </div>

    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Progress