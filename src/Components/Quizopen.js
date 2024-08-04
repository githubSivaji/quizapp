import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import quizData from './quizData';

const Quizopen = () => {
    const { quizId } = useParams();
    const quiz = quizData.find(q => q.id === quizId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(quiz ? quiz.duration * 60 : 0); // Duration in seconds
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        } else if (!quizSubmitted) {
            calculateScore();
            setQuizSubmitted(true);
        }
    }, [timeLeft, quizSubmitted]);

    const handleAnswerChange = (questionIndex, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer,
        });
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore();
            setQuizSubmitted(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleQuestionClick = (index) => {
        setCurrentQuestionIndex(index);
    };

    const handleFinishTest = () => {
        calculateScore();
        setQuizSubmitted(true);
    };

    const calculateScore = () => {
        let newScore = 0;
        quiz.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    if (timeLeft === 0 || quizSubmitted) {
        return (
            <div>
                <h1>{quiz.title}</h1>
                <h2>Your score: {score}/{quiz.questions.length}</h2>
            </div>
        );
    }

    return (
        <div className='container p-5 vh-90'>
            <h4>{quiz.title}</h4>
            <h2>Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h2>
            <div>
                {quiz.questions.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentQuestionIndex ? 'active' : ''}
                        onClick={() => handleQuestionClick(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div>
                <h2>{currentQuestionIndex + 1}: {quiz.questions[currentQuestionIndex].question}</h2>
                {quiz.questions[currentQuestionIndex].options.map((option, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            id={`question${currentQuestionIndex}_option${i}`}
                            name={`question${currentQuestionIndex}`}
                            value={option}
                            checked={selectedAnswers[currentQuestionIndex] === option}
                            onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                        />
                        <label htmlFor={`question${currentQuestionIndex}_option${i}`}>{option}</label>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                </button>
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                    <button onClick={handleNextQuestion}>
                        Next
                    </button>
                ) : (
                    <button onClick={handleFinishTest}>
                        Submit
                    </button>
                )}
                <button onClick={handleFinishTest}>
                    Finish Test
                </button>
            </div>
        </div>
    );
}

export default Quizopen;
