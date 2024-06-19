import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import TaskCard from '../components/TaskCard'
import Footer from '../components/Footer'

const Progress = () => {
  const URL = 'https://dincharyaserver.onrender.com/'
  const url = process.env.URL
  const id='666e9fc917dd12ca820c19ae'
  const url2= URL+id
  const [created,setCreated] = useState(false)
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [todo,setTodo] = useState({
    title:'',
    description:'',
    isCompleted:false,
  })
  
  console.log('run',URL+id)
  const [todos,setTodos] = useState([])

//get todos
  const getTodos= async()=>{
      
    try {
      const data= await fetch(url2,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        },
      })

      const res=await data.json()
      const par = await JSON.parse(res.daa)

      setTodos(par)
    } catch (error) {
      console.error(error)
    }
  }

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
    try {
      const res= await fetch(url2,{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
      })
      const data = await res.json()
      console.log(data.success)
      if(data.success) setCreated(!created)
      
    } catch (error) {
      console.error('fetching error',error)
    }
    }

  }
    useEffect(()=>{
    getTodos()
  },[])
  useEffect(()=>{
    console.log('created changed',created)
    getTodos()
  },[created])


  return (
    <>
    <Navbar/>
    <main className='px-5 flex flex-col   bg-gradient-to-tr from bg-kalar-100 to bg-kalar-200'>
    <div className='md:flex md:justify-around  gap-2  '>
      <div className=''>
        <div className=' text-6xl md:8xl text-kalar-400 mt-3 flex justify-center items-center'>
          To be done
        </div>
        <div className=''>
          {todos?.map((todo, index)=>(
          <>
            {todo.isCompleted?
            <></>      
            :
           <TaskCard key={todo._id} id={todo._id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted}/>
             }
           </>
          ))
          }
        </div>


      </div>
        <div className='h-1 mt-3 md:hidden w-64 mx-auto bg-kalar-100'></div>

      <div>
        <div className=' text-6xl md:8xl text-kalar-400 mt-3 flex justify-center items-center'>
        Completed
        </div>
        <div className=''>
          {todos?.map((todo, index)=>(
          <>
            {console.log('inside',todo.isCompleted)}
            {todo.isCompleted?
           <TaskCard key={todo._id} id={todo._id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted}/>
            :
            <></>
            }
          </>
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