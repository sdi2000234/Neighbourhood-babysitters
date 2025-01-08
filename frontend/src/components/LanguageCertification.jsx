import React from 'react';
import './LanguageCertification.css'

function LanguageCertification({index, name, certificate})
{
    return (
        <div className="languageCertification">
            <div className="langName">
                <p className="dataKind">Γνώση Γλώσσας {index}:</p>
                <p className="dataBox">{name.toUpperCase()}</p>
            </div>
            <div className="langCertificate">
                <p className="dataKind">Πιστοποιητικό Γλωσσομάθειας {index}:</p>
                <p className="dataBox">{certificate}</p>
            </div>
        </div>
    );
}

export default LanguageCertification;