// File: src/components/ContractProfessionalCard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractProfessionalCard.css';

function ContractProfessionalCard({
  number,
  name,
  start,
  finish,
  age,
  status,         // 'pending', 'accepted', 'declined', etc.
  onAccept,
  onDecline,
}) {
  const navigate = useNavigate();
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleClose = () => {
    // Optional: do something when user clicks "X"
    console.log("Κλείσιμο καρτέλας");
  };

  const handleMore = () => {
    navigate('../new');
  };

  // Render the status
  const renderStatus = () => {
    switch (status) {
      case 'pending':
        return (
          <div className="ContractProfessionalCardstate1">
            <p className="ContractProfessionalCardText2">
              Ο γονέας έχει κάνει Αίτηση. Αποδεχτείτε συνεργασία υπογράφοντας το συμφωνητικό ή απορρίψτε.
            </p>
            <button
  className="ContractProfessionalCardButton acceptButton"
  onClick={() => setShowAcceptModal(true)}
>
  Υπογραφή Συμφωνητικού
</button>
<button
  className="ContractProfessionalCardButton rejectButton"
  onClick={() => setShowRejectModal(true)}
>
  Απόρριψη Συμφωνητικού
</button>

          </div>
        );
      case 'accepted':
        return (
          <p className="ContractProfessionalCardText2">
            Το συμβόλαιο είναι ενεργό.
          </p>
        );
      case 'declined':
        return (
          <p className="ContractProfessionalCardText2">
            Έχετε απορρίψει αυτήν την αίτηση.
          </p>
        );
      default:
        return (
          <p className="ContractProfessionalCardText2">
            Άγνωστη κατάσταση.
          </p>
        );
    }
  };

  return (
    <div className="ContractProfessionalCardContainer">
      <button
        className="ContractProfessionalCardCloseButton"
        onClick={handleClose}
      >
        X
      </button>

      <p className="ContractProfessionalCardText">
        Αίτηση #{number}
      </p>
      <br />

      <p>
        <span className="ContractProfessionalCardText">Έναρξη:</span>
        <span style={{ marginLeft: '5px' }}>{start}</span>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>-</span>
        <span className="ContractProfessionalCardText">Λήξη:</span>
        <span style={{ marginLeft: '5px' }}>{finish}</span>
      </p>
      <br />

      <p>
        <span className="ContractProfessionalCardText">
          Όνομα Γονέα/Κηδεμόνα:
        </span>
        <span style={{ marginLeft: '5px' }}>{name}</span>
      </p>
      <br />

      <p>
        <span className="ContractProfessionalCardText">Ηλικία Παιδιού:</span>
        <span style={{ marginLeft: '5px' }}>{age}</span>
      </p>
      <br />

      <button
        className="ContractProfessionalCardButton"
        onClick={handleMore}
      >
        Περισσότερα
      </button>
      <br />

      <p className="ContractProfessionalCardText">Κατάσταση:</p>
      {renderStatus()}

      {/* Modal for Accept */}
      {showAcceptModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p>Είστε σίγουρος/η ότι θέλετε να υπογράψετε το συμφωνητικό;</p>
            <div className="modalButtons">
              <button
                className="confirmButton"
                onClick={() => {
                  onAccept();
                  setShowAcceptModal(false);
                }}
              >
                Ναι
              </button>
              <button
                className="cancelButton"
                onClick={() => setShowAcceptModal(false)}
              >
                Όχι
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Reject */}
      {showRejectModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p>Είστε σίγουρος/η ότι θέλετε να απορρίψετε το συμφωνητικό;</p>
            <div className="modalButtons">
              <button
                className="confirmButton"
                onClick={() => {
                  onDecline();
                  setShowRejectModal(false);
                }}
              >
                Ναι
              </button>
              <button
                className="cancelButton"
                onClick={() => setShowRejectModal(false)}
              >
                Όχι
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContractProfessionalCard;
