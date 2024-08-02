import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Import your logo image
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar p-2">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="nav-links">
        <Link to ='/'>
        <i class="fa-solid fa-house"> </i> &nbsp;Home
        </Link>
          <a href="#quizzes">Quizzes</a>
          <Link to='/CreateQuiz'> Create Quizzes</Link>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default NavBar;
