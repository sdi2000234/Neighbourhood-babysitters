import React from 'react'
import './ProgressTracker.css'


function ProgressTracker()
{
    return (
        <div className="progressTracker">
            <div className="step">
                <p className="number">1</p>
                <p className="name">Προσωπικά Στοιχεία</p>
            </div>
            <div className="bar"></div>
            <div className="step">
                <p className="number">2</p>
                <p className="name">Πιστοποιητικά</p>
            </div>
            <div className="bar"></div>
            <div className="step">
                <p className="number">3</p>
                <p className="name">Στοιχεία Παροχής Υπηρεσίας</p>
            </div>
            <div className="bar"></div>
            <div className="step">
                <p className="number">4</p>
                <p className="name">Υποβολή</p>
            </div>
        </div>
    );
}

export default ProgressTracker;