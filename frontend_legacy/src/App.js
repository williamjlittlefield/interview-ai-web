import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const audioRef = useRef(null);

  const startInterview = () => {
    setInterviewStarted(true);

    if (!audioRef.current) {
      audioRef.current = new Audio("http://127.0.0.1:8000/static/thread_LlUR07xSjzIhPL6f2e3vQsI8/Question_1.mp3");
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        // Additional logic if needed when audio ends
      });
    }

    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.error('Error playing the audio', error);
        setIsPlaying(false);
        setInterviewStarted(false);
      });
  };

  return (
    <div className="WelcomeScreen">
      <div>
        <h1>AI Interview</h1>
        <h2>for Machine Learning Engineer position at OpenAI</h2>
      </div>
      {!interviewStarted ? (
        <button className="StartButton" onClick={startInterview}>
          Start Interview
        </button>
      ) : (
        <button className="StartButton" disabled={isPlaying}>
          {isPlaying ? 'Playing...' : 'Record Answer'}
        </button>
      )}
    </div>
  );
}

export default App;
