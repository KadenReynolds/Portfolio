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
      timeCreated:"40 Days",
      status:"Complete",
      gameCatalogImg:"src/assets/Essence.jpg",
      gameScreenShot:"src/assets/EssenceScreenShot.png",
      donwloadLink: "https://kadenreynolds.itch.io/essence"
    },
    {
      id:1,
      name:"The Murder of Felix Murphy",
      timeCreated:"20 Days",
      status:"Complete",
      gameCatalogImg:"src/assets/TMoFM.jpg",
      gameScreenShot:"",
      donwloadLink: "https://kadenreynolds.itch.io/tmofm"
    },
    {
      id:2,
      name:"Escape The Ship",
      timeCreated:"5 Days",
      status:"Complete",
      gameCatalogImg: "src/assets/ETS.png",
      gameScreenShot: "",
      donwloadLink: "https://kadenreynolds.itch.io/escape-the-ship"
    },
  ])

  const [mySites, setMySites] = useState([
    {
      id:1,
      name:"sha",
      timeCreated:"10 Days",
      status:"Complete"
    },
    {
      id:2,
      name:"sha la",
      timeCreated:"20 Days",
      status:"Complete"
    },
    {
      id:3,
      name:"sha la la",
      timeCreated:"30 Days",
      status:"In Development"
    },
  ])

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/websites' element={<Websites mySites={mySites}/>}/>
        <Route path='/games' element={<Games myGames={myGames}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/games/:gameID' element={<GameView myGames={myGames}/>}/>
      </Routes>
    </>
  )
}

export default App
