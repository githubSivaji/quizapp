import React, { useState } from 'react';
import './style.css';
// import Layout from './Components/Layout';
import image from '../assets/logo.png';
import NavBar from './Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon if you want to use FontAwesome icons
// import { faHome, faQuestionCircle, faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Createquiz from './Createquiz';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Layout = () => {
   
    return <>
    <div className='container-fuid border Main_container p-5 vh-100'>
            <div className=' bg-light container_inside '>
        <BrowserRouter>
        <NavBar/>
       <Routes>
        <Route path='/' element= { <Home/>} />
        <Route path='/CreateQuiz' element={<Createquiz/>}></Route>
      </Routes>
      </BrowserRouter>
            </div>     
        </div>
        
    
    </>
        

    
}

export default Layout;
