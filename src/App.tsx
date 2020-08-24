import React, { useState } from 'react';
import './App.css';
import TimerComponent from './Components/timerComponent/TimerComponent'
import BtnComponent from './Components/buttonsComponent/BtnComponent'
import Header from './Components/header/Header'


function App() {

  const [time, setTime] = useState({ msecond: 0, second: 0, minute: 0, hours: 0 })
  const [timerInterval, setTimerInterval] = useState({});
  const [timerStatus, setTimerStatus] = useState(1);

  const startTimer = () => {
    if (timerStatus !== 0) {
      runTimer();
      setTimerStatus(0)
      setTimerInterval(setInterval(runTimer, 10));
    }


  }

  const pauseTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerStatus(2)
  }

  const resumeTimer = () => {
    startTimer();
  }

  const resetTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerStatus(1);
    setTime({ msecond: 0, second: 0, minute: 0, hours: 0 })
  }

  var millsecond = time.msecond;
  var Second = time.second;
  var Minute = time.minute;
  var Hours = time.hours;

  const runTimer = () => {

    if (millsecond === 100) {
      Second++;
      millsecond = 0;
    }
    if (Second === 60) {
      Minute++;
      Second = 0;
    }

    if (Minute === 60) {
      Hours++;
      Second = 0;
    }
    millsecond++;
    return setTime({ msecond: millsecond, second: Second, minute: Minute, hours: Hours })

  }


  return (
    <div>
      <div className="main">
        <Header />
  
          
           <TimerComponent time={time} />
            <BtnComponent timerStatus={timerStatus} resumeTimer={resumeTimer} resetTimer={resetTimer} pauseTimer={pauseTimer} startTimer={startTimer} />
          </div>
        

      </div>
    

  );
}

export default App;
