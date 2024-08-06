import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import quizData from './quizData';
import { QuizContext } from './QuizContext';
import './Quiz.css'
const Quizopen = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const {quizzes}=useContext(QuizContext);
    const quiz = quizzes.find(q => q.id === quizId);

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
            <div className='container p-5 text-center' style={{height: "90vh"}}>
                <h1>Quiz Results</h1>
                <div className='text-success' style={{fontSize: "100px"}}><i class="fa-solid fa-circle-check"></i></div>
                {/* <h1>{quiz.title}</h1> */}

                <div className='container d-flex justify-content-center gap-5 '>
                    <div className='score-box p-2' >
                        <p>YOUR SCORE</p>
                        <div style = {{ fontSize: "50px"}} className='text-success'>
                            {score}
                        </div>
                    </div>
                    <div className='score-box p-2'>
                        <p>correct Questions : <h1>{score}</h1> </p>
                        <p>Incorrect Questions: {quiz.questions.length-score} </p>

                    </div>
                </div>
                <div className='btn btn-primary mt-5' onClick={()=>{
                    navigate('/')
                }}>Back to Home</div>
            </div>
        );
    }

    return (
        <div className='container p-3 main'>
    
            <h3 style={{textAlign:"center"}}>{quiz.title}</h3><br></br>
            
            <div className='container  next'>
                    <div className='container d-flex gap-5 justify-content-end'>
                    <h6>Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h6>
                    <button  className='btn btn-danger' onClick={handleFinishTest}>
                        Finish Test
                    </button>

            </div>

            {/* navigation */}
            <div className='text-center mt-3 overflow-auto'>
            {quiz.questions.map((_, index) => (
                <button
                    key={index}
                    className={index === currentQuestionIndex ? 'active navigate-btns mx-2 bg-primary' : 'mx-2 navigate-btns '}
                    onClick={() => handleQuestionClick(index)}
                >
                    {index + 1}
                </ button>
            ))}
            </div>
                
            </div>

            <div className='container next mt-5'>
            <div>
                <h5>{currentQuestionIndex + 1}: {quiz.questions[currentQuestionIndex].question}</h5>
                {quiz.questions[currentQuestionIndex].options.map((option, i) => (
                    <div key={i} className='container w-100 option'>
                        
                        <input
                            type="radio"
                            id={`question${currentQuestionIndex}_option${i}`}
                            name={`question${currentQuestionIndex}`}
                            value={option}
                            checked={selectedAnswers[currentQuestionIndex] === option}
                            onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <label htmlFor={`question${currentQuestionIndex}_option${i}`}>{option}</label>
                        
                    </div>
                    
                
                ))}
            </div>
            <div className='d-flex justify-content-between'>
                <button className = 'btn btn-outline-primary mx-2' onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                </button>
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                    <button  className = 'btn btn-outline-primary' onClick={handleNextQuestion}>
                        Next
                    </button>
                ) : (
                    <button className = 'btn btn-success' onClick={handleFinishTest}>
                        Submit
                    </button>
                )}
            </div>
            </div>
        </div>
    );
}

export default Quizopen;
