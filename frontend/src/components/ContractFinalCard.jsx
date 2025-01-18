// src/components/ContractFinalCard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractFinalCard.css';

function ContractFinalCard({
  status,    // 'pending', 'accepted', 'declined'
  number,    // e.g. "#ze6t0wEW"
  name,      // The professional's name
  start,     // e.g. "1/1/2025"
  finish,    // e.g. "1/2/2025"
}) {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate('../ParentContractRenew');
  };

  // Renders the status text
  const renderStatus = () => {
    switch (status) {
      case 'accepted':
        return 'Ο επαγγελματίας έχει υπογράψει το συμφωνητικό.';
      case 'declined':
        return 'Ο επαγγελματίας έχει απορρίψει το συμφωνητικό.';
      case 'pending':
      default:
        return 'Η αίτηση είναι σε εκκρεμότητα. Περιμένετε από τον επαγγελματία.';
    }
  };

  return (
    <div className="contractFinalCardContainer">
      {/* "X" close button if you want */}
      <button
        className="contractFinalCardCloseButton"
        onClick={() => console.log('Close')}
      >
        X
      </button>

      <p className="contractFinalCardText">Αίτηση {number}</p>
      <br />

      <p>
        <span className="contractFinalCardText">Όνομα Επαγγελματία:</span>
        <span style={{ marginLeft: '5px' }}>{name}</span>
      </p>
      <br />

      <p>
        <span className="contractFinalCardText">Έναρξη:</span>
        <span style={{ marginLeft: '5px' }}>{start}</span>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>-</span>
        <span className="contractFinalCardText">Λήξη:</span>
        <span style={{ marginLeft: '5px' }}>{finish}</span>
      </p>
      <br />

      <button className="contractFinalCardButton" onClick={handleMore}>
        Περισσότερα
      </button>
      <br />

      <p className="contractFinalCardText">
        Κατάσταση: {renderStatus()}
      </p>
    </div>
  );
}

export default ContractFinalCard;
