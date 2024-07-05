import React from 'react'
import Marquee from 'react-fast-marquee'

const Ticker = () => {
  return (
    <Marquee play={true} >
    <div className='cursor-pointer bg-primary' >
    <p className='px-4 text-white inline'>Wasiq Faoorq is leading by 4 Votes</p>
    <p className='px-4 text-black inline'>Saad  is Leading by 2 Votes</p>
</div>
</Marquee>
  )
}

export default Ticker