import { useParams } from "react-router-dom"
import { useState } from "react";
import EssenceScreenShot from '../assets/EssenceScreenShot.png'


function GameView ({myGames}) {
  const {gameID} = useParams();
  // const [gameInfo, setGameInfo] = useState([])
  let gameInfo = myGames[gameID]
  let gameImg
  if(gameInfo.id === 0){
    gameImg = EssenceScreenShot
  }

  return(
    <div className="gameViewDiv">
      <br />
      <h1>{gameInfo.name}</h1>
      <img className="gameImg" src={gameImg} alt="" />
      <br />
      <h3 className="gameInfoHeader">Game Info:</h3>
      <table className="gameInfoTable">
        <tr>
        </tr>
        <tr>
          <th>Development Time</th>
          <br />
          <th>Status</th>
        </tr>
        <tr>
          <td>{gameInfo.timeCreated}</td>
          <br />
          <td>{gameInfo.status}</td>
        </tr>
      </table>
      <br />
      <button className="downloadButton">Download</button>
      <p className="buttonNote">*Note: This button will redirect you to my page on Itch.io to download these games</p>
    </div>
  )
}

export default GameView