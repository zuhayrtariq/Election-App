import React from 'react'

const Candidate = ({name = "Furqan Ullah",designation = "C&P Team Leader", votes = '100', winner = false}) => {
  return (
    <div className={`card bg-base-100  shadow-xl w-full ${winner && 'border-4 border-primary-content'}`}>
   
    <div className="card-body p-2 items-center text-center ">
      <h2 className="card-titles text-sm">{name}</h2>
      {/* <p>{designation}</p> */}
      <div className="card-actions">
        <button className="btn bg-primary text-white btn-sm">{votes} Votes</button>
      </div>
    </div>
  </div>
  )
}
export default Candidate