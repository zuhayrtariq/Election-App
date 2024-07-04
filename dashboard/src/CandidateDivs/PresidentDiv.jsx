import React, { useState } from 'react'
import Candidate from '../components/Candidate'
import LeadingCrown from '../components/LeadingCrown'
import CandidateWithPic from '../components/CandidateWithPic'

const PresidentDiv = ({heading = 'President',data}) => {
  const maxVotes = Math.max(...data.map(o => o.Votes))
  return (
    <div className='w-full h-full  shadow-inner  px-4  rounded-lg'>
        <div className='flex items-center justify-center w-full text-primary-content text-3xl pt-4 uppercase'>{heading}</div>
    <div className='w-full  grid grid-cols-2 gap-x-2'>
    {
      data.map((x,i)=>{
        return <div className='relative flex flex-col w-full justify-center items-center text-primary-content font-bold font-primeFont'>
        <div className={`${maxVotes == x.Votes ? 'opacity-100' : 'opacity-0'} animate-bounce`}><LeadingCrown/></div>
        <CandidateWithPic name={x.Name} designation={x.designation} votes={x.Votes}/>
        </div>
      })
    }

       
    </div>
    </div>
  )
}

export default PresidentDiv