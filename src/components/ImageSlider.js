import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ImageSlider = () => {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleControls');
    let interval;

    const startCarousel = () => {
      interval = setInterval(() => {
        const activeItem = carousel.querySelector('.carousel-item.active');
        const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');

        activeItem.classList.remove('active');
        nextItem.classList.add('active');
      }, 3500);
    };

    startCarousel();

    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', () => {
      clearInterval(interval);
      const activeItem = carousel.querySelector('.carousel-item.active');
      const prevItem = activeItem.previousElementSibling || carousel.querySelector('.carousel-item:last-child');

      activeItem.classList.remove('active');
      prevItem.classList.add('active');

      startCarousel();
    });

    nextButton.addEventListener('click', () => {
      clearInterval(interval);
      const activeItem = carousel.querySelector('.carousel-item.active');
      const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');

      activeItem.classList.remove('active');
      nextItem.classList.add('active');

      startCarousel();
    });

    return () => {
      clearInterval(interval);
      prevButton.removeEventListener('click');
      nextButton.removeEventListener('click');
    };
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <StaticImage src="../images/slider-1-lg.jpg" alt="Slider Image 1" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-2-lg.jpg" alt="Slider Image 2" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-3-lg.jpg" alt="Slider Image 3" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-4-lg.jpg" alt="Slider Image 4" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-5-lg.jpg" alt="Slider Image 5" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-6-lg.jpg" alt="Slider Image 6" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default ImageSlider;
