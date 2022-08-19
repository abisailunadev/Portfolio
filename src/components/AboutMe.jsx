import React from 'react';
import { html, css, js, react, reactrouterdom, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg } from '../images';

const AboutMe = () => {
  return (
    <div className='about-me__container' id='about-me'>
      <div className="about-me__about-me-container">
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <div className="span__title-marked">
          <span>/</span><h2>ACERCA DE Mí</h2>
        </div>
        <p>Desde pequeño siempre me llamo la atención el saber como funcionaban las aplicaciones de una computadora y la computadora por si misma.
        <br />
        Hoy en día, he adquirido conocimientos sobre ciertas tecnologías como <b>Javascript</b>, <b>HTML</b>, <b>CSS</b>, <b>React.js {'(React Router DOM, Redux)'}</b>, gracias a las cuales he podido desarollar los proyectos dentro de este portafolio.
        <br />
        Las siguientes tecnologías como meta son <b>Node.js</b> y <b>Python</b>, perfeccionando las que manejo actualmente.</p>
      </div>
      <div className="divider-line" id='technologies'></div>
      <div className="about-me__technologies-container">
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <div className="span__title-marked">
          <span>/</span><h2>TECNOLOGíAS</h2>
        </div>
        <p>Buscando mejorar mi conocimiento en ellas a través de las buenas prácticas.</p>
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
  );
};

export default AboutMe;