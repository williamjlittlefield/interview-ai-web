import React from 'react';

const ControlPanel = ({ onStart, onNext, onPrevious, onReset }) => {
  return (
    <div>
      <button onClick={onStart}>Start Interview</button>
      <button onClick={onNext}>Next Question</button>
      <button onClick={onPrevious}>Previous Question</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ControlPanel;
