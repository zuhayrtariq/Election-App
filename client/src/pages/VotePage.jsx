import { Canvas } from '@react-three/fiber'
import React, { Suspense, useContext, useState } from 'react'
import Experience from '../components/Experience'
import VotingDiv from '../components/VotingDiv'
import Header from '../components/Header'
import { PageContext } from '../context/PageContext'
import MultipleVotingDiv from '../components/MultipleVotingDiv'
import { VoteContext } from '../context/VoteContext'
import { useCastVoteMutation } from '../store/api/VoteCastApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const VotePage = () => {
    
 const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    const navigate = useNavigate()
  const {page,setPage} = useContext(PageContext)
  const {votes,setVotes} = useContext(VoteContext);
  const [castVoteFunc,results] = useCastVoteMutation();
   
  let submitFlag = false;
  if(sessionStorage.getItem('userDetails') == undefined)
    {
        return (
            <div>Not Logged in</div>
        )
    }
    if(votes[1].length && votes[2].length && votes[3].length && votes[4].length && votes[5].length == 5 )
        {
            submitFlag = true
        }
  const handleVotesSubmit = async() =>{
   
    const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    const username = userDetails.id;
    let flatVotes = Object.values(votes);
    flatVotes = flatVotes.flat()
    setVotes({  '1' : '',
        '2' : '',
        '3' : '',
        '4' : '',
        '5' : []
    })
    setPage(0)
    navigate('/thankyou')
    sessionStorage.removeItem('userDetails');
   await castVoteFunc({username : username, votes : flatVotes})
  }

  const nextPage = (value) => {
    if(votes[value].length)
    setPage(page+1)
    else
    toast.error("Please vote to proceed")
  };
  
  const prevPage = () => {
    setPage(page-1)};
  if(!userDetails)
    {
        return(

            <div>Not Logged In</div>
        )
    }
  return (
    <>

<div className="absolute top-0 z-[-2] h-screen w-full bg-cover bg-center bg-white bg-[url('bg.jpg')]"></div>
   

{/* <div className="absolute h-screen w-full -z-10 bg-secondary bg-cover bg-center blur-sm"></div> */}
    <Header/>

    {page == 0 && <>
    <div className="header  text-secondary text-5xl pt-8  flex flex-col items-center justify-center h-[60px] font-bold">
        <div className='py-2 bg-transparent text-[#40403f] w-[700px] flex items-center justify-center font-primeFont pt-4'>President</div>
        
    </div>
<div className='w-full h-[calc(100vh-150px)]  flex flex-col items-center justify-center px-8'>
       
       <div className='grid grid-cols-2 w-full justify-items-center gap-8'>
    
        
       <VotingDiv candidateId={'PN001116'} position={1} name={'Furqan Khan'} imgUrl = '/src/images/FurqanUllah.jpg' team='JoyFul League' />
      
      
       
     

<VotingDiv candidateId={'PN000675'} position={1} name={'Wasiq Farooq'} imgUrl = '/src/images/Wasiq Farooq.jpg' team='Fun-Tastic Squad' />
      
        
       
       </div>

<div className='absolute bottom-4 flex gap-x-4 z-20'>
  <button className='btn btn-primary text-white text-lg' onClick={()=>nextPage(1)}>Next</button>
</div>

       </div>
       </>}

       {page == 1 && <>
        <div className="header  text-secondary text-5xl pt-8  flex flex-col items-center justify-center h-[60px] font-bold">
        <div className='py-2 bg-transparent text-[#40403f] w-[700px] flex items-center justify-center font-primeFont pt-4'>Vice President</div>
        
    </div>
<div className='w-full h-[calc(100vh-150px)]  flex flex-col items-center justify-center px-8'>
       
       <div className='grid grid-cols-2 w-full justify-items-center gap-8'>
    
        
       <VotingDiv candidateId={'PN001091'} position={2} name={'Sauban Ahmed'} imgUrl = '/src/images/Sauban Ahmed.jpg' team='JoyFul League' />
      
      
       
     

<VotingDiv candidateId={'PN001092'} position={2} name={'Saad ur Rehman'} imgUrl = '/src/images/SaadurRehman.jpg' team='Fun-Tastic Squad' />
      
        
       
       </div>

<div className='absolute bottom-4 flex gap-x-4 z-20'>
    
  {/* <button className='btn btn-primary text-white text-lg' onClick={prevPage}>Back</button> */}
<button className='btn btn-primary text-white text-lg' onClick={()=>nextPage(2)}>Next</button>
</div>

       </div>
       </>}

       {page == 2 && <>
        <div className="header  text-secondary text-5xl pt-8  flex flex-col items-center justify-center h-[60px] font-bold">
        <div className='py-2 bg-transparent text-[#40403f] w-[700px] flex items-center justify-center font-primeFont pt-4'>General Secretary</div>
        
    </div>
<div className='w-full h-[calc(100vh-150px)]  flex flex-col items-center justify-center px-8'>
       
       <div className='grid grid-cols-2 w-full justify-items-center gap-8'>
    
        
      
      
       
     

<VotingDiv candidateId={'PN000875'} position={3} name={'Muhammad Jibran'} imgUrl = '/src/images/Jibran Khan.jpg' team='JoyFul League' />
       <VotingDiv candidateId={'PN000846'} position={3} name={'Saad Ali Ghouri'} imgUrl = '/src/images/Saad Ghouri.jpg' team='Fun-tastic Squad' />
      
        
       
       </div>

<div className='absolute bottom-4 flex gap-x-4 z-20'>
    
  {/* <button className='btn btn-primary text-white text-lg' onClick={prevPage}>Back</button> */}
<button className='btn btn-primary text-white text-lg' onClick={()=>nextPage(3)}>Next</button>
</div>

       </div>
       </>}

       {page == 3 && <>
        <div className="header  text-secondary text-5xl pt-8  flex flex-col items-center justify-center h-[60px] font-bold">
        <div className='py-2 bg-transparent text-[#40403f] w-[700px] flex items-center justify-center font-primeFont pt-4'>Treasurer</div>
        
    </div>
<div className='w-full h-[calc(100vh-150px)]  flex flex-col items-center justify-center px-8'>
       
       <div className='grid grid-cols-1 w-full justify-items-center gap-8'>
    
        
    
     

<VotingDiv candidateId={'PN001256'} position={4} name={'Aamir Zia'} imgUrl = '/src/images/Aamir Zia.jpg'  
team='JoyFul League'/>
      
        
       
       </div>

<div className='absolute bottom-4 flex gap-x-4 z-20'>
    
  {/* <button className='btn btn-primary text-white text-lg' onClick={prevPage}>Back</button> */}
<button className='btn btn-primary text-white text-lg' onClick={()=>nextPage(4)}>Next</button>
</div>

       </div>
       </>}

       {page == 4 && <>
        <div className="header  text-secondary text-5xl pt-8  flex flex-col items-center justify-center h-[60px] font-bold">
        <div className='py-2 bg-transparent text-[#40403f] w-[700px] flex items-center justify-center font-primeFont pt-4'>Executive Members</div>
        
    </div>
<div className='w-full min-h-[calc(100vh-150px)]  flex flex-col items-center justify-center px-8'>
    <p className='text-2xl pb-8 flex w-full  pl-6 text-gray-600 justify-center'>Select Any Five Candidates.</p>
       
       <div className='grid grid-cols-5 gap-4 gap-y-8 w-full justify-items-center '>
    
  
<MultipleVotingDiv candidateId={'PN001111'} position={5} name={'Yasir Saeed'} imgUrl = '/src/images/Yasir Saeed.jpg'  />
<MultipleVotingDiv candidateId={'PN000879'} position={5} name={'M. Ali Iqbal'} imgUrl = '/src/images/Ali Iqbal.jpg'  />
<MultipleVotingDiv candidateId={'PN001046'} position={5} name={'Syed Nomanuddin'} imgUrl = '/src/images/NomanUddin.jpg'   />
<MultipleVotingDiv candidateId={'PN000554'} position={5} name={'Saba John'} imgUrl = '/src/images/Saba John.jpg'  />      
<MultipleVotingDiv candidateId={'PN000556'} position={5} name={'Sehrish Aslam'} imgUrl = '/src/images/Sehrish Aslam.jpg'  />
<MultipleVotingDiv candidateId={'PN001138'} position={5} name={'Umer Farooq'} imgUrl = '/src/images/Umer Farooq.jpg' team='Fun-Tastic Squad' />
<MultipleVotingDiv candidateId={'PN000383'} position={5} name={'Nadia Nadeem'} imgUrl = '/src/images/Nadia Nadeem.jpg' team='Fun-Tastic Squad' />
<MultipleVotingDiv candidateId={'PN001112'} position={5} name={'Sajjad Khan'} imgUrl = '/src/images/Sajjad Khan.jpg' team='Fun-Tastic Squad' />
<MultipleVotingDiv candidateId={'PN000496'} position={5} name={'Nargis Basaria'} imgUrl = '/src/images/Nargis Basaria.jpg' team='Fun-Tastic Squad' />
<MultipleVotingDiv candidateId={'PN000929'} position={5} name={'Muhammad Bilal'} imgUrl = '/src/images/Muahammad Bilal.jpg' team='Fun-Tastic Squad' />
      
        
       
       </div>

<div className='absolute bottom-4 flex gap-x-4 z-20'>
    
  {/* <button className='btn btn-primary text-white text-lg' onClick={prevPage}>Back</button> */}
<button className='btn btn-primary text-white text-lg' disabled= {!submitFlag}  onClick={handleVotesSubmit}>Submit</button>
</div>

       </div>
       </>}
       

    

      

      
    </>
  )
}

export default VotePage