import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { useGetTodosQuery } from "../redux/api/todo/todo";

const Home = () => {

  useGetTodosQuery()
  return (<>
    <Navbar/>
    <main className='md:px-40 h-full text-center bg-gradient-to-r from bg-kalar-100 to bg-kalar-200'>
    
{/* Morning */}
      <div className='container mb-3 text-kalar-300 md:flex justify-evenly items-center p-2'>
        <h1 className='text-6xl  animate md:text-8xl text-kalar-400'>Morning</h1>
        <ul className='flex flex-col gap-3 md:mt-6 mt-3 md:text-3xl text-2xl'>
          <li>Wake Up Early</li>
          <li>Drink electrolite</li>
          <li>Go for Walk in the sun</li>
          <li>Fasted Gym</li>
          <li>Cold Shower</li>
          <li>Breakfast</li>
          <li>2hr Deep Work</li>
        </ul>
      </div>
      <div className='h-1 md:w-full w-64 mx-auto bg-kalar-100'></div>

{/* WorkOut */}
    <div className='md:flex mt-3 md:flex-row-reverse justify-evenly text-center'>
      <h1 className='text-6xl md:text-8xl flex justify-center items-center   animate text-kalar-400'>WorkOut</h1>
      <div className='mt-4 flex justify-between '>
      <Carousel
        showThumbs={false} 
        infiniteLoop ={true}
        autoPlay ={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        preventMovementUntilSwipeScrollTolerance	={true}

      >
        <div className=' flex flex-col justify-center items-center'>
          <h3 className='bg-kalar-400 text-kalar-100 text-2xl w-fit px-1 rounded-sm'>Push</h3>
              <ul className='flex flex-col gap-3 md:mt-6 mt-3 text-kalar-300 md:text-3xl text-1xl'>
              <li>
                <div>
                Wide grip-decline push-ups
                </div>
                <div>
                  3*failure
                </div>

              </li>
              <li>
                <div>
                    Diamond push-ups               
                </div>
                <div>
                  3*failure
                </div>
               
              </li><li>
                <div>
                  Pike push-ups   
                </div>
                <div>
                  3*failure
                </div>
              </li>
            </ul>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <h3 className='bg-kalar-400 text-kalar-100 text-2xl w-fit px-1 rounded-sm'>Pull</h3>
              <ul className='flex flex-col gap-3 md:mt-6 mt-3 text-kalar-300 md:text-3xl text-1xl'>
              <li>
                <div>
                    Pull-ups               
                </div>
                <div>
                  3*failure
                </div>

              </li>
              <li>
                <div>
                    Inverted rows 
                </div>
                <div>
                  3*failure
                </div>
               
              </li><li>
                <div>
                  Jackknife chin-ups  
                </div>
                <div>
                  3*failure
                </div>
              </li>
            </ul>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <h3 className='bg-kalar-400 text-kalar-100 text-2xl w-fit px-1 rounded-sm'>Legs</h3>
              <ul className='flex flex-col gap-3 md:mt-6 mt-3 text-kalar-300 md:text-3xl text-1xl'>
              <li>
                <div>
                Front foot elevated split squat 
                </div>
                <div>
                  3*failure
                </div>

              </li>
              <li>
                <div>
                   Long-step reverse lunges             
                </div>
                <div>
                  3*failure
                </div>
               
              </li><li>
                <div>
                  Hanging leg raise  
                </div>
                <div>
                  2*failure
                </div>
              </li>
            </ul>
        </div>
      </Carousel>
      {/* <div>
        <h1 className='text-kalar-200'>Diet</h1>
        <p className='primary'>BMI : 16.5</p>
        <p>Weight : 50kg</p>
        <p>Calories : 2672</p>
      </div> */}

      </div>
      </div>
      <div className='h-1 md:w-full w-64 mx-auto bg-kalar-100'></div>
      
      
{/* Goals */}
    <div className='md:flex mt-3 justify-evenly text-center'>
      <h1 className='text-6xl md:text-8xl flex justify-center items-center   animate text-kalar-400'>Goals</h1>
      <div className='mt-4 flex justify-between '>
      <Carousel
        showThumbs={false} 
        infiniteLoop ={true}
        autoPlay ={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        preventMovementUntilSwipeScrollTolerance	={true}
      >
        <div className=' flex flex-col justify-center items-center'>
          <h3 className='bg-kalar-400 text-kalar-100 text-2xl w-fit px-1 rounded-sm'>Diet</h3>
              <ul className='flex flex-col gap-3 md:mt-6 mt-3 text-kalar-300 md:text-3xl text-1xl'>
              <li>
                <div>
                BMI : 22.8
                </div>
                <div>
                My : 16.5
                </div>

              </li>
              <li>
                <div>
                  Weight : 69             
                </div>
                <div>
                  My : 50
                </div>
               
              </li>
            </ul>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <h3 className='bg-kalar-400 text-kalar-100 text-2xl w-fit px-1 rounded-sm'>Money</h3>
          <h1>Get a job</h1>
        </div>
      </Carousel>
      

      </div>
      </div>
    </main>
    <Footer/>
  </>
  )
}

export default Home