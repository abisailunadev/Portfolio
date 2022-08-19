import React from 'react';

const NavBar = () => {

  const toggleMenu = () => {
    document.getElementById('nav__options-overlay').classList.toggle('nav__options-show')
    document.getElementById('nav-icon3').classList.toggle('open')
  }

  return (
    <nav>
      <div className="nav__logo">
        <a href=".">
          <h2>{'{ab:sa:}'}</h2>
        </a>
      </div>
      <div className="nav__options">
        <div className="nav__options-overlay" id='nav__options-overlay'>
          <ul>
            <li onClick={toggleMenu}>
              <a href="#home">Home</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about-me">About me</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#technologies">Technologies</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav__hamburguer-menu" onClick={toggleMenu}>
          <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;