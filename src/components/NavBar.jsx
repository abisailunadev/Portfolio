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
              <a href="#home">Inicio</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about-me">Acerca de mi</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#technologies">Tecnologías</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#portfolio">Portafolio</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">Contacto</a>
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