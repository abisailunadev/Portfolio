import React from 'react';

const Contact = () => {
  return (
    <div className='contact__container' id='contact'>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="contact__description">
        <h2>Interested in working together?</h2>
        <h2>Let's talk!</h2>
      </div>
      <div className="contact__form-container">
        <form action="">
          <input
            type="name"
            placeholder='Your name'
          />
          <input
            type="email"
            placeholder='Your email address'
          />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your message'>
          </textarea>
          <button>
            Contact me
            <div className="home__line-bar"></div>
          </button>
        </form>
      </div>
      <div className="home__sqr">
        <div className="home__line-bar"></div>
      </div>
      <div className="contact__git-container">
        <h2>Get in touch with me</h2>
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