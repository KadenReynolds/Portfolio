import { useState } from "react"

function Websites({mySites}) {
  return(
      <>
        <h1 className="pageHeader">Websites</h1>
        <div id="sitesMasterDiv">
          {mySites.map((sites) => {
            return <div className="siteDivs" key={sites.id}>
              <h3>{sites.name}</h3>
              <h5>{sites.timeCreated}</h5>
              <h5>{sites.status}</h5>
            </div>
          })}
        </div>
      </>
    )
}

export default Websites