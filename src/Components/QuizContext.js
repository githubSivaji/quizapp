import React, { createContext, useState } from 'react';
import initialQuizData from './quizData';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState(initialQuizData);

    const addQuiz = (newQuiz) => {
        setQuizzes(prevQuizzes => [...prevQuizzes, newQuiz]);
    };

    return (
        <QuizContext.Provider value={{ quizzes, addQuiz }}>
            {children}
        </QuizContext.Provider>
    );
};
