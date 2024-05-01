import React, { useState, useEffect, useRef } from 'react';

function InterviewScreen() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize audio only once
        if (!audioRef.current) {
            const audioSrc = "http://127.0.0.1:8000/static/thread_LlUR07xSjzIhPL6f2e3vQsI8/Question_1.mp3";
            const audio = new Audio(audioSrc);
            audioRef.current = audio
            audioRef.current.addEventListener('ended', () => {
                setIsPlaying(false);
            });
        }

        const playAudio = async () => {
    try {
        console.log('Attempting to play audio');
        await audioRef.current.play();
        setIsPlaying(true);
        console.log('Audio is playing');
        } catch (error) {
            console.error('Error playing the audio', error);
            }
        };


        // Play the audio if not already playing
        if (!isPlaying) {
            playAudio();
        }

        // Cleanup function to remove event listener
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
            }
        };
    }, [isPlaying]);  // Depend on isPlaying to control play status

    return (
        <div className="InterviewScreen" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
            <button onClick={() => setIsPlaying(false)} disabled={isPlaying}>
                {isPlaying ? 'Playing...' : 'Record Answer'}
            </button>
        </div>
    );
}

export default InterviewScreen;
