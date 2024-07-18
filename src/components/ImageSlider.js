import React from 'react';
import '../styles/styles.scss';

const ImageSlider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <picture>
            <source srcSet="/images/slider-1-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-1-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-1-sm.jpg" alt="Slider 1" className="d-block w-100" />
          </picture>
        </div>
        <div className="carousel-item">
          <picture>
            <source srcSet="../images/slider-2-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-2-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-2-sm.jpg" alt="Slider 2" className="d-block w-100" />
          </picture>
        </div>
        <div className="carousel-item">
          <picture>
            <source srcSet="/images/slider-3-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-3-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-3-sm.jpg" alt="Slider 3" className="d-block w-100" />
          </picture>
        </div>
        <div className="carousel-item">
          <picture>
            <source srcSet="/images/slider-4-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-4-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-4-sm.jpg" alt="Slider 4" className="d-block w-100" />
          </picture>
        </div>
        <div className="carousel-item">
          <picture>
            <source srcSet="/images/slider-5-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-5-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-5-sm.jpg" alt="Slider 5" className="d-block w-100" />
          </picture>
        </div>
        <div className="carousel-item">
          <picture>
            <source srcSet="/images/slider-6-lg.jpg" media="(min-width: 1200px)" />
            <source srcSet="/images/slider-6-md.jpg" media="(min-width: 992px)" />
            <img src="/images/slider-6-sm.jpg" alt="Slider 6" className="d-block w-100" />
          </picture>
        </div>
        

      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImageSlider;
