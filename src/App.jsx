import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Pages/Home'
import Websites from './Pages/MyWebsites'
import Games from './Pages/MyGames'
import GameView from './Pages/GameView'
import AboutMe from './Pages/AboutMe'
import Contact from './Pages/Contact'

function App() {

  const [myGames, setMyGames] = useState([
    {
      id:0,
      name:"Essence",
      timeCreated:"10 Days",
      status:"Complete",
      gameCatalogImg:"src/assets/Essence.jpg",
      gameScreenShot:"src/assets/EssenceScreenShot.png"
    },
    {
      id:1,
      name:"blah, blah",
      timeCreated:"20 Days",
      status:"In Development",
      gameCatalogImg:"src/assets/TMoFM.jpg",
      gameScreenShot:""
    },
    {
      id:2,
      name:"blah, blah, blah",
      timeCreated:"30 Days",
      status:"Complete"
    },
  ])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/websites' element={<Websites/>}/>
        <Route path='/games' element={<Games myGames={myGames}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/games/:gameID' element={<GameView myGames={myGames}/>}/>
      </Routes>
    </>
  )
}

export default App
