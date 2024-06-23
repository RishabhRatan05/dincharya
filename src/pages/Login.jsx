import React, { useState } from 'react'
import { useLoginMutation } from '../redux/api/auth/auth'
import {redirect, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/slices/user'

const Login = () => {
    const login = useLoginMutation()[0]
    const dispatch = useDispatch()
    const {_id, name} = useSelector(state=>state.user)
    const [profile,setProfile] = useState()
    const navigate = useNavigate()

    const handleChange=(e)=>{
      setProfile(prev=>({...prev,
        [e.target.name] : e.target.value
      }))
    }

    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log('profile',profile)
      const message = await login(profile)


      localStorage.setItem('token',(message?.data?.token))
      const user = message?.data?.user[0]
      if(message?.data?.user){
        const newUser ={
          id:user._id,
          name:user.name
        }
      dispatch(loginUser(newUser))
      console.log('hi',name)
      return navigate('/')
      }
      else{
        console.log('invalid credentials')
      }
    }
  return (
    <form onSubmit={handleSubmit} className='h-screen bg-gradient-to-tr from-black to bg-cyan-500 flex flex-col gap-3 items-center justify-center '>
        <label className='text-white text-3xl'>Email</label>
        <input onChange={handleChange} name='email' placeholder='enter your email ' className='text-2xl focus:outline-sky-300  '/>
        <label className='text-white text-3xl'>Password</label>
        <input onChange={handleChange}  name='password' type='password' placeholder='enter password' className='text-2xl focus:outline-sky-300 '/>
        <button type='submit' className='bg-kalar-400 px-2 mt-3 rounded text-white text-2xl'>Submit</button>
    </form>
  )
}

export default Login