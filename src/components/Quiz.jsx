import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import volume from "../assets/VolumeUp.png";
import QuizData from './QuizData';
import quizQuestions from './Data.js'
import Loader from './Loader.jsx';
import ResultPage from './ResultPage.jsx';


export default function quiz() {
        const storedIndex = localStorage.getItem('currentQuestion')
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);
        const totalTime = 10;
        const [timeRemaining, setTimeRemaining] = useState(totalTime);

        
  return (
    <div className='quizPage'>
        <div className="quizContainer">
        <div className="quizHeader">
            <img className='quizLogo' src={logo} alt="" />
            <div className="scoreContainer"><p className='numOfQuestion'>{score}/{quizQuestions.length}</p></div>
            {/* <img className='quizVolume' src={volume} alt="" /> */}
        </div>
        

        {
           currentQuestion < quizQuestions.length  ? <QuizData timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} totalTime={totalTime}  setShowResult={setShowResult} score={score} setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/> : <ResultPage score={score} totalQuestions={quizQuestions.length}/>
        }
             
            
        
        </div>
    </div>
  )
}
