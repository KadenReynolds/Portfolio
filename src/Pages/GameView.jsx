import { useParams } from "react-router-dom"
import { useState } from "react";


function GameView ({myGames}) {
  const {gameID} = useParams();
  // const [gameInfo, setGameInfo] = useState([])
  let gameInfo = myGames[gameID]

  return(
    <div>
      <br />
      <h1>{gameInfo.name}</h1>
      <label htmlFor="timeCreated">Development Time:</label>
      <h5 id="timeCreated">{gameInfo.timeCreated}</h5>
      <h5>{gameInfo.status}</h5>
      <img src={gameInfo.gameScreenShot} alt="hello" />
    </div>
  )
}

export default GameView