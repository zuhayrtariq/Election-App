import React from 'react'

const Candidate = ({name = "Furqan Ullah",designation = "C&P Team Leader", votes = '100', winner = false}) => {
  return (
    <div className={`card bg-base-100   shadow-xl w-full ${winner && ' outline-primary outline-double  hover:outline-dashed'}`}>
<div className='flex'>

<div className="card-body p-2 items-center text-center  line-clamp-1">
  <p className="truncate text-clip overflow-hidden ">{name}</p>
  {/* <p className='tracking-tighter w-full text-truncate'>{designation}</p> */}
  <div className="card-actions  flex items-center justify-center">
    <button className="btn btn-primary text-white btn-xs">{votes} Votes</button>
  </div>
</div>
</div>
</div>
  )
}
export default Candidate

