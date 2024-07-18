import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ImageSlider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item">
          <StaticImage src="../images/slider-1-sm.jpg" alt="Slider Image 1" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <StaticImage src="../images/slider-2-sm.jpg" alt="Slider Image 2" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item active">
          <StaticImage src="../images/slider-3-sm.jpg" alt="Slider Image 3" layout="fullWidth" placeholder="blurred" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
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
}

export default ImageSlider;
