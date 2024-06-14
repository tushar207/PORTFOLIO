import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top={0}>
  <div className="container">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">SERVICE</NavLink>
        </li>                   
        <li className="nav-item">
          <NavLink className="nav-link" to="/projects">PROJECTS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>          
</nav>

    </>
  )
}

export default Header