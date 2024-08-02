// src/components/QuizCreation.js
// src/components/QuizCreation.js
import React, { useState } from 'react';

const QuizCreation = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [duration, setDuration] = useState(600); // Default duration is 600 seconds (10 minutes)

  const addQuestion = () => {
    const newQuestion = { question, options, answer };
    setQuiz([...quiz, newQuestion]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setAnswer('');
  };

  const handleCreateQuiz = () => {
    onCreate({ title, questions: quiz, duration });
    setTitle('');
    setQuiz([]);
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
        />
      ))}
      <input
        type="text"
        placeholder="Correct Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={addQuestion}>Add Question</button>
      <input
        type="number"
        placeholder="Total Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
      <button onClick={handleCreateQuiz}>Create Quiz</button>
    </div>
  );
};

export default QuizCreation;
