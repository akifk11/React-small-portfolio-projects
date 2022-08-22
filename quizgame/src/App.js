import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [score, setScore] = useState(0)

  const answerClick = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)

    } else {
      setShowFinalPage(true)
    }
    if (answer.isCorrect === true) {
      setScore(score + 1)
    }
  }

  return (
    <div className="App">
      <div className="card">



        {showFinalPage ? <h3>Senin Score'un {score}</h3>
          :
          <>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            <ul className='answer-list'>
              {


                questions[currentQuestion].answerOptions.map((answer, index) => {
                  return <li key={index} onClick={() => answerClick(answer)}>{answer.answerText}</li>
                })

              }
            </ul></>}
      </div>
    </div>
  );
}

export default App;
