import React, { useEffect, useState } from 'react'
import quizQuestions from './Data.js'
import ResultPage from './ResultPage.jsx';

export default function QuizData({timeRemaining,totalTime,setTimeRemaining,setShowResult,score,setScore,currentQuestion,setCurrentQuestion}) {
  
  const [selectedOption, setSelectedOption] = useState("");
  const [redAlert, setRedAlert] = useState(false);

  
  // useEffect(()=>{
  //   const savedQuestion = localStorage.getItem('currentQuestion');
  //   if(savedQuestion){
  //     setCurrentQuestion(parseInt(savedQuestion, 10));
  //   }
  //  },[setCurrentQuestion])

   useEffect(()=>{
    // localStorage.setItem('currentQuestion',currentQuestion);
    setSelectedOption("");
   },[currentQuestion])
  

    const handleNextButton = ()=>{ 
      if(timeRemaining === 0 && !selectedOption){
        setCurrentQuestion(currentQuestion + 1);
        setTimeRemaining(totalTime);
        setRedAlert(false);

      }
      else if(selectedOption){
      setCurrentQuestion(currentQuestion + 1);
      setTimeRemaining(totalTime);
      setRedAlert(false);
      }
      else if(!selectedOption){
        setRedAlert(true);
      }   
    }

    // useEffect(()=>{
    //   if(timeRemaining === 0){
    //     handleNextButton();
    //     return;
    //   }
    //   const timer = setInterval(()=>{
    //       setTimeRemaining(timeRemaining - 1);
    //   },1000)

    //   return ()=> clearInterval(timer);
    // },[timeRemaining,setTimeRemaining,handleNextButton])


  return (
    <>
      <div className="quizeHeader2">
            <div className='timerContainer'><p className="quizTimer">{timeRemaining}:{totalTime}</p></div>
        </div>
      <div className="questionContainer"><p>{quizQuestions[currentQuestion].question}</p></div>
      <p className={`selectOptionAlert ${redAlert ? 'visible' : 'notVisible'}`}>Please select an option</p>
      <div className="answerContainer">                 
                {
                  quizQuestions[currentQuestion].options.map((option,index)=>{
                    return (
                    <div onClick={()=>{
                      if(!selectedOption) setSelectedOption(option);
                      if( option === quizQuestions[currentQuestion].answer){
                        setScore(score + 1);
                      }
                     }
                    }  key={index} className={`options ${selectedOption ? (option === quizQuestions[currentQuestion].answer ? 'correct' : option === selectedOption ?  'wrong' : "") : ""}`}>
                      <input name="option" id={`option${index}`} type="radio" value={option} placeholder={option} checked={selectedOption === option} />
                      <label htmlFor={`option${index}`}>{option}</label>
                      </div>)
                  })
                }
                {/* disabled={selectedOption !== ""} */}
      </div>
      <div className="nextButtonDiv"><button onClick={()=>{handleNextButton()}} className='nextButton'>{currentQuestion === quizQuestions.length - 1 ? "Submit" : "Next"}</button></div>
    </>
  )

}