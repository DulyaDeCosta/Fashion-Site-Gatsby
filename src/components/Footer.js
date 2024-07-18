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
        <div className="text-center">
          <img src={logo} alt="Maxi Fashion House" className="img-fluid my-3" />
          <p className="text-white mb-0">Copyright &copy; {new Date().getFullYear()} Maxi Fashion House</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
