import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/favicon/favicon-32x32.png';
import fbLogo from '../images/favicon/fb-32x32.png'; 
import twitterLogo from '../images/favicon/twitter-32x32.png'; 

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-auto">
      <div className="container py-3"> 
        <div className="row text-center">
          <div className="col"><Link className="nav-link text-white" to="/">Home</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Gallery</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Wedding</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Home Coming</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Going Away</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Pre-shoot</Link></div>
          <div className="col"><Link className="nav-link text-white" to="/">Contact Us</Link></div>
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
            <a href="/" className="no-text-decor">
              <img src={fbLogo} alt="Facebook" className="social-icon mx-2" />
            </a>
            <a href="/" className="no-text-decor">
              <img src={twitterLogo} alt="Twitter" className="social-icon mx-2" />
            </a>
          </div>                    
        </div>
        <div className="row my-2">

          <div className="footer-text" style={{ color: 'darkgray' }}>
            <p>© {new Date().getFullYear()} Maxi Fashion House. All rights reserved.</p>
          </div>
            <hr style={{ borderTop: '1px solid darkgray', filter: 'drop-shadow(0px 0px 3px white)' }} />

          <div className="footer-text" style={{ color: 'darkgray' }}>
            Designed &amp; developed by <a href="/">merovingienne</a>.
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
