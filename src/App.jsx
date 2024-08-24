import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Home from './Pages/Home'
import Websites from './Pages/MyWebsites'
import SiteView from './Pages/SiteView'
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
      id:0,
      name:"Craftia",
      siteType:"E-Commerce Site",
      description:"Craftia is a E-Commerce prototype site created by me and a few collaborators for our Fullstack Academy Capstone project. On the site you can 'purchase' items to get your craft on, ranging from",
      collabs:[{Name: "Mason Miller", Link: "https://www.linkedin.com/in/mmiller918/"}, {Name: "Jasmine Henderson", Link: "https://www.linkedin.com/in/0jasmineh/"}, {Name: "Miranda Lucas", Link: "https://www.linkedin.com/in/mirandaklucas/"}, {Name: "Andrew Chitwood", Link: ""}],
      timeCreated:"10 Days",
      status:"Complete"
    },
    {
      id:1,
      name:"sha la",
      siteType:"",
      description:"",
      collaborators:[{Name:"None"}],
      timeCreated:"20 Days",
      status:"Complete"
    },
    {
      id:2,
      name:"sha la la",
      siteType:"",
      description:"",
      collaborators:[{Name:"None"}],
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
        <Route path='/websites/:siteID' element={<SiteView mySites={mySites}/>}/>
        <Route path='/games' element={<Games myGames={myGames}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/games/:gameID' element={<GameView myGames={myGames}/>}/>
      </Routes>
    </>
  )
}

export default App
