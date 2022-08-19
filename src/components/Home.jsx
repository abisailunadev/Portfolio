import React from 'react';
import default_pp from '../images/default_pp.jpg'

const Home = () => {
  return (
    <div className='home__container' id='home'>
      <div className="home__presentation">
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <h2>Gusto en conocerte</h2>
        <h1>Soy Abisai, Desarrollador Full Stack</h1>
        <p>¡Me gustan los retos y aprender algo nuevo cada día!</p>
        <div className="home__contact-media">
          <div className="home__social-media">
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
          <div className="home__cv">
            <a href="">
              <h3>Descarga mi CV</h3>
              <div className="home__line-bar"></div>
            </a>
          </div>
        </div>
        <div className="home__profile-picture">
          <img src={default_pp} alt="" />
          <p>¡Hola, soy yo! {':)'}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;