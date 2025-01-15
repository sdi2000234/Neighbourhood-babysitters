import React from 'react'
import './AdEditOrPreview.css'
import { useNavigate } from 'react-router-dom';
import viewBlack from '../assets/view_icon_black.png'
import whiteHeart from '../assets/filled_heart_white.png'
import whiteBin from '../assets/bin_delete_white.png'
import whiteEdit from '../assets/edit_icon_white.png'
import blackBin from '../assets/bin_delete_black.png'

function AdPreview({ id, canEdit, onRemove }) {
  const likeCount = 0 // Number of likes for this Ad
  const adCodeNum = id // Code number of this Ad
  const creationDate = null // Date of creation for this Ad

  const navigate = useNavigate();
  const handlePreview = () => {navigate('../ProfessionalCreateAd1', { state: false });};
  const handleEdit = () => {navigate('../ProfessionalCreateAd1', { state: true });};

  if (canEdit === false) {
    return (
      <div className="adPreviewPannel">
        <div className="likes">
          <img alt="heart" src={whiteHeart} />
          <p>{likeCount}</p>
        </div>
        <p>
          <b>Αγγελία: #{adCodeNum === '' ? '???' : adCodeNum}</b>
        </p>
        <p>
          <b>Δημιουργήθηκε: {creationDate === null ? 'ηη/μμ/εεεε' : creationDate}</b>
        </p>
        <p>
          <b>Κατάσταση:</b> Έχει υποβληθεί οριστικά
        </p>
        <div className="actions">
          {/* Preview button */}
          <button onClick={handlePreview}>
            ΠΡΟΕΠΙΣΚΟΠΙΣΗ
            <img alt="eye" src={viewBlack} />
          </button>

          {/* Trash icon */}
          <img
            onClick={() => onRemove(id)}
            alt="bin"
            src={whiteBin}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="adEditPannel">
          <p>
            <b>Αγγελία: #{adCodeNum === '' ? '???' : adCodeNum}</b>
          </p>
          <p>
            <b>Δημιουργήθηκε: {creationDate === null ? 'ηη/μμ/εεεε' : creationDate}</b>
          </p>
          <p>
            <b>Κατάσταση:</b> Προσωρινά αποθηκευμένη
          </p>
          <div className="action">
            {/* Edit button */}
            <button onClick={handleEdit}>
              ΕΠΕΞΕΡΓΑΣΙΑ
              <img alt="edit" src={whiteEdit} />
            </button>

            {/* Trash icon */}
            <img
              onClick={() => onRemove(id)}
              alt="bin"
              src={blackBin}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AdPreview
