import { useParams } from "react-router-dom"
import { useState } from "react";
import EssenceScreenShot from '../assets/EssenceScreenShot.png'
import TMoFMScreenShot from '../assets/TMoFMScreenShot.png'
import ETSScreenShot from '../assets/ETSScreenShot.png'


function SiteView ({mySites}) {
  const {siteID} = useParams();
  let siteInfo = mySites[siteID]
  console.log(siteInfo.description)

  return(
    <div className="siteViewDiv">
      <br />
      <h1>{siteInfo.name}</h1>
      <h4>{siteInfo.siteType}</h4>
      <br />
      <br />
      <p>"{siteInfo.description}"</p>
      <br />
      <br />
      <ul className="collabList">
        <h3>Collaborators:</h3>
        {siteInfo.collabs.map((collabs) => {
          return( 
          <li key={collabs.Names}>
            {collabs.Link != ""
              ?
              <a href={collabs.Link} target="_blank" className="collabLinks">{collabs.Name}</a>
              :
              <a>{collabs.Name}</a>
            }
          </li>
          )
        })}
        <p className="collabsLinkNote">*Note: Clicking on link (if avaliable) will lead to collaborators LinkedIn Page</p>
      </ul>
      <br />
      <a  className="visitSiteBtn">Visit Site</a>
    </div>
  )
}

export default SiteView