import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardPage from './DashboardPage'
import axios from 'axios'
axios.defaults.baseURL = `http://10.159.97.2:4000` 
 axios.defaults.withCredentials = true;
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DashboardPage/>
    </>
  )
}

export default App
