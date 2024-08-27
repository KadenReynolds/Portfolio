import pexelsjeswin from '../assets/pexelsjeswin.jpg'
import pexelsmarkusspiske from '../assets/pexelsmarkusspiske.jpg'
import AccoladesHome from '../assets/AccoladesHome.png'
import AboutHome from '../assets/AboutHome.png'
import { useNavigate } from 'react-router-dom'


function Home() {
  let navigate = useNavigate();


  let handleClick = (path) => {
    console.log(path)
    navigate(path)
  }

  return(
    <>
      <h1 className="pageHeader">Home</h1>
      <div className="homeMasterDiv">
        <div className="homeDivs" onClick={event =>  window.location.href='/websites'}>
          <h2 className="homeNames">Websites</h2>
          <img src={pexelsmarkusspiske} alt="" className='homeImg'/>
        </div>
        <div className="homeDivs" onClick={event =>  window.location.href='/games'}>
          <h2 className="homeNames">Games</h2>
          <img src={pexelsjeswin} alt="" className='homeImg'/>
        </div>
        <div className="homeDivs" onClick={event =>  window.location.href='/accolades'}>
          <h2 className="homeNames">Accolades</h2>
          <img src={AccoladesHome} alt="" className='homeImg'/>
        </div>
        <div className="homeDivs" onClick={event =>  window.location.href='/about'}>
          <h2 className="homeNames">About Me</h2>
          <img src={AboutHome} alt="" className='homeImg'/>
        </div>
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