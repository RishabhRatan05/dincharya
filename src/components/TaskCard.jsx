import React, { useState } from 'react'

const TaskCard = ({title, description, isCompleted}) => {
  const url = 'http://localhost:8000/api/progress/'
  // const handleDelete=async()=>{
  //     try {
  //         const res =await fetch(url+id,{
  //           method:"DELETE",
  //           headers:{
  //             "Content-Type":"application/json"
  //           },
  //         })
  //         const data = res.json()
  //         // if(data.success) getTodos()
  //         console.log(data)
  //     } catch (error) {
        
  //     }
  // }
  // console.log('complete',isCompleted)
  return (
    <div className={`flex justify-between items-center ${isCompleted ? 'bg-kalar-200' : 'bg-kalar-green'}  w-full p-2 md:m-2 my-2`}>
      <div className='text-2xl md:text-4xl text-kalar-100'>{title}</div>
      <div className='text-1xl'>{description}</div>
      <div>
      <button className='bg-kalar-400 text-kalar-100 p-1 mr-1'>Edit</button>
      {isCompleted?
      <button className='bg-kalar-400 text-kalar-100 p-1'>
        Delete
      </button>
      :<button  className='bg-kalar-400 text-kalar-100 p-1'>
        Done
      </button>}
      </div>
    </div>
  )
}

export default TaskCard