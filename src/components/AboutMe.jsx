import React from 'react';

const AboutMe = () => {
  return (
    <div className='about-me__container'>
      <div className="about-me__about-me-container" id='about-me'>
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <div className="span__title-marked">
          <span>/</span><h2>ABOUT ME</h2>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum harum sunt ipsa voluptatum? <br /> Optio pariatur rem provident quasi consequuntur, incidunt vel, dignissimos iure aspernatur officia laboriosam delectus veritatis corporis, velit sed? Similique vel iste odio rem, nemo totam minus?</p>
        <a href=""><b>More about me</b></a>
      </div>
      <div className="about-me__technologies-container" id='technologies'>
        <div className="home__sqr">
          <div className="home__line-bar"></div>
        </div>
        <div className="span__title-marked">
          <span>/</span><h2>TECHNOLOGIES</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad incidunt a placeat nam minus maiores, exercitationem minima soluta, expedita fugiat beatae fugit repudiandae doloribus rerum assumenda molestias iste recusandae eos deleniti cum, unde odio quibusdam? Amet numquam a similique aut?</p>
      </div>
    </div>
  );
};

export default AboutMe;