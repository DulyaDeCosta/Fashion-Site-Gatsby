import React from 'react';
import { Link } from 'gatsby';
import '../styles/styles.scss';
// import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="../images/favicon/favicon-32x32.png" alt="Maxi Fashion House" /> Maxi Fashion House
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/wedding-frocks">Wedding</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Home Coming</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Going Away</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Pre-shoot</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
