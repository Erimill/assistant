import React, { useState, useEffect } from 'react';
import sx, { timeSection } from './sx';

function CountdownTimer({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div style={sx.timeSection}>
      <h2>{Math.floor(timeLeft/60)}:{Math.floor(timeLeft % 60).toString().length < 2 ? '0'+ Math.floor(timeLeft % 60).toString() : Math.floor(timeLeft % 60)}</h2>
      <button onClick={() => {setTimeLeft(timeLeft + (15*60))}} style={sx.button}> + 15 </button>
      <button onClick={() => {setTimeLeft(0)}} style={sx.button}> CLEAR </button>

    </div>
  );
}

export default CountdownTimer;