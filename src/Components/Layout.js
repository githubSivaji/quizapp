import React from 'react';
import './style.css';
import NavBar from './Navbar';
import Createquiz from './Createquiz';
import Home from "./Home";
import QuizList from './QuizList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quizopen from './Quizopen';
import { QuizProvider } from './QuizContext';

const Layout = () => {
    return (
        <QuizProvider>
            <div className='container-fluid border Main_container p-5 vh-100'>
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
        </QuizProvider>
    );
}

export default Layout;

