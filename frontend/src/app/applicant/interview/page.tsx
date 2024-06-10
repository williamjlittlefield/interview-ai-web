"use client";

import { useState, useRef } from 'react';
import Footer from '../../ui/footer';
import WebcamComponent from '../../ui/webcam';
import Button from '../../ui/button';
// import Microphone from '../../ui/microphone';

export default function Interview() {

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [interviewStarted, setInterviewStarted] = useState(false);
//   const audioRef = useRef(null);

//   const startInterview = () => {
//     setInterviewStarted(true);

//     if (!audioRef.current) {
//       audioRef.current = new Audio("http://127.0.0.1:8000/static/thread_LlUR07xSjzIhPL6f2e3vQsI8/Question_1.mp3");
//       audioRef.current.addEventListener('ended', () => {
//         setIsPlaying(false);
//         // Additional logic if needed when audio ends
//       });
//     }

//     audioRef.current.play()
//       .then(() => {
//         setIsPlaying(true);
//       })
//       .catch(error => {
//         console.error('Error playing the audio', error);
//         setIsPlaying(false);
//         setInterviewStarted(false);
//       });
//   };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <WebcamComponent />

      {/* {!interviewStarted ? (
              <Button className="StartButton" onClick={startInterview}>
                Start Interview
              </Button>
            ) : (
              <Button className="StartButton" disabled={isPlaying}>
                {isPlaying ? 'Playing...' : 'Record Answer'}
              </Button>
            )}

        <Microphone />  */}

      <Footer />

    </main>
  );
}
