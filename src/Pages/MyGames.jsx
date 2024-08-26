import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



function Games({myGames}) {
  

  return(
    <>
      <h1 className="pageHeader">Games</h1>
      <p className="siteNote">*Note: Click on a game to view a detailed page</p>
      <div id="gamesMasterDiv">
        {myGames.map((games) => {
          return(
            <Link to={`/games/${games.id}`} key={games.id} className="gameLinks">
              <div className="gameDivs">
                <img src={games.gameCatalogImg} alt="hello"/>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Games