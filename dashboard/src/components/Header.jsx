import React, { useState } from 'react'
import DateCountdown from './DateCountdown'
import TotalVotes from './TotalVotes'

const Header = () => {


  return (
    // Total Height : 64px + 16px + 96px 
    <>
    <div className='flex w-full justify-between items-center h-16'> 

    </div>
    <div className='w-full  bg-white grid grid-cols-3 py-2 h-24'>

<div className='bg-red-200 flex items-center justify-center'></div>
<div className='bg-red-300 flex items-center justify-center'><DateCountdown/></div>
<div className='bg-red-100 flex items-center justify-center'><TotalVotes/></div>

    </div>
    </>
  )
}

export default Header