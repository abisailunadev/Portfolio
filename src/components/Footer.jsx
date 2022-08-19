import React from 'react';

const Footer = () => {
  return (
    <div className='footer__container'>
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__about">
        <p>© Aldo Abisai Luna Rojas</p>
      </div>
    </div>
  );
};

export default Footer;