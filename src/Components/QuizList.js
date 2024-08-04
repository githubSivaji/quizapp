// QuizList.js
import React from 'react';
import { Link } from 'react-router-dom';
import quizData from './quizData'; // Import the quiz data
import "./style.css"
const QuizList = () => {
  return (
    <div>
      <h1 style={{marginTop:"40px" ,textAlign:"center"}}>Quizzes</h1>
      <div className='container p-5 d-flex '>
    
        {quizData.map((quiz) => (
          <div className='container p-2  list' key={quiz.id}>
          
            
            <h4 color='blue'>{quiz.title}</h4>

            Duration : {quiz.duration} min<br></br>
            <Link to={`/quiz/${quiz.id}`}>Take Quiz</Link>
          
          </div>
          
        ))}
      
      </div>
    </div>
  );
};

export default QuizList;
