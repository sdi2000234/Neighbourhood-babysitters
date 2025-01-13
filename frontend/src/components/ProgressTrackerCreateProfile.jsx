import React from 'react';
import './ProgressTracker.css';

function ProgressTracker_CreateProfile({ currentStep }) {
  return (
    <div className="progressTracker">
      <div className="progressCircles">
        <div className="step">
          {currentStep === 1 ? <p className="currentStep">1</p> : <p className="number1">1</p>}
        </div>
        <div className="bar"></div>
        <div className="step">
          {currentStep === 2 ? <p className="currentStep">2</p> : <p className="number2">2</p>}
        </div>
        <div className="bar"></div>
        <div className="step">
          {currentStep === 3 ? <p className="currentStep">3</p> : <p className="number3">3</p>}
        </div>
      </div>
      <div className="stepName">
        <p>Προσωπικά Στοιχεία</p>
        <p>Πιστοποιητικά</p>
        <p>Προσωπικό σημειωμα</p>
      </div>
    </div>
  );
}

export default ProgressTracker_CreateProfile;
