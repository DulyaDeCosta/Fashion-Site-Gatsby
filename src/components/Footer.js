import React from 'react';
import '../styles/styles.scss';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Home</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Gallery</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Wedding</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Home Coming</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Going Away</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Pre-shoot</a>
          </div>
          <div className="col text-center">
            <a className="nav-link text-white" href="/">Contact Us</a>
          </div>
        </div>
        <div className="row text-center my-2">
          <div className="col">
            <img src="/images/favicon/favicon-32x32.png" alt="Maxi Fashion House" /> Maxi Fashion House
          </div>
          <div className="col-12" style={{ color: 'darkgray' }}>
            Equipped to serve the most distinctive tastes, we provide bridal dresses for all occasions to make your special moments even more memorable.
          </div>
        </div>
        <div className="row text-center my-2">
          <div className="col">
            <a href="#" target="_blank" className="text-white mx-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" target="_blank" className="text-white mx-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="row text-center my-2">
          <div className="col-12" style={{ color: 'darkgray' }}>
            © 2024 Maxi Fashion House. All rights reserved.
            <hr style={{ borderTop: '1px solid darkgray', filter: 'drop-shadow(0px 0px 3px white)' }} />
            Re-developed by <a href="#" target="_blank">dulya</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
