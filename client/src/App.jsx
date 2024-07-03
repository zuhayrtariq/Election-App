
import './App.css'
import { Route, Routes } from 'react-router-dom'
import VotePage from './pages/VotePage'
import ThankyouPage from './pages/ThankyouPage'
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      
      <Route path='/vote' element={<VotePage/>}/>
      
      <Route path='/thankyou' element={<ThankyouPage/>}/>
    </Routes>
  <Toaster/>
  </>
  )
}

export default App
