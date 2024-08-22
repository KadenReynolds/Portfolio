import { useState, useEffect } from "react"
function Games(props) {
  const [myGames, setMyGames] = useState([
    {
      id:1,
      name:"blah",
      timeCreated:"10 Days",
      status:"Complete",
      gameImg:""
    },
    {
      id:2,
      name:"blah, blah",
      timeCreated:"20 Days",
      status:"In Development"
    },
    {
      id:3,
      name:"blah, blah, blah",
      timeCreated:"30 Days",
      status:"Complete"
    },
  ])
  // const [gamesID, setGamesID] = useState("")

  async function handleSubmit (gameID) {
    props.setGameID(gameID)
    console.log(gameID)
  }

  return(
    <>
      <h1 className="pageHeader">Games</h1>
      <div id="gamesMasterDiv">
        {myGames.map((games) => {
          return( 
            <div className="gameDivs" key={games.id} onClick={() => {handleSubmit(games.id)}} >
              <h3>{games.name}</h3>
              <h5>{games.timeCreated}</h5>
              <h5>{games.status}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Games