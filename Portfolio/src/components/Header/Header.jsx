import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Bubble = () => {
  const randomLeft = Math.floor(Math.random() * 100);
  const size = Math.floor(Math.random() * 20) + 10;
  const duration = Math.floor(Math.random() * 10) + 5;
  const translateX = Math.random() * 200 - 100;

  const style = {
    left: `${randomLeft}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    '--translateX': `${translateX}px`,
  };

  return <span style={style}></span>;
};

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {Array.from({ length: 30 }).map((_, i) => (
        <Bubble key={i} />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className="header" id='header'>
      <AnimatedBackground />

      <div className="header-left">
        <div className="header-title">
          <h1>Hi, I'm</h1>
          <h2>Uvajanani</h2>
          <h4>| 👩🏼‍💻MERN Stack Developer</h4>
          <p>
            Building scalable websites, engineering robust backend architectures and delivering
            clean, efficient code and creating impactful digital solutions.
          </p>
          <a href="https://www.linkedin.com/in/uvajanani-r-p-214a44257/"><button>Let's connect</button></a>
        </div>
      </div>

      <div className="header-right">
        <img src={assets.developer} alt="" />
      </div>
    </div>
  );
};

export default Header;
