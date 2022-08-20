import React from 'react';
import { useSelector } from 'react-redux';
import { html, css, js, react, reactrouterdom, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg } from '../images';

const AboutMe = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="about-me-body__container">
      <div className='about-me__container' id='about-me'>
        <div className="about-me__about-me-container fade-in">
          <div className="home__sqr">
            <div className="home__line-bar"></div>
          </div>
          <div className="span__title-marked">
            <span>/</span><h2>{isEnglish ? 'ABOUT ME' : 'ACERCA DE Mí'}</h2>
          </div>
          {isEnglish ? (
              <p>Hi, my name is Aldo Abisai Luna Rojas, I have developed knowledge on some technologies such as <b>Javascript</b>, <b>HTML</b>, <b>CSS</b>, <b>React.js {'(React Router DOM, Redux)'}</b>, thanks to them I've developed the projects on this portfolio.
              <br />
              The next technologies to achieve are <b>Node.js</b> and <b>Python</b>, at the same time improving my current technologies.
              <br />
              Likewise, I'm looking for a job where I can <b>learn</b> and <b>develop as a profesional</b>.</p>
            ) : (
              <p>Hola, me llamo Aldo Abisai Luna Rojas, he adquirido conocimientos sobre ciertas tecnologías como <b>Javascript</b>, <b>HTML</b>, <b>CSS</b>, <b>React.js {'(React Router DOM, Redux)'}</b>, gracias a las cuales he podido desarollar los proyectos dentro de este portafolio.
              <br />
              Las siguientes tecnologías como meta son <b>Node.js</b> y <b>Python</b>, perfeccionando las que manejo actualmente.
              <br />
              De igual forma, estoy buscando empleo en un lugar donde pueda <b>aprender</b> y <b>desarrollarme de manera profesional</b>.</p>
            )}
        </div>
        <div className="divider-line" id='technologies'></div>
        <div className="about-me__technologies-container fade-in">
          <div className="home__sqr">
            <div className="home__line-bar"></div>
          </div>
          <div className="span__title-marked">
            <span>/</span><h2>{isEnglish ? 'TECHNOLOGIES' : 'TECNOLOGíAS'}</h2>
          </div>
          <p>{isEnglish ? 'Looking forward to improve my skills and knowledge with good practices.' : 'Buscando mejorar mis habilidades y conocimiento a través de las buenas prácticas.'}</p>
          <div className="about-me___technologies-list-container">
            <ul>
              <li>
                <img src={react} alt="" />
                <p>React</p>
              </li>
              <li>
                <img src={js} alt="" />
                <p>Javascript</p>
              </li>
              <li>
                <img src={html} alt="" />
                <p>HTML</p>
              </li>
              <li>
                <img src={css} alt="" />
                <p>CSS</p>
              </li>
              <li>
                <img src={reactrouterdom} alt="" />
                <p>Router DOM</p>
              </li>
              <li>
                <img src={redux} alt="" />
                <p>Redux</p>
              </li>
              <li>
                <img src={bootstrap} alt="" />
                <p>Bootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;