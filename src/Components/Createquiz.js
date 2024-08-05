import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Createquiz = () => {
    const { addQuiz } = useContext(QuizContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(1);
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answer: '' }]);

    const handleQuestionChange = (index, field, value) => {
        const newQuestions = questions.slice();
        newQuestions[index][field] = value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const newQuestions = questions.slice();
        newQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(newQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
    };

    const handleRemoveQuestion = (index) => {
        const newQuestions = questions.slice();
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuiz = {
            title,
            duration,
            questions,
            id: Math.random().toString(36).substr(2, 9) // Generate a random ID
        };
        addQuiz(newQuiz);
        navigate('/quizlist');
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h2 className="mb-4">Create a New Quiz</h2>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Duration (minutes):</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={duration} 
                        onChange={(e) => setDuration(Number(e.target.value))} 
                        min="1" 
                        required 
                    />
                </div>
                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="mb-4 border p-3 rounded">
                        <h3>Question {qIndex + 1}</h3>
                        <div className="mb-3">
                            <label className="form-label">Question:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={question.question}
                                onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                                required
                            />
                        </div>
                        {question.options.map((option, oIndex) => (
                            <div key={oIndex} className="mb-3">
                                <label className="form-label">Option {oIndex + 1}:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={option}
                                    onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                    required
                                />
                            </div>
                        ))}
                        <div className="mb-3">
                            <label className="form-label">Answer:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={question.answer}
                                onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
                                required
                            />
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            onClick={() => handleRemoveQuestion(qIndex)}
                        >
                            Remove Question
                        </button>
                    </div>
                ))}
                <div className='container d-flex justify-content-between p-3'>
                <button type="button" className="btn btn-secondary" onClick={handleAddQuestion}>Add Question</button>
                <button type="submit" className="btn btn-primary">Create Quiz</button>
                </div>
            </form>
        </div>
    );
};

export default Createquiz;
