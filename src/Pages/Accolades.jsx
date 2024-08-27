import { useState } from "react"
import ComptiaCert from '../assets/ComptiaCert.png'
import FSACert from '../assets/FSACert.png'
import SoloLearnCert from '../assets/SoloLearnCert.png'
import CodecademyCert from '../assets/CodecademyCert.png'

export default function Accolades (){
  const [accolades, setAccolades] = useState([
    {
      name: "Comptia ITF+",
      certImage: ComptiaCert,
      score:"696",
    },
    {
      name: "Fullstack Academy (CSU)",
      certImage: FSACert,
      score:"",
      shortDesc:""
    },
    {
      name: "SoloLearn",
      certImage: SoloLearnCert,
      score:"",
      shortDesc:"Also Includes: Intro to HTML, Intro to JS, Intro to CSS, Game Development with JS"
    },
    {
      name: "Codecademy",
      certImage:CodecademyCert,
      score:"",
      shortDesc:""
    }
  ])

  return (
    <>
      <h1 className="pageHeader">Accolades</h1>
      {accolades.map((accolade) => {
        return (
          <div className="accoladeDiv">
            <h2 className="accoladeName">{accolade.name}</h2>
            {accolade.score != "" ? <h4 className="accoladeScore">(Score: {accolade.score})</h4> : <h4></h4>}
            {accolade.shortDesc != "" ? <p className="accoladeDesc">{accolade.shortDesc}</p> : <p></p>}
            <img src={accolade.certImage} alt="Image not available" className="accoladeImg"/>
          </div>
        )
      })}
    
    </>
  )

}