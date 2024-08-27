import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <div>
      <div className='navbarDiv'>
        <h3 className='navHeader'>KR</h3>
        <nav className='navbar'>
          <Link to='/' title='Home' className='links'>Home</Link>
          <Link to='/websites' title='Websites' className='links'>My Websites</Link>
          <Link to='/games' title='Games' className='links'>My Games</Link>
          <Link to='/accolades' title='Accolades' className='links'>Accolades</Link>
          <Link to='/about' title='About' className='links'>About</Link>
        </nav>
      </div>
      <hr />
    </div>
  )
}

export default Navbar