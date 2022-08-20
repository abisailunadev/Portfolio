import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

  const isEnglish = useSelector(state => state.isEnglish);

  return (
    <div className="contact-body__container">
      <div className='contact__container' id='contact'>
        <div className="contact__description-form-container">
          <div className="contact__description">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <h2>{isEnglish ? 'Interested in working together?' : '¿Interesado/a en trabajar juntos?'}</h2>
            <h2>{isEnglish ? `Let's talk!` : '¡Hablemos!'}</h2>
          </div>
          <div className="contact__form-container">
            <form action="">
              <input
                type="name"
                placeholder={isEnglish ? 'Enter your name' : 'Escribe tu nombre'}
              />
              <input
                type="email"
                placeholder={isEnglish ? 'Your email address' : 'Tu correo'}
              />
              <textarea name="" id="" cols="30" rows="10" placeholder={isEnglish ? 'Description' : 'Descripción'}>
              </textarea>
              <button>
                {isEnglish ? 'Contact me' : 'Contáctame'}
                <div className="home__line-bar"></div>
              </button>
            </form>
          </div>
        </div>
        <div className="contact__git-title-contact-container">
          <div className="contact__git-container">
            <div className="home__sqr">
              <div className="home__line-bar"></div>
            </div>
            <h2>{isEnglish ? 'Get in touch with me' : 'Ponte en contacto conmigo'}</h2>
          </div>
          <div className="git__contact-media-container">
            <div className="git__contact-media">
              <h4>EMAIL:</h4>
              <a href="mailto:alunadev@hotmail.com" target='_blank' className='git__contact-link'>
                <h3>alunadev@hotmail.com</h3>
                <div className="home__line-bar"></div>
              </a>
            </div>
            <div className="git__contact-media">
              <h4>WHATSAPP:</h4>
              <a href="http://wa.me/522216447360" target='_blank' className='git__contact-link'>
                <h3>+52 221 644 7360</h3>
                <div className="home__line-bar"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;