import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Import your logo image
import { Link, useLocation } from 'react-router-dom';
const NavBar = () => {
  const location = useLocation();
  var path = location.pathname.startsWith('/quiz/')
  const [enablemenu, setenablemenu] = useState(false)
  return (
    <div className={path? 'd-none' :"nav-bar p-2 flex-wrap " }>
      
      <div className="navbar-left flex-wrap">
          <img src={logo} alt="Logo" className="logo" />
          
          <div className="nav-links">
            <Link to ='/quizapp'>
            <i class="fa-solid fa-house" to='/'> </i> &nbsp;Home
            </Link>
            <Link to='/quizlist'>Quizzes</Link>
              <Link to='/CreateQuiz'> Create Quizzes</Link>
              {/* <a href="#footer">Contact</a> */}
          </div>

          <div className={enablemenu ? "nav-links nav-links-mobile " : "d-none"}>

              <div className="btn btn-default text-danger mx-2 d-flex justify-content-start"
                onClick={()=>setenablemenu(false)}
                style={{fontSize: "25px"}}>
              <i class="fa-solid fa-xmark"></i>
              </div>
            <Link to ='/' onClick={()=>setenablemenu(false)}>
            <i class="fa-solid fa-house" to='/'> </i> &nbsp;Home
            </Link>
            <Link to='/quizlist' onClick={()=>setenablemenu(false)}>Quizzes</Link>
              <Link to='/CreateQuiz' onClick={()=>setenablemenu(false)}> Create Quizzes</Link>
              <a href="#footer" onClick={()=>setenablemenu(false)}>Contact</a>
          </div>
      </div>

      <div className="navbar-right d-flex">
        <button className="login-btn">Login</button>
        <div className='menu-symbol'
        >
        <div className='btn btn-default' onClick={()=>setenablemenu(enablemenu ? false: true)} >
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      </div>

     
    </div> 
  );
}

export default NavBar;