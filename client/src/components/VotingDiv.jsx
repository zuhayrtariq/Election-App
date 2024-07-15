
import React, { Suspense, useContext, useState } from 'react'
import { VoteContext } from '../context/VoteContext'


const VotingDiv = ({name,candidateId= 1, imgUrl="https://www.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-260nw-1505360618.jpg",position= 1,team = 'FunTastic Squad' }) => {

  const {votes,setVotes} = useContext(VoteContext);

  
  const handleCastVote = () =>{
    console.log(votes)
    console.log(votes[position])
    console.log(candidateId)
    if(votes[position] == candidateId)
      setVotes({...votes,[position] : ""})
    else
    setVotes({...votes,[position] : candidateId})
  }
  let checked = false;
  if(votes[position] == candidateId)
    checked = true;

  return (
    <div data-tip={checked ? `Click to Remove Vote`: `Click to Vote`} className={`z-50 tooltip w-full max-w-[300px] hover:rounded-2xl   py-2   bg-primary  hover:text-black  cursor-pointer  relative ${checked  ? 'shadow-inner outline outline-4 rounded-2xl' : 'rounded-lg'}`}
       onClick={handleCastVote}
       >
        {
          checked &&  <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <img src="/src/images/voted_stamp.png" className='w-28' alt="Vote Stamp" />
          </div>
        }
      
<div className='w-full h-full flex items-center justify-center flex-col '>
    
<div className='text-2xl font-bold   flex flex-col items-center text-center'>
  <img src={imgUrl} alt="Image" className='w-[240px] h-[240px] '/>
  <div className=' bg-primary rounded-lg  mt-2 mx-6 '>{name}</div>  
  
 {/* <div className=' mt-1  text-lg'>{team}</div>   */}
</div>

</div>
</div>

  )
}


export default VotingDiv