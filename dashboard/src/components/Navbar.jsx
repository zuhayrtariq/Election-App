import React from 'react'

const Navbar = () => {
  
  return (
    <div className='w-full flex items-center justify-between h-full overflow-hidden text-2xl font-bold text-primary'>
        <img src="logo.png" width={40} alt="" className='pt-2 ml-4' />
        <div className='flex absolute w-[97vw]  overflow-hidden items-center justify-center '>
            <p className='text-5xl font-primeFont text-[#40403f] pt-2 '>Social Club Election 2024</p>
        </div>
        {/* <div className='flex items-center justify-center mr-4 p-2 bg-secondary rounded-full'>
            <p className='text-base text-center badge badge-secondary p-2 '> <span className='pt-1 text-white'>Committee Dashboard</span></p>
        </div> */}
    </div>
  )
}

export default Navbar