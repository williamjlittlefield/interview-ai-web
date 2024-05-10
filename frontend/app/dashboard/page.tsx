"use client";

import { useState, useRef } from 'react';
import Footer from '../ui/footer';
import Header from '../ui/header';
import Button from '../ui/button';

export default function Dashboard() {

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header />

      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">AI Interview! 😎</h1>
            <p className="mb-5">For Machine Learning Engineer position at OpenAI.</p>

            {!interviewStarted ? (
              <Button className="StartButton" onClick={startInterview}>
                Start Interview
              </Button>
            ) : (
              <Button className="StartButton" disabled={isPlaying}>
                {isPlaying ? 'Playing...' : 'Record Answer'}
              </Button>
            )}

          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
