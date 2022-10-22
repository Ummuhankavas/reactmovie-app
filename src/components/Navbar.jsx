import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'}  className="navbar-brand text-white">
          <h4>React Movie App</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;