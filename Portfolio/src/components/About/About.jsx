import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about' id='about'>
      <h1><span>About</span> Me</h1>
      <div className='about-contents'>
        <div className='about-image'>
          <img src={assets.study} alt="" />
        </div>

        <div className='about-text'>
          <p className='about-para'>I'm a passionate <span>MERN Stack Developer</span> with a drive to build scalable, user-friendly web applications. I specialize in crafting efficient backend systems, clean frontend designs, and delivering impactful digital solutions.</p>
          <p>With experience across the full stack, I love turning ideas into <span>real-world projects</span> that solve problems and add value. Whether it's working on personal innovations or collaborating with teams, I always aim for code that's clean, maintainable, and meaningful.</p>
          <p>I'm constantly learning, exploring new <span>technologies</span> and pushing myself to grow every day. Let's build something amazing together!</p>
          <a href="/Uvajanani-Resume.pdf" download><button>Download CV</button></a>
        </div>
      </div>
      
    </div>
  )
}

export default About
