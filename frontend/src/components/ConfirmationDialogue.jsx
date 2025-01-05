import React from "react";
import './ConfirmationDialogue.css'


function ConfirmationDialogue({visible, message, onConfirm, onCancel})
{
    if (visible===false) return null;
  
    return (
        <div className="confirmationBackground">
            <div className="confirmationPannel">
            <p>{message}</p>
            <div className="confirmationOptions">
                <button className="confirm" onClick={onConfirm}>Ναι</button>
                <button className="cancel" onClick={onCancel}>Όχι</button>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationDialogue;