import React from 'react'
import './ProgressTracker.css'


function ProgressTracker()
{
    return (
        <div>
            <div className="progressTracker">
                <div className="step">
                    <p className="number1">1</p>
                </div>
                <div className="bar"></div>
                <div className="step">
                    <p className="number2">2</p>
                </div>
                <div className="bar"></div>
                <div className="step">
                    <p className="number3">3</p>
                </div>
                <div className="bar"></div>
                <div className="step">
                    <p className="number4">4</p>
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