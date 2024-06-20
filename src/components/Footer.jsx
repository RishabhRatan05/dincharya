import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [quote,setQuote] = useState("")
  const url = 'https://type.fit/api/quotes'
  const url2 = 'https://static.animesuge.to/i/1/11/f8afece6eff312ce165e22779b894708.jpg'

  const getquote =async()=>{
    try {
        const gotquote = await (await fetch(url)).json()
        const random= Math.ceil(Math.random()*10)

        setQuote((gotquote[random].text))

    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(()=>{
    getquote()
  },[])
  return (
    <div className='p-2 flex items-center justify-between bg-primary '>
      <img alt='naruto' src='naruto.jpg' className='w-20 rounded-full border-kalar-100 border-2'></img>
  
      <p className='text-kalar-100'>  {quote}</p>
    </div>
  )
}


export default Footer