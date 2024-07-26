import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

function Slider() {
  const slides = [
    {
      image: '/Images/orange.png',
    },
    {
      image: '/Images/cartVeg.png',
    },
    {
      image: '/Images/vegies.png',
    },
  ];

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-prev">
        &#10094;
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} className="carousel-arrow carousel-arrow-next">
        &#10095;
      </button>
    );

  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img src={slide.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
