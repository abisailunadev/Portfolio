import React from 'react';
import ProjectCard from './ProjectCard';
import { html, css, js, react, reactrouterdom, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg } from '../images';
import { useSelector } from 'react-redux';

const Portfolio = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className='portfolio__container' id='portfolio'>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="portfolio__title-and-descritpion">
        <div className="span__title-marked">
          <span>/</span><h2>{isEnglish ? 'PORTFOLIO' : 'PORTAFOLIO'}</h2>
        </div>
        <p><b>{isEnglish ? `Take a look at the latest projects I've done!` : '¡Échale un ojo a los últimos proyectos que he hecho!'}</b></p>
      </div>
      <div className="portfolio__projects-container">
        <ProjectCard
          technologies=
          {
            <>
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={reactrouterdom} />
              <img src={redux} />
            </>
          }
          name='E-commerce'
          description={isEnglish ? 'Digital market to buy products with user authentication' : 'Tienda digital para comprar productos con autenticación de usuario'}
        />
        <ProjectCard
          link='https://tubular-tiramisu-3fc6d7.netlify.app/'
          technologies=
          {
            <>
              <img src={react} />
              <img src={html} />
              <img src={css} />
              <img src={reactrouterdom} />
              <img src={redux} />
            </>
          }
          name='Pokedex'
          description={isEnglish ? 'Characters library with protected routes' : 'Galería de personajes con rutas protegidas'}
          img=
          {
            <img src={pokedexbg} />
          }
        />
        <ProjectCard
        link='https://spiffy-cheesecake-b01b48.netlify.app/'
          technologies=
          {
            <>
              <img src={react} />
              <img src={html} />
              <img src={css} />
            </>
          }
          name='Wiki Rick & Morty'
          description={isEnglish ? 'Characters library made with React' : 'Galería de personajes hecha con React'}
          img=
          {
            <img src={rickandmortybg} />
          }
        />
        <div className="divider-line"></div>
        <div className="portfolio__more-projects-container">
          <div className="more-projects__title-and-description">
            <h3>{isEnglish ? 'More projects' : 'Más proyectos'}</h3>
          </div>
          <div className="more-projects__container">
            <ProjectCard
              link='https://bucolic-boba-b2b5d7.netlify.app/'
              technologies=
              {
                <>
                  <img src={react} />
                  <img src={html} />
                  <img src={css} />
                </>
              }
              name={isEnglish ? 'Users CRUD' : 'CRUD Usuarios'}
              description={isEnglish ? 'To create, edit and delete users' : 'Para crear, editar y eliminar usuarios'}
              img=
              {
                <img src={crudusersbg} />
              }
            />
            <ProjectCard
              technologies=
              {
                <>
                  <img src={react} />
                  <img src={html} />
                  <img src={css} />
                </>
              }
              name={isEnglish ? 'Weather App' : 'Clima App'}
              description={isEnglish ? 'Weather conditions in real time, based on your localization.' : 'Condiciones del clima en tiempo real, basadas en tu localización'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;