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
      name:"Craftify",
      siteType:"E-Commerce Site",
      description:"Craftify is a E-Commerce prototype site created by me and a few collaborators for our Fullstack Academy Capstone project. On the site you can 'purchase' items to get your craft on, ranging from",
      collabs:[{Name: "Mason Miller", Link: "https://www.linkedin.com/in/mmiller918/"}, {Name: "Jasmine Henderson", Link: "https://www.linkedin.com/in/0jasmineh/"}, {Name: "Miranda Lucas", Link: "https://www.linkedin.com/in/mirandaklucas/"}, {Name: "Andrew Chitwood", Link: ""}],
      timeCreated:"14 Days",
      status:"Complete",
      hostingStatus:"Not Hosted",
      siteImg:"src/assets/CraftifyProducts.png"
    },
    {
      id:1,
      name:"QusetLine",
      siteType:"Online Sidequesting Site",
      description:"Qusetline is being built to expand the art of playing games with friends, me and my friend are developing this site that will give more flare to multiplayer and singleplayer games by allowing you to 'battle' your friends. You recieve a task from qusetline to do in the game your playing and then you and up to 3 friends race to complete the task, earning points depending on many different variables such as: time completed, difficulty, length of task, etc.",
      collabs:[{Name:"Jett Crowther", Link:"https://www.linkedin.com/in/jett-crowther/"}],
      timeCreated:"In-Development",
      status:"In-Development",
      hostingStatus:"Not Hosted"
    },
    {
      id:2,
      name:"sha la la",
      siteType:"",
      description:"",
      collabs:[{Name:"N/A", Link:""}],
      timeCreated:"30 Days",
      status:"In Development",
      hostingStatus:"Not Hosted"
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
