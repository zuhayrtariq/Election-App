import React, { Suspense, useEffect, useState } from "react";

import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa6";
import { useLoginMutation, useProxyLoginMutation } from "../store/api/LoginApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const HomePage = () => {
  const navigate = useNavigate();
  const [userLoginFunc, results] = useLoginMutation();
  const [userProxyLoginFunc] = useProxyLoginMutation();
  const [proxyFlag, setProxyFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault();
    if (proxyFlag == false) {
      const { data } = await userLoginFunc({ username, password });

      if (data != "422" && data != "111") {
        toast.success("Welcome " + data.name);
        console.log(data);
        sessionStorage.setItem("userDetails", JSON.stringify(data));
        navigate("/vote");
      }
      if (data == "422") {
        toast.error("Invalid Details");
      }
      if (data == "111") {
        toast.error("Vote Already Casted");
      }
    }
    if (proxyFlag == true) {
      const { data } = await userProxyLoginFunc({ username, password });

      if (data != "422" && data != "111" && data != "500") {
        toast.success("Welcome " + data.name);
        console.log(data);
        sessionStorage.setItem("userDetails", JSON.stringify(data));
        navigate("/vote");
      }
      if (data == "422") {
        toast.error("Invalid Details");
      }
      if (data == "111") {
        toast.error("Vote Already Casted");
      }
      if (data == "500") {
        toast.error("No Proxy Found");
      }
    }
  };

  return (
    <div className="w-full h-screen  bg-primary bg-[url('bg-home.JPG')] z-10 bg-center bg-cover">
      <form action="">
        <div className="absolute z-50 top-[15%] left-[60%] flex items-center justify-center flex-col bg-gray-200 p-4 py-6 rounded-lg">
          <img src="logo.png" alt="Prime Logo" width={60} className="mb-4" />
          <div className="text-primary font-bold text-3xl mb-4">
            {" "}
            Social Club
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
          <div className="pt-2 flex items-center justify-end w-full gap-x-1 text-sm">
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text pr-1">Proxy</span>
                <input
                  type="checkbox"
                  onChange={(e) => setProxyFlag(e.target.checked)}
                  className="checkbox checkbox-primary checkbox-xs"
                />
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
  );
};

export default HomePage;
