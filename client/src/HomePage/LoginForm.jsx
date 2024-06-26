import React, { useState } from 'react'
import {FaUser} from 'react-icons/fa6'
import { MdPassword } from "react-icons/md";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isUsernameReadonly, setIsUsernameReadonly] = useState(true);
    const [isPasswordReadonly, setIsPasswordReadonly] = useState(true);
  return (
    <div className='min-w-[450px] bg-gray-200 text-primary rounded-lg flex items-center justify-center py-4 px-4 flex-col shadow-xl'>


    <img src="/logo.png" alt="Prime Logo" width={60} className='pointer-events-none' />
    <h2 className='text-3xl text-primary font-bold py-2 pointer-events-none'>Social Club Elections</h2>


    <form action=""  autoComplete="off">

    <div className='my-4'>
    <label className="input outline-none active:outline-none flex items-center gap-2 text-md" >
        <FaUser/>
  <input type="text" className="grow text-black" placeholder="Username" value={username}   onChange={(e)=>{setUsername(e.target.value)}}
/>
  
</label>
    </div>

    <div className='my-4'>
    <label className="input outline-none active:outline-none flex items-center gap-2">
        <MdPassword/>
  <input type="password" className="grow text-black" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} />
  
</label>
    </div>
    <div className='flex items-center justify-center'>

    <button className="btn text-xl shadow-xl btn-primary w-[200px]">Proceed</button>
    </div>
    </form>
    </div>
  )
}

export default LoginForm