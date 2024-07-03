import React from 'react'

const Header = () => {
  
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  return (
    <div className='w-full flex items-center justify-between h-[90px] text-2xl font-bold text-primary'>
        <img src="logo.png" width={60} alt="" className='ml-4 mt-2' />
        <div className='flex absolute w-full items-center justify-center '>
            <p className='text-5xl font-primeFont text-[#40403f] pt-2 '>Social Club Election 2024</p>
        </div>
        <div className='flex items-center justify-center mr-4'>
            <p className='text-base text-center'>Welcome <br /> <b>{userDetails.name}</b></p>
        </div>
    </div>
  )
}

export default Header