import React from 'react';
import default_pp from '../images/default_pp.jpg'

const Home = () => {
  return (
    <div className='home__container' id='home'>
      <div className="home__presentation">
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <h2>Nice to meet you</h2>
        <h1>I'm Abisai, a Web Full Stack Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eveniet expedita nemo ex culpa debitis ab error fuga doloribus maxime.</p>
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
              <h3>Download my CV</h3>
              <div className="home__line-bar"></div>
            </a>
          </div>
        </div>
        <div className="home__profile-picture">
          <img src={default_pp} alt="" />
          <p>Hi, its me! {':)'}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;