import React from 'react'
import Header from './components/Header'
import Results from './components/Results'
import PresidentChart from './charts/PresidentChart'
import MainLayout from './components/MainLayout'
import Ticker from './components/Ticker'

const DashboardPage = () => {
  return (
    <>
    <div className=" h-screen w-full  px-2 bg-[url('bg.jpg')] z-10 bg-center bg-cover">
        <Header/>
    <div className='grid mt-4 grid-cols-4 h-[calc(100vh-160px)] overflow-hidden  '>
      {/* <div className='col-span-4'><Ticker/></div> */}
    <div className='col-span-3 '><MainLayout/></div>
    <div className='col-span-1 ml-4'><Results/> </div>
    </div>
    </div>
    </>
  )
}

export default DashboardPage