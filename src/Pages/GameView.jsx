import { useParams } from "react-router-dom"
import { useState } from "react";
import EssenceScreenShot from '../assets/EssenceScreenShot.png'
import TMoFMScreenShot from '../assets/TMoFMScreenShot.png'
import ETSScreenShot from '../assets/ETSScreenShot.png'


function GameView ({myGames}) {
  const {gameID} = useParams();
  // const [gameInfo, setGameInfo] = useState([])
  let gameInfo = myGames[gameID]
  let gameImg
  if(gameInfo.id === 0){
    gameImg = EssenceScreenShot
  } else if(gameInfo.id === 1) {
    gameImg = TMoFMScreenShot
  } else{
    gameImg = ETSScreenShot
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
      <a href={gameInfo.donwloadLink} className="downloadButton" target="_blank">Download</a>
      <p className="buttonNote">*Note: This button will redirect you to my page on Itch.io to download these games</p>
    </div>
  )
}

export default GameView