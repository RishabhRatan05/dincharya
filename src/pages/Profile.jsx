import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { useGetProfileQuery } from '../redux/api/user/profile'
import { useEffect, useState } from 'react'




const Profile = () => {
  
const token = localStorage.getItem('token')

  const {data,isError,isLoading,isSuccess} = useGetProfileQuery(token)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')



  useEffect(()=>{
    if(isSuccess){
      const n=(data?.user)
      setName(n.name)
      setEmail(n.email)
    }
  },[isSuccess])

  return (
    <>
    <Navbar/>
    {token?
    <div className='flex flex-col justify-center items-start m-4'>
    <p className='flex-start text-kalar-300'>Hi</p>
    <div className='text-6xl text-kalar-400'>
      {name}
    </div>

    <p className='text-2xl text-kalar-orange'>{email}</p>
    </div>
    :
    <>
    Login Please
    </>
    }

    </>
  )
}


export default Profile