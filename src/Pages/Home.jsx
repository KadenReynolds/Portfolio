import pexelsjeswin from '../assets/pexelsjeswin.jpg'
import pexelsmarkusspiske from '../assets/pexelsmarkusspiske.jpg'
import AccoladesHome from '../assets/AccoladesHome.png'
import AboutHome from '../assets/AboutHome.png'
import { useNavigate } from 'react-router-dom'


function Home() {
  let navigate = useNavigate();

  function handleClick(path){
    navigate(path)
  }

  return(
    <>
      <h1 className="pageHeader">Home</h1>
      <div className="homeMasterDiv">
        <button className="homeDivs" onClick={() => {handleClick('/websites')}}>
          <h2 className="homeNames" href='/websites'>Websites</h2>
          <img src={pexelsmarkusspiske} alt="" className='homeImg'/>
        </button>
        <button className="homeDivs" onClick={() => {handleClick('/games')}}>
          <h2 className="homeNames">Games</h2>
          <img src={pexelsjeswin} alt="" className='homeImg'/>
        </button>
        <button className="homeDivs" onClick={() => {handleClick('/accolades')}}>
          <h2 className="homeNames">Accolades</h2>
          <img src={AccoladesHome} alt="" className='homeImg'/>
        </button>
        <button className="homeDivs" onClick={() => {handleClick('/about')}}>
          <h2 className="homeNames">About Me</h2>
          <img src={AboutHome} alt="" className='homeImg'/>
        </button>
      </div>
      <br />
      <br />
      <div className='aspirationsDiv'>
        <h2 className='aspirationsHeader'>Aspirations</h2>
        <p>My aspirations is to become either a Fullstack Web Developer or a Game Engineer/Developer, but I would also enjoy a Embedded Systems Engineer, although anything tech would be enjoyable. My short-term goal is to get a job within the industry and to start building upon my accolades and skills while continuing to improve my projects going forward. My long-term goals are to either join a company with a model I can get behind or start my own game development studio. </p>
      </div>
    </>
  )
}

export default Home