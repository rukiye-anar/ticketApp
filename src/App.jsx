import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Activity from './pages/Activity'
import Concert from './pages/Concert'
import Home from './pages/Home'
import Theatre from './pages/Theatre'
import Login from './pages/Login'

function App() {

  return (
    <>
     <Navbar/>
     <div>
      <Routes>
           <Route path="/" element={<Home/>}></Route>
        <Route path="/Concert" element={<Concert/>}></Route>
        <Route path="/Activity" element={<Activity/>}></Route>
        <Route path="/Theatre" element={<Theatre/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
  
     </div>
    </>
  )
}

export default App
