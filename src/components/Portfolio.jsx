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
          <span>/</span><h2>PORTFOLIO</h2>
        </div>
        <p><b>Take a look at the latest projects I've done</b></p>
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
          description='Digital market to buy products with authentication'
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
          description='Characters library with authentication'
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
          name='Wiki Rick and Morty'
          description='Characters library made with React'
          img=
          {
            <img src={rickandmortybg} />
          }
        />
        <div className="portfolio__more-projects-container">
          <div className="more-projects__title-and-description">
            <h3>More projects</h3>
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
              name='Users CRUD'
              description='To create, edit and remove users'
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
              description='Provides you weather conditions based on your localization'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;