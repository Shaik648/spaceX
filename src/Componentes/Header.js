import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
           
      <nav className="navbar navbar-expand-lg navbar-light fixed-top mainNav" >
    <div className="container">

        
     <Link to='/' className="nav-link"> Space X </Link>
      <button className="navbar-toggler navbar-toggler-right">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="nav-link" to='/'> Home </Link>
          </li>
          <li className="nav-item">
        <Link className="nav-link" to='/history'>History</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to='/payload'>Pay Load</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to='/contactus'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
        </div>
    )
}
