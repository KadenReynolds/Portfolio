import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Pages/Home'
import Websites from './Pages/MyWebsites'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/websites' element={<Websites/>}/>
      </Routes>
    </>
  )
}

export default App
