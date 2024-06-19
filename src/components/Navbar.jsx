import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const [user,setUser] = useState(false)

  return (
    <div className='z-20'>

      {/* Mobile version */}
      <div className='md:hidden z-20 flex justify-between p-2 bg-kalar-400'>
        <Link to={'/'} className='text-white'>
          dincharya
        </Link>
        <button onClick={()=>setClicked(!clicked)}>
          {clicked ? <>Unclick</>: 
          <>
          clicked
          </>
    }
        </button>
      </div>
        {clicked && 
          <div className='md:hidden bg-kalar-300 flex absolute w-full gap-3 flex-col justify-between y-100vh p-2'>
            <Link to={'/'} className='text-white hover:bg-opacity-0.2'>
              Home
            </Link>
            <Link to={'/progress'} className='text-white'>
              Progress
            </Link>
            <Link to={'/profile'} className='text-white'>
              Profile
            </Link>
            <div className='h-1 bg-slate-300'></div>
            {user?
              <Link to={'/'}>LogOut 
              </Link>
              :
              <div className=''>
              <Link to={'/signUp'} className='text-white'>
                Create Account
              </Link>
                <div   className='text-white'>or</div>
              <>
              <Link to={'/login'} className='text-white'>
                Login
              </Link>
              </>
              </div>
            }
          </div>
        }



      {/* DeskTop version */}
      <div className='md:flex hidden justify-between p-2 bg-kalar-400'>
        <Link to={'/'} className='text-white'>
          dincharya
        </Link>
        <Link to={'/'} className='text-white'>
          Home
        </Link>
        <Link to={'/progress'} className='text-white'>
          Progress
        </Link>
        <Link to={'/profile'} className='text-white'>
          Profile
        </Link>
          {user?
              <Link to={'/'}>LogOut 
              </Link>
              :
              <>
                <button onClick={()=>setClicked3(!clicked3)}>
                  Menu
                </button>
              {clicked3 &&
                <div className='absolute  bg-kalar-300 flex right-0 gap-3 flex-col justify-between p-2 mt-8'>
                  <Link to={'/signUp'} className='text-white'>
                    Create Account
                  </Link>
                    <div   className='text-white'>or</div>
                  <Link to={'/login'} className='text-white'>
                    Login
                  </Link>
                </div>
              }
              </> 
            }
      </div>

    </div>
  )
}

export default Navbar