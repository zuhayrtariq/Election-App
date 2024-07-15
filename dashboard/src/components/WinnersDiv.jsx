import React from 'react'

const WinnersDiv = () => {
  return (
    <div className='w-full h-full pt-2'>
        <h1 className='flex items-center justify-center text-xl'>CURRENTLY WINNING</h1>
    <div className='w-full  grid grid-cols-3 '>
        <div className='flex items-center w-full  flex-col'>
            <h2 className='text-xl font-bold'>Vice President</h2>
            <img src="/images/Furqanullah Khan.jpg" alt="" className='h-[100px] w-[100px]' />
        </div>
        <div className='flex items-center w-full h-full flex-col'>
            <h2 className='text-xl font-bold'>President</h2>
            <img src="/images/Furqanullah Khan.jpg" alt="" className='h-[100px] w-[100px]' />
        </div>
        <div className='flex items-center w-full h-full flex-col'>
            <h2 className='text-xl font-bold'>Secretary</h2>
            <img src="/images/Furqanullah Khan.jpg" alt="" className='h-[100px] w-[100px]' />
        </div>
    </div>
    </div>
  )
}

export default WinnersDiv