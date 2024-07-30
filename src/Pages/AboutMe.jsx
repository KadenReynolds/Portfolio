import { useNavigate } from "react-router-dom"
function AboutMe() {
  const navigate = useNavigate()

  function contactClick () {
    navigate("/contact")
  }
  return(
    <>
      <h1 className="pageHeader">About Me</h1>

      <footer className="footer">
        Any questions? Want to learn more about me and my projects? Please contact me here:
        <a onClick={contactClick} id="linkToContact"> Contact</a>
      </footer>
    </>
  )
}

export default AboutMe