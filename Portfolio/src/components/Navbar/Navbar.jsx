import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <div className='navbar'>
        <div className='navbar-title'>
            <div className='navbar-logo'>
              <a href="#header"><img src={assets.logo} alt="" /></a>
            </div>

            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      

        <div className={`navbar-items ${menuOpen ? 'open' : ''}`}>
            <ul className='navbar-list'>
                <a href="#header" className="nav-link"><li>Home</li></a>
                <a href="#about" className="nav-link"><li>About</li></a>
                <a href="#skills" className="nav-link"><li>Skills</li></a>
                <a href="#education" className="nav-link"><li>Education</li></a>
                <a href="#projects" className="nav-link"><li>Projects</li></a>
                <a href="#contact" className="nav-link"><li>Contact</li></a>
            </ul>
            <a href="/Uvajanani-Resume.pdf" download><button className='resume-button'>Resume</button></a>
        </div>
    </div>
  )
}

export default Navbar
