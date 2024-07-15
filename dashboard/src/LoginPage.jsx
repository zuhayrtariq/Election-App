import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault();
       
          const { data } = await axios.post('/admin-login',{username,password},{withCredentials : true})
   
          if (data != "422" && data != "533") {
            toast.success("Welcome " + data.name);
      
            sessionStorage.setItem("userDetails", JSON.stringify(data));
            navigate("/dashboard");
          }
          if (data == "422") {
            toast.error("Invalid Details");
          }
          if (data == "533") {
            toast.error("You are not an Admin" );
          }
      
      };
  return (
    <div className="w-full h-screen  bg-primary bg-[url('bg-home.JPG')] z-10 bg-center bg-cover">
    <form action="">
      <div className="absolute z-50 top-[15%] left-[60%] flex items-center justify-center flex-col bg-gray-200 p-4 py-6 rounded-lg">
        <img src="logo.png" alt="Prime Logo" width={60} className="mb-4" />
        <div className="text-primary font-bold text-3xl mb-4">
          {" "}
          Admin Login
        </div>
        <div className="flex flex-col  gap-y-4">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser />
            </label>
          </div>
          <div>
            <label className="input input-bordered input-primary flex items-center gap-2">
              <input
                type={showPassword ? 'text':"password"}
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={()=>setShowPassword(!showPassword)}>
                
              {showPassword ?  <FaEye/> : <FaEyeSlash />  }
              </span>
              
            </label>
          </div>
        </div>
      
        <button
          onClick={handleLogin}
          type="submit"
          className="mt-4 btn btn-primary hover:text-black flex items-center justify-center text-white font-semibold text-lg">
          Login
        </button>
      </div>
      {/* <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
      <color attach="background" args={["#379F2E"]} />

      <Suspense>
        <Experience />
      </Suspense>
    </Canvas> */}
    </form>
  </div>
  )
}

export default LoginPage