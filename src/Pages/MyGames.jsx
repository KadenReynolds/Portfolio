import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Essence from '../assets/Essence.jpg'
import TMoFM from '../assets/TMoFM.jpg'
import ETS from '../assets/ETS.png'



function Games({myGames}) {
  let gameImg

  function findGameImg(games){
    if (games.name === "Essence"){
      gameImg = Essence
    } else if (games.name === "Escape The Ship") {
      gameImg = ETS
    } else {
      gameImg = TMoFM
    }
    return gameImg
  }

  return(
    <>
      <h1 className="pageHeader">Games</h1>
      <p className="siteNote">*Note: Click on a game to view a detailed page</p>
      <div id="gamesMasterDiv">
        {myGames.map((games) => {
          return(
            <Link to={`/games/${games.id}`} key={games.id} className="gameLinks">
              <div className="gameDivs">
                <img src={findGameImg(games)} alt="hello"/>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Games