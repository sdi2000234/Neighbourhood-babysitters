import React from 'react';
import './LanguageCertification.css'

function LanguageCertification({index, name, certificate})
{
    return (
        <div className="languages">
            <div className="langName">
                <p className="infoType">Γνώση Γλώσσας {index}:</p>
                <p className="infoBox">{name.toUpperCase()}</p>
            </div>
            <div className="langCertificate">
                <p className="infoType">Πιστοποιητικό Γλωσσομάθειας {index}:</p>
                <p className="infoBox">{certificate}</p>
            </div>
        </div>
    );
}

export default LanguageCertification;