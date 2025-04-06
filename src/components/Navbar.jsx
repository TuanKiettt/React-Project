import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/favorite" className='nav-link'>Favorites</Link>
        </div>
        <div className="navbar-login">
            <Link to="/login" className='nav-login'>Login</Link>
        </div>
      </nav>
    </div>
  )
}
