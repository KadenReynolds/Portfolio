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
    </>
  )
}

export default Home