import React from 'react'

const CandidateWithPic = ({name = "Furqan Ullah",designation = "C&P Team Leader", votes = '100',imgUrl = '', winner = false}) => {
  return (
    <div className={`card bg-base-100 w-full  shadow-xl ${winner && ' outline-primary outline-double  hover:outline-dashed'}`}>
<div className='flex'>
<figure className="2xl:pl-4  ">
  <img
    src={`/images/${imgUrl}`}
    alt={`${name} img`} 
    className="rounded-xl w-[70px] h-[70px] hidden 2xl:block" />
</figure>
<div className="card-body p-4 items-center text-center  line-clamp-1">
  <p className="truncate text-clip overflow-hidden ">{name}</p>
  {/* <p className='tracking-tighter w-full text-truncate'>{designation}</p> */}
  <div className="card-actions  flex items-center justify-center">
    <div className="bg-primary px-2 rounded-full text-white ">{votes>1 ? `${votes} Votes` : `${votes} Vote`}</div>
  </div>
</div>
</div>
</div> 
  )
}

export default CandidateWithPic