import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
   <nav className='navbar'>

    <div className='navbar-brand'>My Web</div>

    <ul className='navbar-nav'>
        <li className='nav-item'><Link className='nav-link' to='/'> Home</Link> </li>
        <li className='nav-item'><Link className='nav-link' to='/about'> About Us</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/contact'>Contact Us</Link></li>
    </ul>




   </nav>
  )
}

export default Navbar
