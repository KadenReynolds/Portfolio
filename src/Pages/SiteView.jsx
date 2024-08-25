import { useParams } from "react-router-dom"
import { useState } from "react";
import CraftifyProducts from '../assets/CraftifyProducts.png'


function SiteView ({mySites}) {
  const {siteID} = useParams();
  let siteInfo = mySites[siteID]
  let siteImg
  if(siteInfo.id === 0){
    siteImg = CraftifyProducts
  } else if(siteInfo.id === 1) {
    siteImg = ""
  } else{
    siteImg = ""
  }

  return(
    <div className="siteViewDiv">
      <br />
      <h1>{siteInfo.name}</h1>
      <h4>{siteInfo.siteType}</h4>
      <br />
      <br />
      <p className="siteDesc">"{siteInfo.description}"</p>
      <br />
      <br />
      <img src={siteImg} alt="Photo Not Available" className="siteImg" />
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
      <div className="tableDiv">
        <h3 className="siteInfoHeader">Site Info:</h3>
        <table className="siteInfoTable">
          <tr>
          </tr>
          <tr>
            <th>Development Time</th>
            <br />
            <th>Status</th>
            <br />
            <th>Hosting Status</th>
          </tr>
          <tr>
            <td>{siteInfo.timeCreated}</td>
            <br />
            <td>{siteInfo.status}</td>
            <br />
            <td>{siteInfo.hostingStatus}</td>
         </tr>
        </table>
        <br />
        {siteInfo.hostingStatus !== "Not Hosted"
          ?
          <a  className="visitSiteBtn">Visit Site</a>
          :
          <p className="visitSiteUnavailable">*Site is not available at this time*</p>
        }
      </div>
    </div>
  )
}

export default SiteView