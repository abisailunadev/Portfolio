import React from 'react';
import ProjectCard from './ProjectCard';
import { html, css, js, react, reactrouterdom, redux, bootstrap, nodejs, pokedexbg, rickandmortybg, crudusersbg } from '../images';

const Portfolio = () => {
  return (
    <div className='portfolio__container' id='portfolio'>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="portfolio__title-and-descritpion">
        <div className="span__title-marked">
          <span>/</span><h2>PORTAFOLIO</h2>
        </div>
        <p><b>¡Échale un ojo a los últimos proyectos que he hecho!</b></p>
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
          description='Tienda digital para comprar productos con autenticación de usuario'
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
          description='Galería de personajes con rutas protegidas'
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
          description='Galería de personajes hecha con React.js'
          img=
          {
            <img src={rickandmortybg} />
          }
        />
        <div className="divider-line"></div>
        <div className="portfolio__more-projects-container">
          <div className="more-projects__title-and-description">
            <h3>Más proyectos</h3>
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
              name='CRUD Usuarios'
              description='Para crear, editar y eliminar usuarios'
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
              name='Weather App'
              description='Condiciones del clima en tiempo real, basadas en tu localización'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;