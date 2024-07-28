import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <nav className='navbar'>
      <Link to='/' title='Home' className='links'>Home</Link>
      <Link to='/websites' title='Websites' className='links'>My Websites</Link>
    </nav>
  )
}

export default Navbar