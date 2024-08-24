import { useState } from "react"
import { Link } from "react-router-dom"

function Websites({mySites}) {
  console.log(mySites[0].siteType)
  return(
      <>
        <h1 className="pageHeader">Websites</h1>
        <p className="siteNote">*Note: Click on a site to view a detailed page</p>
        <div id="sitesMasterDiv">
          {mySites.map((sites) => {
            return(
              <Link to={`/websites/${sites.id}`} key={sites.id}>
                <div className="siteDivs">
                  <h3>{sites.name}</h3>
                  <h5>{sites.siteType}</h5>
                </div>
              </Link> 
            )
          })}
        </div>
      </>
    )
}

export default Websites