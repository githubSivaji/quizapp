// QuizList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import './style.css';

const QuizList = () => {
  const { quizzes } = useContext(QuizContext);
  return (
    <div className='container content'>
      <h1 style={{ marginTop: '40px', textAlign: 'center' }}>Quizzes</h1>
      <div className='container p-5'>
        <div className='row'>
          {quizzes.map((quiz) => (
            <div className='col-12 col-md-6 col-lg-4 p-2' key={quiz.id}>
              <div className='list p-3 border'>
                <h4>{quiz.title}</h4>
                Duration: {quiz.duration} min<br />
                <Link to={`/quiz/${quiz.id}`}>Take Quiz</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
