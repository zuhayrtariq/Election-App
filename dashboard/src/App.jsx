import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DashboardPage from "./DashboardPage";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Toaster } from "react-hot-toast";
import { DataContext } from "./DataContext";
axios.defaults.baseURL = `http://10.159.98.132:4000`;
axios.defaults.withCredentials = true;
function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <DashboardPage/> */}
        </Routes>
       
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
