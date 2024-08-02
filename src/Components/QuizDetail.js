import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Timer from './Timer';
import Score from './Score';

const QuizDetail = ({ quizzes }) => {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id === id);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleOptionChange = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const handleTimeUp = () => {
    setIsTimeUp(true);
    handleSubmit();
  };

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>Duration: {quiz.duration} seconds</p>
      <Timer duration={quiz.duration} onTimeUp={handleTimeUp} />
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, oIndex) => (
                <li key={oIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      disabled={isTimeUp || score !== null}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={isTimeUp || score !== null}>
        Submit
      </button>
      {score !== null && (
        <div>
          {/* <h2>Score: {score} / {quiz.questions.length}</h2> */}
          <Score score={score}/>

        </div>
      )}
    </div>
  );
};

export default QuizDetail;
