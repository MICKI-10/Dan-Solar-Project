import React, { useState } from 'react';
import "./FrameComponent.css";

const FrameComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const imageSources = [
    "/ads-1@2x.png",
    "/ads-2@2x.png",
    "/ads-3@2x.png",
    "/ads-4@2x.png",
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
    <section className="rectangle-container">
      <div className="frame-inner" />
      <div className="ad-container">
        <div className="ads-frames">
          <img
            className="ads-icon"
            loading="eager"
            alt=""
            src={imageSources[currentIndex]}
          />
        </div>
      </div>
      <div className="carousel-controls">
  
        <div className="icon-moon-player-next-thin1" onClick={handleNext}>
          
          <img
            className="iconamoonplayer-next-thin"
            alt=""
            src="/iconamoonplayernextthin@2x.png"
          />
          <img
            className="iconamoonplayer-next-thin next-rotated"
            alt=""
            src="/iconamoonplayernextthin@2x.png"
          />
        </div>
        
      </div>
    </section>
  );
};

export default FrameComponent;
