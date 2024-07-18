import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/favicon/favicon-32x32.png';

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-auto">
      <div className="container py-4">
        <div className="row text-center">
          <div className="col"><Link className="nav-link text-white" to="/">Home</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/gallery">Gallery</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/wedding-frocks">Wedding</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/home-coming-frocks">Home Coming</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/going-away-frocks">Going Away</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/pre-shoot-dresses">Pre-shoot</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/contact-us">Contact Us</Link></div>
        </div>
        <div className="row text-center my-2">
          <div className="col-sm-12 text-center text-white">
            <img src={logo} alt="Maxi Fashion House" className="img-fluid my-3" />
            Maxi Fashion House
          </div>
          <div className="col-sm-12" style={{ color: 'darkgray' }}>
            Equipped to serve the most distinctive tastes, we provide bridal dresses for all occasions to make your special moments even more memorable.
          </div>
        </div>
        <div className="row text-center my-2">
          <div className="col">
            <a href="/" className="no-text-decor" style={{ color: 'darkgray' }}>
              <i className="fab fa-facebook fa-lg mx-2"></i>
            </a>
            <i className="fab fa-twitter fa-lg mx-2" style={{ color: 'darkgray' }}></i>
          </div>                    
        </div>
        <div className="row my-2">
          <div className="col-sm-12 text-center" style={{ color: 'darkgray' }}>
            <p style={{ color: 'darkgray' }}>© {new Date().getFullYear()} Maxi Fashion House. All rights reserved.<br />
              </p><hr style={{ borderTop: '1px solid darkgray', filter: 'drop-shadow(0px 0px 3px white)' }} />
              Designed &amp; developed by <a href="/">merovingienne</a>.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
