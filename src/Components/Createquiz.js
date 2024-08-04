// src/components/QuizCreation.js
import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuiz = {
            title,
            duration,
            questions,
            id: Math.random().toString(36).substr(2, 9) // Generate a random ID
        };
        addQuiz(newQuiz);
        console.log()
        navigate('/quizlist');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Quiz</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Duration (minutes):</label>
                <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} min="1" required />
            </div>
            {questions.map((question, qIndex) => (
                <div key={qIndex}>
                    <h3>Question {qIndex + 1}</h3>
                    <div>
                        <label>Question:</label>
                        <input
                            type="text"
                            value={question.question}
                            onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                            required
                        />
                    </div>
                    {question.options.map((option, oIndex) => (
                        <div key={oIndex}>
                            <label>Option {oIndex + 1}:</label>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <div>
                        <label>Answer:</label>
                        <input
                            type="text"
                            value={question.answer}
                            onChange={(e) => handleQuestionChange(qIndex, 'answer', e.target.value)}
                            required
                        />
                    </div>
                </div>
            ))}
            <button type="button" onClick={handleAddQuestion}>Add Question</button>
            <button type="submit">Create Quiz</button>
        </form>
    );
};

export default Createquiz;
