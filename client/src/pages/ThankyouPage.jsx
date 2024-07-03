import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ThankyouPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      sessionStorage.removeItem('userDetails')
      navigate('/')
    },3000)
  },[])

  return (
    <div className='bg-secondary flex h-screen w-full items-center justify-center'>
      <div className='text-5xl font-bold text-center text-black'>
        <h1>Thankyou!</h1>
        <h3 className='text-base'>Your response has been submitted </h3>
      </div>
    </div>
  )
}

export default ThankyouPage