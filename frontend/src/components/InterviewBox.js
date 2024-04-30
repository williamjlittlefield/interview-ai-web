import React from 'react';

const InterviewBox = ({ transcript, question }) => {
  return (
    <div>
      <h2>Current Question:</h2>
      <p>{question}</p>
      <h2>Your Answer:</h2>
      <p>{transcript}</p>
    </div>
  );
};

export default InterviewBox;
