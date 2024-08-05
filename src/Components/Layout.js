import React from 'react';
import './style.css';
import NavBar from './Navbar';
import Createquiz from './Createquiz';
import Home from "./Home";
import QuizList from './QuizList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quizopen from './Quizopen';
import { QuizProvider } from './QuizContext';
import Footer from './Footer';

const Layout = () => {
    return (
        <QuizProvider>
            <div className='container-fluid border Main_container p-5 min-vh-100 vh-auto'>
                <div className='bg-light container_inside'>
                    <BrowserRouter>
                        <NavBar/>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/CreateQuiz' element={<Createquiz />} />
                            <Route path='/quizlist' element={<QuizList />} />
                            <Route path='/quiz/:quizId' element={<Quizopen />} />
                        </Routes>
                    </BrowserRouter>
                </div>     
            </div>
            <Footer/>
        </QuizProvider>
    );
}

export default Layout;

