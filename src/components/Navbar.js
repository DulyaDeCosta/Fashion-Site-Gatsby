import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/favicon/favicon-32x32.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pr-0">
      <div className="navbar-header mr-auto">
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#app-navbar-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Maxi Fashion House" />
          Maxi Fashion House
        </Link>
      </div>
      <div className="collapse navbar-collapse ml-auto" id="app-navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Gallery</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Wedding</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Home Coming</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Going Away</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Pre-shoot</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Contact Us</Link></li>
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
