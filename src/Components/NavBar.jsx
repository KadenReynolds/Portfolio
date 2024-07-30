import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <nav className='navbar'>
      <Link to='/' title='Home' className='links'>Home</Link>
      <Link to='/about' title='About' className='links'>About Me</Link>
      <Link to='/websites' title='Websites' className='links'>My Websites</Link>
      <Link to='/games' title='Games' className='links'>My Games</Link>
      <Link to='/contact' title='Contact' className='links'>Contact</Link>
    </nav>
  )
}

export default Navbar