import React from 'react'
import './AdEdit.css'
import whiteEdit from '../assets/edit_icon_white.png'


function AdEdit()
{
    const adCodeNum = ""; // Code number of this Ad (three digits?)
    const creationDate = null; // Date of creation for this Ad

    return (
        <div>
            <div className="adEditPannel">
                <p><b>Αγγελία: #{adCodeNum==="" ? "???" : adCodeNum}</b></p>
                <p><b>Δημιουργήθηκε: {creationDate===null ? "ηη/μμ/εεεε" : creationDate}</b></p>
                <p><b>Κατάσταση:</b>Προσωρινά αποθηκευμένη</p>
                <div className="action">
                    <button>ΕΠΕΞΕΡΓΑΣΙΑ<img alt="edit" src={whiteEdit}/></button>
                </div>
            </div>
        </div>
    );
}

export default AdEdit;