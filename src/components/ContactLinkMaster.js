import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './ContactLinkMaster.css';

const ContactLinkMaster = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <section className={`contact-link-master ${isMobile ? 'mobile' : ''}`}>
      <header className="nav-bar-top">
        <a className="wrapper-group-7042">
          <img
            className="wrapper-group-7042-child"
            loading="eager"
            alt=""
            src="/group-7042.svg"
          />
        </a>
        <ul className={isMobile ? 'divider active' : 'divider'}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#" className="about-us">About us</a></li>
          <li><a href="#" className="why-choose-us">Why Choose Us</a></li>
          <li><a href="#" className="contact-us">Contact us</a></li>
          <li><a href="#" className="testimonial">Testimonial</a></li>
          <li><button className="contact-form">
            <div className="log-in">Log In</div>
          </button></li>
          <li><button className="placeholder-image">
            <div className="register">Register</div>
          </button></li>
        </ul>
        <div className="mobile">
          {isMobile ? (
            <FaTimes className="mobile-icon" onClick={handleToggle} />
          ) : (
            <FaBars className="mobile-icon" onClick={handleToggle} />
          )}
        </div>
      </header>
    </section>
  );
};

export default ContactLinkMaster;
