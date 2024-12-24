import React from 'react'
import './ProgressTracker.css'


function ProgressTracker({currentStep})
{
    return (
        <div>
            <div className="progressTracker">
                <div className="step">
                    {currentStep===1 ? <p className="currentStep">1</p> : <p className="number1">1</p>}
                </div>
                <div className="bar"></div>
                <div className="step">
                    {currentStep===2? <p className="currentStep">2</p> : <p className="number2">2</p>}
                </div>
                <div className="bar"></div>
                <div className="step">
                    {currentStep===3 ? <p className="currentStep">3</p> : <p className="number3">3</p>}
                </div>
                <div className="bar"></div>
                <div className="step">
                    {currentStep===4 ? <p className="currentStep">4</p> : <p className="number4">4</p>}
                </div>
            </div>
            <div className="stepName">
                <p>Προσωπικά Στοιχεία</p>
                <p>Πιστοποιητικά</p>
                <p>Στοιχεία Παροχής Υπηρεσίας</p>
                <p>Υποβολή</p>
            </div>
        </div>
    );
}

export default ProgressTracker;