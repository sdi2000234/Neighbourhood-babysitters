import React from "react";
import "./AdEditOrPreview.css";
import { useNavigate } from "react-router-dom";
import viewBlack from "../assets/view_icon_black.png";
import whiteHeart from "../assets/filled_heart_white.png";
import whiteBin from "../assets/bin_delete_white.png";
import whiteEdit from "../assets/edit_icon_white.png";
import blackBin from "../assets/bin_delete_black.png";

function AdPreview({ id, canEdit, onRemove, data }) {
  const likeCount = 0; // Placeholder for number of likes
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate("../ProfessionalCreateAd1", { state: { edit: false, id } });
  };

  const handleEdit = () => {
    navigate("../ProfessionalCreateAd1", { state: { edit: true, id } });
  };

  return (
    <div className={canEdit ? "adEditPannel" : "adPreviewPannel"}>
      
      {/* Ad Details */}
      <p>
        <b>Η αγγελία μου: #{data.number}</b>
      </p>
      <p>
        <b>Δημιουργήθηκε:</b> {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : "ηη/μμ/εεεε"}
      </p>
      <p>
        <b>Κατάσταση:</b> {data.status === "submitted" ? "Έχει υποβληθεί οριστικά" : "Προσωρινά αποθηκευμένη"}
      </p>

      {/* Actions */}
      <div className="actions">
        {canEdit ? (
          <>
            <button onClick={handleEdit}>
              ΕΠΕΞΕΡΓΑΣΙΑ
              <img alt="edit" src={whiteEdit} />
            </button>
            <img onClick={() => onRemove(id)} alt="bin" src={blackBin} />
          </>
        ) : (
          <>
            <button onClick={handlePreview}>
              ΠΡΟΕΠΙΣΚΟΠΙΣΗ
              <img alt="eye" src={viewBlack} />
            </button>
            <img onClick={() => onRemove(id)} alt="bin" src={whiteBin} />
          </>
        )}
      </div>
    </div>
  );
}

export default AdPreview;
