import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {

  const isEnglish = useSelector(state => state.isEnglish)

  return (
    <div className='footer__container'>
      <div className="footer__social-media-menu-options">
        <div className="footer__social-media">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/abisailuna" target='_blank'>
                <i className='bx bxl-linkedin-square bx-md'></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/abisailunadev" target='_blank'>
                <i className='bx bxl-github bx-md' ></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu-options">
          <ul>
            <li>
              <a href="#home">
                {isEnglish ? 'Home' : 'Inicio'}
              </a>
            </li>
            <li>
              <a href="#about-me">
                {isEnglish ? 'About me' : 'Acerca de mi'}
              </a>
            </li>
            <li>
              <a href="#technologies">
                {isEnglish ? 'Technologies' : 'Tecnologías'}
              </a>
            </li>
            <li>
              <a href="#portfolio">
                {isEnglish ? 'Portfolio' : 'Portafolio'}
              </a>
            </li>
            <li>
              <a href="#contact">
                {isEnglish ? 'Contact' : 'Contacto'}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__about">
        <p>© Aldo Abisai Luna Rojas</p>
      </div>
    </div>
  );
};

export default Footer;