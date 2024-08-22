import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Pages/Home'
import Websites from './Pages/MyWebsites'
import Games from './Pages/MyGames'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'

function App() {

  const [gameID, setGameID] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/websites' element={<Websites/>}/>
        <Route path='/games' element={<Games setGameID={setGameID}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/games' element={<Games/>}/>
      </Routes>
    </>
  )
}

export default App
