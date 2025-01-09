import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContractFinalCard.css';

function ContractFinalCard({ type: initialType, number, name, start, finish }) {
  const [type, setType] = useState(initialType);
  const [showModal, setShowModal] = useState(false); 
  const [showRejectionModal, setShowRejectionModal] = useState(false); // Νέα κατάσταση για το modal απόρριψης
  const [pendingType, setPendingType] = useState(null); 
  const [checkboxChecked, setCheckboxChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setPendingType(type === 1 ? 4 : type); 
    setCheckboxChecked(!checkboxChecked); 
    setShowModal(true); 
  };

  const confirmChange = () => {
    setType(pendingType); 
    setShowModal(false); 
    setPendingType(null); 
  };

  const cancelChange = () => {
    setCheckboxChecked(type === 4); 
    setShowModal(false); 
    setPendingType(null); 
  };

  const handleClose = () => {
    console.log("Κλείσιμο καρτέλας");
  };

  const handleRejection = () => {
    setShowRejectionModal(true); // Εμφάνιση modal απόρριψης
  };

  const confirmRejection = () => {
    setType(5); // Ορίζει την κατάσταση σε "Απόρριψη"
    setShowRejectionModal(false); // Κλείνει το modal απόρριψης
  };

  const cancelRejection = () => {
    setShowRejectionModal(false); // Κλείνει το modal χωρίς αλλαγή
  };

  const navigate = useNavigate();
  
  const handleMore = () => {
      navigate('../ParentContractRenew');
  };

  const renderStatus = () => {
    switch (type) {
      case 1:
        return (
          <div className='ContractFinalCardstate1'>
            <p className='contractFinalCardText2'>Ο επαγγελματίας έχει υπογράψει το συμφωνητικό.</p>
            <label className='contractFinalCardText3'>
              <input
                type='checkbox'
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
              /> Yπογραφή Συμφωνητικού
            </label>
            <button className='contractFinalCardButton' onClick={handleRejection}>Απόρριψη Συμφωνητικού</button>
          </div>
        );
      case 2:
        return <p className='contractFinalCardText2'>Ο επαγγελματίας δεν έχει υπογράψει ακόμα. Παρακαλώ περιμένετε.</p>;
      case 3:
        return <p className='contractFinalCardText2'>Ο επαγγελματίας απέρριψε την αίτηση.</p>;
      case 4:
        return <p className='contractFinalCardText2'>Το συμφωνητικό έχει υπογραφεί και από τους δύο.</p>;
      case 5:
        return <p className='contractFinalCardText2'>Απορρίψατε την Αίτηση.</p>;
      default:
        return <p className='contractFinalCardText2'>Άγνωστη κατάσταση.</p>;
    }
  };

  return (
    <div className='contractFinalCardContainer'>
        <button className="contractFinalCardCloseButton" onClick={handleClose}>X</button>
        <p className='contractFinalCardText'>Αίτηση #{number}</p>
        <br />
        <p>
        <span className='contractFinalCardText'>Όνομα Επαγγελματία:</span>
        <span style={{ marginLeft: '5px' }}>{name}</span>
        </p>
        <br />
        <p>
        <span className='contractFinalCardText'>Έναρξη:</span>
        <span style={{ marginLeft: '5px' }}>{start}</span>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>-</span>
        <span className='contractFinalCardText'>Λήξη:</span>
        <span style={{ marginLeft: '5px' }}>{finish}</span>
        </p>
        <br />
        <button className='contractFinalCardButton' onClick={handleMore}>Περισσότερα</button>
        <br />
        <p className='contractFinalCardText'>Κατάσταση:</p>
        {renderStatus()}

        {/* Modal για επιβεβαίωση υπογραφής */}
        {showModal && (
        <div className="modalOverlay">
            <div className="modalContent">
            <p>Είστε σίγουρος/η ότι θέλετε να υπογράψετε το συμφωνητικό;</p>
            <div className="modalButtons">
                <button className="confirmButton" onClick={confirmChange}>Ναι</button>
                <button className="cancelButton" onClick={cancelChange}>Όχι</button>
            </div>
            </div>
        </div>
        )}

        {/* Modal για επιβεβαίωση απόρριψης */}
        {showRejectionModal && (
        <div className="modalOverlay">
            <div className="modalContent">
            <p>Είστε σίγουρος/η ότι θέλετε να απορρίψετε το συμφωνητικό;</p>
            <div className="modalButtons">
                <button className="confirmButton" onClick={confirmRejection}>Ναι</button>
                <button className="cancelButton" onClick={cancelRejection}>Όχι</button>
            </div>
            </div>
        </div>
        )}
    </div>
  );
}

export default ContractFinalCard;
