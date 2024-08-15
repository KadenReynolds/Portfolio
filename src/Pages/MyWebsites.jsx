import { useState } from "react"

function Websites() {
  const [mySites, setMySites] = useState([
    {
      id:1,
      name:"sha",
      timeCreated:"10 Days",
      status:"Complete"
    },
    {
      id:2,
      name:"sha la",
      timeCreated:"20 Days",
      status:"Complete"
    },
    {
      id:3,
      name:"sha la la",
      timeCreated:"30 Days",
      status:"In Development"
    },
  ])
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