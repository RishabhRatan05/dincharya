import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Navbar from '../components/Navbar'
import TaskCard from '../components/TaskCard'
import { updateTodos } from '../redux/slices/todo/todo'
import { useCreateProgressMutation, useEditProgressMutation, useGetTodosQuery } from '../redux/api/todo/todo'
import { valueChange } from '../redux/slices/todo/editTodo'
import { skipToken } from '@reduxjs/toolkit/query'


const Progress = () => {

  const dispatch = useDispatch()
  const {todos} = useSelector(state=>state.progress)
  const{_id} = useSelector(state=>state.user)
  const token = localStorage.getItem('token')

  const {data, isError, isLoading, isFetching, isSuccess, refetch} = useGetTodosQuery()

  useEffect(()=>{
    if(isSuccess){
      updateTodos(data)
    }
  },[])

  const editProgress = useEditProgressMutation()[0]


  const getAllTodos = async()=>{
    if(token){
      try {
        if(isSuccess){
          refetch()
          const res = await data
          const par = await JSON.parse(res.daa)
          dispatch(updateTodos(par))
          // setTodos(par)
        }
      } catch (error) {
        console.error('inside',error)
      }
    }
  }

  useEffect(()=>{
    
    getAllTodos()
  },[isSuccess,data,token])

  useEffect(()=>{
    getAllTodos()
  },[])


  const {title:newTitle,description:newDescription,editing, id} = useSelector(state=>state.editTodo)

  const [checkEdit,setCheckEdit] = useState(true)

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
      setTitle('')
      setDescription('')
      if(!token){
        return alert('Login First')
      }
      if(title==='') alert('Title is required')
      else{
        await createProgress(todoo)
        refetch()
      }
  }

  const handleUpdate =async (e)=>{
      e.preventDefault()
      if(title==='') {
        alert('Title is required')
        return
      }
      else{
          const editTodo = {
          title:title,
          id:id,
          description:description,
          isCompleted:false
          }
        editProgress(editTodo)
          const resetEditTodo = {
          title:'',
          id:'',
          description:'',
          editing:false
          }
          dispatch(valueChange(resetEditTodo))
          setTitle('')
          setDescription('')
          setCheckEdit(false)
        refetch()
      }
  }

  useEffect(()=>{
    setCheckEdit(true)
    if(editing){
        setTitle(newTitle)
        setDescription(newDescription)
          const editTodo = {
          title:title,
          description:description,
          id:id,
          editing:true
          }
        dispatch(valueChange(editTodo))
    }
  },[id])

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
        <>{token?
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
        </div>:<div>
          Login Please
        </div>
        }
        </>
        }


      </div>
        <div className='h-1 mt-3 md:hidden w-64 mx-auto bg-kalar-100'></div>

      <div>
        <div className=' text-6xl md:8xl text-kalar-400 mt-3 flex justify-center items-center'>
        Completed
        </div>
        <div>
          {token?
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
          :<></>
          }
        </div>
      </div>

    </div>
      <div className='h-1 md:w-full mt-3 w-64 mx-auto bg-kalar-100'></div>

    <div className='flex justify-center items-center'>
      {checkEdit && editing?
      <>
      <form onSubmit={handleUpdate} method='PUT' className='w-full  flex flex-col max-w-md md:p-4 p-1'>
        <label className='text-2xl'>Title</label>
        <input name='title' value={title} type='text' onChange={handleChange} className='focus:outline-none text-2xl p-1'></input>
        <label className='text-2xl'>Description</label>
        <textarea name='description' value={description} onChange={handleChange} className='h-20 text-1xl focus:outline-none p-1'></textarea>
        <button type='submit' className='mt-2 bg-kalar-400 text-kalar-100 p-1 text-3xl'>Update Task</button>
      </form>
      </>
      :
      <form onSubmit={handleSubmit} className='w-full  flex flex-col max-w-md md:p-4 p-1'>
        <label className='text-2xl'>Title</label>
        <input name='title' value={title} type='text' onChange={handleChange} className='focus:outline-none text-2xl p-1'></input>
        <label className='text-2xl'>Description</label>
        <textarea name='description' value={description} onChange={handleChange} className='h-20 text-1xl focus:outline-none p-1'></textarea>
        <button type='submit' className='mt-2 bg-kalar-400 text-kalar-100 p-1 text-3xl'>Add New Task</button>
      </form>
      }
    </div>

    </main>
    {/* <Footer/> */}
    </>
  )
}

export default Progress