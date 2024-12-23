//RequiredField.jsx
import React from 'react';
import './RequiredField.css';  

const RequiredField = ({ label }) => {
    return (
        <span className="required-field">
            {label} 
            <span className="required">*</span> 
        </span>
    );
};

export default RequiredField;
