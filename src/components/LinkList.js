import "./LinkList.css";
import React, { useState } from 'react';

const LinkList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageSources = [
    "/image-placeholder@2x.png",
    "/ads-1@2x.png",
    "/ads-2@2x.png",
    "/ads-3@2x.png",
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length
    );
  };
  return (
    <section className="link-list">
      <div className="about">
        <div className="content">
          <h1 className="services">Services</h1>
          <div className="transforming-communities-one">
            Transforming Communities, One Solar Panel at a Time.
          </div>
        </div>
        <div className="wrapper1">
          <div className="container" />
          <div className="twitter-icon1">
            <div className="instagram-icon">
              <img
                className="image-placeholder-icon"
                alt=""
                src={imageSources[currentIndex]}
              />
              <div className="icon-moon-player-next-thin1" onClick={handleNext}>
            <img
              className="secondary-cricle-button"
              loading="eager"
              alt=""
              src="/secondary-cricle-button.svg"
            />
            <img
              className="secondary-cricle-button1"
              loading="eager"
              alt=""
              src="/secondary-cricle-button-1.svg"
            />
          </div>
            </div>
          </div>
          <div className="email-input-field">
            <div className="john-doe-placeholder" >
              <div className="wrapper-image-placeholder">
                <img
                  className="image-placeholder-icon1"
                  alt=""
                  src="/image-placeholder-1.svg"
                  />
              </div>
              <h1 className="headings">Solar Installation Services</h1>
              <div className="paragraph" >
                At Dan Solar, we provide comprehensive solar installation
                solutions tailored to meet your energy needs. Our team of
                experienced professionals is committed to delivering
                high-quality installations with a focus on efficiency,
                reliability, and customer satisfaction.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="completed-projects">
        <h1 className="why-choose-us1">Why choose us</h1>
        <div className="unleashing-the-power">
          Unleashing the Power of Solar: Your Trusted Partner for Reliable and
          Sustainable Energy Solutions
        </div>
      </div>
    </section>
  );
};

export default LinkList;
