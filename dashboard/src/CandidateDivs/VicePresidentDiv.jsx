import React from 'react'
import Candidate from '../components/Candidate'
import LeadingCrown from '../components/LeadingCrown'

const VicePresidentDiv = ({heading = 'Vice President'}) => {
  return (
    <div className='w-full h-full  shadow-inner  px-4  rounded-lg'>
    <div className='flex items-center justify-center w-full  text-3xl pt-4 uppercase text-white'>{heading}</div>
<div className='w-full  grid grid-cols-2 gap-x-2'>
    <div className='relative flex flex-col w-full justify-center items-center text-primary-content font-bold font-primeFont'>
        <div className='opacity-0'><LeadingCrown/></div>
        <Candidate name='Saad ur Rehman' designation='HSE Team Leader' votes='27'/>
        </div>
    <div className='relative flex flex-col w-full justify-center items-center text-primary-content font-bold font-primeFont'>
    <div className='opacity-100'><LeadingCrown/></div>
    <Candidate name='Sauban Ahmed' designation='C&P Team Leader' votes='100' winner={false}/>
        
    </div>
</div>
</div>
  )
}

export default VicePresidentDiv