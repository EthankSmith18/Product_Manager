import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3'>
      <div className="container">
        <span className="navbar-brand">Product List</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/products'>All Projects</Link>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar