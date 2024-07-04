import React from 'react'
import Header from './components/Header'
import Results from './components/Results'
import PresidentChart from './charts/PresidentChart'
import MainLayout from './components/MainLayout'

const DashboardPage = () => {
  return (
    <>
    <div className=' h-screen w-full overflow-hidden px-2'>
        <Header/>
    <div className='grid grid-cols-4 h-[calc(100vh-170px)] overflow-hidden '>
    <div className='col-span-3 bg-blue-200'><MainLayout/></div>
    <div className='col-span-1 bg-blue-300'><Results/> </div>
    </div>
    </div>
    </>
  )
}

export default DashboardPage