import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="text-center pt-5 contact-header">
        Contact Me
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <ContactForm />
          </div>
          <div className="col-md-6 col-sm-12 mt-5 text-center">
            <p className="sm-para">Connect with me on Social Media</p>
            <div className="mt-4 sm-icons">
              <a target="_blank" href="https://www.facebook.com/sabeelbasharat">
                <i className="fab fa-facebook px-3"></i>
              </a>
              <a target="_blank" href="https://www.twitter.com/SabeelAhmad_">
                <i className="fab fa-twitter px-3"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/sabeelahmad_">
                <i className="fab fa-instagram px-3"></i>
              </a>
              <a target="_blank" href="https://www.github.com/sabeelahmad">
                <i className="fab fa-github px-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Contact;