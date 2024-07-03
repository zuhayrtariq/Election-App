
import React, { Suspense, useContext, useState } from 'react'
import { VoteContext } from '../context/VoteContext'


const VotingDiv = ({name,candidateId= 1, imgUrl="https://www.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-260nw-1505360618.jpg",position= 1 }) => {

  const {votes,setVotes} = useContext(VoteContext);
  console.log(votes)
  
  const handleCastVote = () =>{
    setVotes({...votes,[position] : candidateId})
  }
  let checked = false;
  if(votes[position] == candidateId)
    checked = true;

  return (
    <div className={`w-full max-w-[300px]   overflow-hidden py-8 bg-primary  hover:text-black  cursor-pointer rounded-lg relative ${checked  ? 'shadow-inner outline outline-4' : ''}`}
       onClick={handleCastVote}
       >
        {
          checked &&  <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src="/src/images/voted_stamp.png" className='w-28' alt="Vote Stamp" />
          </div>
        }
      
<div className='w-full h-full flex items-center justify-center flex-col '>
    
<div className='text-2xl font-bold   flex flex-col items-center text-center'>
  <img src={imgUrl} alt="Image" className='w-[180px] h-[180px] '/>
 <div className=' bg-primary rounded-lg text-primary-content mt-2 mx-6'>{name}</div>  
</div>

</div>
</div>

  )
}


export default VotingDiv