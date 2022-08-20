import React from 'react';
import default_pp from '../images/default_pp.jpg'
import CV_ENG from '../files/CV_ENG.pdf'
import { useSelector } from 'react-redux';

const Home = () => {

  const isEnglish = useSelector(state => state.isEnglish)

  return (
    <div className="home-body__container">
      <div className='home__container fade-in' id='home'>
        <div className="home__presentation">
          <div className="home__presentation-description">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <h2>{isEnglish ? 'Nice to meet you' : 'Gusto en conocerte'}</h2>
            <h1>{isEnglish ? `I'm Abisai, a Web Full Stack Developer` : 'Soy Abisai, Desarrollador Full Stack'}</h1>
            <p>{isEnglish ? 'I love challenges and learn something new everyday!' : '¡Me encantan los retos y aprender algo nuevo cada día!'}</p>
          </div>
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
              <a href={CV_ENG} download>
                <h3>{isEnglish ? 'Download my CV' : 'Descarga mi CV'}</h3>
                <div className="home__line-bar"></div>
              </a>
            </div>
          </div>
          <div className="home__profile-picture">
            <img src={default_pp} alt="" />
            <p>{isEnglish ? 'Hi, its me! :)' : '¡Hola, soy yo! :)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;