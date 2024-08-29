import { useNavigate } from "react-router-dom"
function AboutMe() {
  const navigate = useNavigate()

  function contactClick () {
    navigate("/contact")
  }
  return(
    <>
      <h1 className="pageHeader">About Me</h1>
      <div id="masterDiv">
        <div id="backgroundDiv">
          <h3>Background</h3>
          <p>My name is Kaden Reynolds, I was born April 24th, 2005. I've always been very energetic and for that reason I've wanted to do something that requires a lot of thinking to feel accomplished. Freshman year of highschool I found exactly what I was looking for, I joined FBLA and was looking for a project to do, when I stumbled across Game Development. Ever since that day, I have loved spending my time with game development and fullstack web development, and entering the workforce in one of these careers would be a dream come true. </p>
        </div>
        <div id="workDiv">
          <h3>Work</h3>
          <p>I have completed plenty of accolades for both Fullstack Web Development and Game Development and I feel I'm ready to get into the industry. I have completed plenty of game and website projects that you can see and even download/visit in the subsequent pages. Some of my more notable accolades include, a 3-month bootcamp through CSU and Fullstack Academy for web-development, at least 6 language certificates from both Sololearn and Codecademy, and I have passed the Comptia ITF+ exam to become an IT Professional.</p>
        </div>
        <div id="selfDiv">
          <h3>600+ Hours...</h3>
          <p>Spent just researching on my own, not including all the certificates, programs, and classes in school I have completed.</p>
        </div>
      </div>

      {/* <footer className="footer">
        Any questions? Want to learn more about me and my projects? Please contact me here:
        <a onClick={contactClick} id="linkToContact"> Contact</a>
      </footer> */}
    </>
  )
}

export default AboutMe