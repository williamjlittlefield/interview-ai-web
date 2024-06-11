"use client";

import { useState, useRef } from 'react';
import WebcamComponent from '../../ui/webcam';
import InterviewerCard from '../../ui/interviewer-card';
import Button from '../../ui/button';
import Microphone from '../../ui/microphone';

export default function Interview() {
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
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-gray-100 space-y-8">
      <InterviewerCard />

      <WebcamComponent />

      <div className="flex flex-col items-center space-y-4">
        {!interviewStarted ? (
          <Button onClick={startInterview} className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">Start Interview</span>
          </Button>
        ) : (
          <Button disabled={isPlaying} className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative">{isPlaying ? 'Playing...' : 'Record Answer'}</span>
          </Button>
        )}

        <Microphone />
      </div>
    </main>
  );
}
