import React from 'react'

const CandidateWithPic = ({name = "Furqan Ullah",designation = "C&P Team Leader", votes = '100',imgUrl = '', winner = false}) => {
  return (
    <div className={`card bg-base-100  shadow-xl w-full ${winner && 'border-4 border-primary-content'}`}>
<div className='flex'>
<figure className="pl-4">
  <img
    src={`/images/${imgUrl}`}
    alt={`${name} img`} 
    className="rounded-xl w-[70px] h-[70px]" />
</figure>
<div className="card-body p-4 items-center text-center">
  <h2 className="card-titlews">{name}</h2>
  {/* <p className='tracking-tighter w-full text-truncate'>{designation}</p> */}
  <div className="card-actions">
    <button className="btn btn-primary text-white btn-xs">{votes} Votes</button>
  </div>
</div>
</div>
</div> 
  )
}

export default CandidateWithPic