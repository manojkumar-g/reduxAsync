import React from 'react';
import {Link} from 'react-router';

const NavBar = () =>
<nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Batman</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
      <li><Link to='/app'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
    </div>
</nav>

export default NavBar;
