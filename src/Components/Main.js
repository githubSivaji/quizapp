import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';

const Main = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/quizzes') // Replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuizzes(data); // Directly using the data as it is already an array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<QuizList />} />
    //     <Route path="/quiz/:id" element={<QuizDetail quizzes={quizzes} />} />
    //   </Routes>
    // </Router>
    quizzes.map((q)=>
    {
      console.log(q.title);
    })
  );
};

export default Main;
