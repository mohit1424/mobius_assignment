import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
   
     <div className="navbar">
        <div className="logo-mobius">
          <img 
            src="https://static.wixstatic.com/media/5bc310_f90551ddd1fa489d9c3d9d78dccb2fa4~mv2.png/v1/fill/w_142,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/v2.png" 
            alt="Mobius Logo" 
          />
        </div>

        <nav className="nav-links">
          <ul className="visible">
            <li><a className="home" href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li className="more">
              <a href="#more">More</a>
              <ul className="dropdown">
                <li><a href="#terms">Terms</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#refer">Refer Friends</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="btn">
          <button>Sign Up</button>
        </div>
      </div>
   
  )
}

export default Navbar
