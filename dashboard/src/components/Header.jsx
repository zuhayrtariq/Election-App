import React, { useState } from 'react'
import DateCountdown from './DateCountdown'
import TotalVotes from './TotalVotes'
import Navbar from './Navbar'
import VotingPercentage from './VotingPercentage'

const Header = () => {


  return (
    // Total Height : 64px + 16px + 80px 
    <>
    <div className='flex w-full overflow-hidden justify-between items-center h-16'> 
    <Navbar/>
    </div>
    <div className='w-full   grid grid-cols-3  h-20'>

<div className='flex items-center justify-center pl-2'><VotingPercentage/></div>
<div className=' flex items-center justify-center'><DateCountdown/></div>
<div className=' flex items-center justify-center pr-4'><TotalVotes/></div>

    </div>
    </>
  )
}

export default Header