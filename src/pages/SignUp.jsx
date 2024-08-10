import React, { useState } from 'react'
import { useSignUpMutation } from '../redux/api/auth/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const signUp = useSignUpMutation()[0]
    const navigate = useNavigate()
    const [profile,setProfile] = useState()

    const handleChange=(e)=>{
      setProfile(prev=>({...prev,
        [e.target.name] : e.target.value
      }))
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const message= await signUp(profile)
      if(message?.data?.success){
        localStorage.setItem('token',(message?.data?.token))
        return navigate('/')
      }
      alert('User already exists')
    }
  return (
    <form onSubmit={handleSubmit} className='h-screen bg-gradient-to-tr from-black to bg-cyan-500 flex flex-col gap-3 items-center justify-center '>
        <label className='text-white text-3xl'>Name</label>
        <input name='name' onChange={handleChange} required placeholder='enter your name ' className='text-2xl border-none focus:outline-sky-300  '></input>
        <label className='text-white text-3xl'>Email</label>
        <input name='email' onChange={handleChange} required placeholder='enter your email ' className='text-2xl focus:outline-sky-300  '/>
        <label className='text-white text-3xl'>Password</label>
        <input name='password' onChange={handleChange} required type='password' placeholder='enter password' className='text-2xl focus:outline-sky-300 '/>
        <button type='submit' className='bg-kalar-400 px-2 mt-3 rounded text-white text-2xl'>Submit</button>
    </form>
  )
}

export default SignUp