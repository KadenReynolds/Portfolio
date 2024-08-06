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
          <p>My name is Kaden Reynolds, I was born April 24th, 2005. I've always been very energetic and for that reason I've wanted to do something that requires a lot of thinking to feel accomplished. Freshman year of highschool I found exactly what I was looking for, I joined FBLA and was looking for a project to do, when I stumbled across Game Development. Ever since that day, I have been in love with game development and fullstack web development, and I'm hoping to enter the workforce in one of these careers. </p>
        </div>
        <div id="workDiv">
          <h3>Work</h3>
          <p>My name is Kaden Reynolds, I was born April 24th, 2005. I've always been very energetic and for that reason I've wanted to do something that requires a lot of thinking to feel accomplished. Freshman year of highschool I found exactly what I was looking for, I joined FBLA and was looking for a project to do, when I stumbled across Game Development. Ever since that day, I have been in love with game development and fullstack web development, and I'm hoping to enter the workforce in one of these careers. </p>
        </div>
      </div>

      <footer className="footer">
        Any questions? Want to learn more about me and my projects? Please contact me here:
        <a onClick={contactClick} id="linkToContact"> Contact</a>
      </footer>
    </>
  )
}

export default AboutMe