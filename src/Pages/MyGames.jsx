import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



function Games({myGames}) {
  // const [gamesID, setGamesID] = useState("")
  

  return(
    <>
      <h1 className="pageHeader">Games</h1>
      <div id="gamesMasterDiv">
        {myGames.map((games) => {
          return(
            <Link to={`/games/${games.id}`} key={games.id} className="gameLinks">
              <div className="gameDivs">
                <h2>{games.name}</h2>
                <img src={games.gameCatalogImg} alt="hello" />
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Games