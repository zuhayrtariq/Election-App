import React from 'react'

const Candidate = ({name = "Furqan Ullah",designation = "C&P Team Leader", votes = '100', winner = false}) => {
  return (
    <div className={`card bg-base-100  shadow-xl w-full ${winner && 'border-4 border-primary-content'}`}>
    {/* <figure className="">
      <img
        src="/images/FurqanUllah.jpg"
        alt="Shoes"
        className="rounded-xl w-[100px] h-[100px]" />
    </figure> */}
    <div className="card-body p-4 items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{designation}</p>
      <div className="card-actions">
        <button className="btn btn-primary text-white text-xl">{votes} Votes</button>
      </div>
    </div>
  </div>
  )
}
export default Candidate