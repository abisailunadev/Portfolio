import React from 'react';

const Contact = () => {
  return (
    <div className='contact__container' id='contact'>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="contact__description">
        <h2>¿Interesado/a en trabajar juntos?</h2>
        <h2>¡Hablemos!</h2>
      </div>
      <div className="contact__form-container">
        <form action="">
          <input
            type="name"
            placeholder='Tu nombre'
          />
          <input
            type="email"
            placeholder='Tu correo'
          />
          <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'>
          </textarea>
          <button>
            Contáctame
            <div className="home__line-bar"></div>
          </button>
        </form>
      </div>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="contact__git-container">
        <h2>Ponte en contacto conmigo</h2>
      </div>
      <div className="git__contact-media-container">
        <div className="git__contact-media">
          <h4>EMAIL:</h4>
          <a href="mailto:alunadev@hotmail.com" target='_blank'>
            <h3>alunadev@hotmail.com</h3>
            <div className="home__line-bar"></div>
          </a>
        </div>
        <div className="git__contact-media">
          <h4>WHATSAPP:</h4>
          <a href="http://wa.me/522216447360" target='_blank'>
            <h3>+52 221 644 7360</h3>
            <div className="home__line-bar"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;