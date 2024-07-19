import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/favicon/favicon-32x32.png';

// import { FaBars } from 'react-icons/fa';
// import { FaTimes } from 'react-icons/fa';
// import { useState } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
// import { useLocation } from '@reach/router';
// import { useMediaQuery } from 'react-responsive';
// import { useTheme } from 'styled-components';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-header mr-auto">
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#app-navbar-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <div className="logo-container">
            <img src={logo} alt="Maxi Fashion House" />
            <span className="ml-2 text-white">Maxi Fashion House</span>
          </div>
        </Link>
      </div>
      <div className="collapse navbar-collapse ml-auto" id="app-navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Gallery</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Wedding</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Home Coming</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Going Away</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Pre-shoot</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Contact Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
