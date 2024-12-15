import React from 'react'
import './AdPreview.css'
import viewBlack from '../assets/view_icon_black.png'
import whiteHeart from '../assets/filled_heart_white.png'
import whiteBin from '../assets/bin_delete_white.png'

function AdPreview()
{
    const likeCount = 0; // Number of likes for this Ad
    const adCodeNum = ""; // Code number of this Ad (three digits?)
    const creationDate = null; // Date of creation for this Ad

    return (
        <div className="adPreviewPannel">
            <div className="likes">
                <img alt="heart" src={whiteHeart}/>
                <p>{likeCount}</p>
            </div>
            <p><b>Αγγελία: #{adCodeNum==="" ? "???" : adCodeNum}</b></p>
            <p><b>Δημιουργήθηκε: {creationDate===null ? "ηη/μμ/εεεε" : creationDate}</b></p>
            <p><b>Κατάσταση:</b> Έχει υποβληθεί οριστικά</p>
            <div className="actions">
                <button>ΠΡΟΕΠΙΣΚΟΠΙΣΗ<img alt="eye" src={viewBlack}/></button>
                <img alt="bin" src={whiteBin}/>
            </div>
        </div>
    );
}

export default AdPreview;