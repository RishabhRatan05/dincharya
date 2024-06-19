import React from 'react'

const Login = () => {
    const handleSubmit=()=>{

    }
  return (
    <form onSubmit={handleSubmit} className='h-screen bg-gradient-to-tr from-black to bg-cyan-500 flex flex-col gap-3 items-center justify-center '>
        <label className='text-white text-3xl'>Email</label>
        <input placeholder='enter your email ' className='text-2xl focus:outline-sky-300  '/>
        <label className='text-white text-3xl'>Password</label>
        <input placeholder='enter password' className='text-2xl focus:outline-sky-300 '/>
        <button type='submit' className='bg-kalar-400 px-2 mt-3 rounded text-white text-2xl'>Submit</button>
    </form>
  )
}

export default Login