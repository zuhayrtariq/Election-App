
import React, { Suspense, useContext, useState } from 'react'
import { VoteContext } from '../context/VoteContext'


const MultipleVotingDiv = ({name,candidateId= 1, imgUrl="https://www.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-260nw-1505360618.jpg",position= 5 }) => {

  const {votes,setVotes} = useContext(VoteContext);
  const selectedId = votes[position];
  const selectedArray = votes[5];
  const index = selectedArray.indexOf(candidateId)
const handleCastVote = () => {

  if(index == -1)
     {
      let temp = [...votes[5]];
      if(temp.length < 5)
          {

              temp.push(candidateId);
              setVotes({...votes,5 : temp}) 
          }
      
  }
  else{
       let temp = [...votes[5]];
       temp.splice(index,1);
       setVotes({...votes,5 : temp}) 
  }
};
  let checked = false;
  if(index != -1)
    checked = true;

  return (
    <div className={`w-full max-w-[250px]   overflow-hidden py-2 bg-primary   hover:text-black  cursor-pointer rounded-lg relative ${checked  ? 'shadow-inner outline outline-4' : ''}`}
       onClick={handleCastVote}
       >
        {
          checked &&  <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img src="/src/images/voted_stamp.png" className='w-24' alt="Vote Stamp" />
          </div>
        }
      
<div className='w-full h-full flex items-center justify-center flex-col '>
    
<div className='text-base font-bold flex flex-col items-center   px-2 rounded-full text-center'>
  <img src={imgUrl} alt="Image" className='w-[100px] h-[100px]'/>
 <div className=' bg-primary px-2 rounded-lg text-primary-content mt-4 mx-6'>{name}</div>  
</div>

</div>
</div>

  )
}


export default MultipleVotingDiv