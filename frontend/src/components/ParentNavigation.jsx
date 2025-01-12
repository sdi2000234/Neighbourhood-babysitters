import React from 'react';
import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import της signOut
import { auth } from '../firebaseConfig'; // Το αρχείο διαμόρφωσης Firebase
import govgr from '../assets/govgr_logo_white.png';
import emptyProfile from '../assets/empty_profile.png';
import arrow from '../assets/arrow_white.png';
import arrowBlack from '../assets/arrow_black.png';

function ParentNavigation({ currentNavPage }) {
  const userPfp = ""; // User's profile picture source

  // Συνάρτηση για την αποσύνδεση του χρήστη
  const handleLogout = async () => {
    try {
      await signOut(auth); // Αποσύνδεση από το Firebase
      console.log("Ο χρήστης αποσυνδέθηκε επιτυχώς.");
      window.location.href = './'; // Ανακατεύθυνση στην αρχική σελίδα
    } catch (error) {
      console.error("Σφάλμα κατά την αποσύνδεση:", error);
    }
  };

  //Για περιήγηση σε υπολοιπες σελίδες
  const navigate = useNavigate();

  const handleSwitchRole = () => { navigate('../Login'); };
  const handleProfile = () => { navigate('../ParentProfile'); };
  const handleMessages = () => { navigate('../MessageParent'); };
  const handleNotifications = () => { navigate('../NotificationsParent'); };
  const handleAppointments = () => { navigate('../ParentAllAppointments'); };
  const handleRequests = () => { navigate('../ParentContractFinal'); };
  const handleParentHome = () => { navigate('../dashboard'); };
  const handleFindProfessional = () => { navigate('../evresi_epaggelmatia'); };
  const handleHireProfessional = () => { navigate('../ParentHireProfessional'); };
  const handleContractPay = () => { navigate('../ParentContractPayment'); };
  const handleContractEnd = () => { navigate('../ParentContractEnd'); };
  const handleParentHistory1 = () => { navigate('../HistoryParent1'); };
  const handleParentHistory2 = () => { navigate('../HistoryParent2'); };
  const handleParentHistory3 = () => { navigate('../HistoryParent3'); };

  return (
    <div>
      <div className="navBar">
        <img className="logo" alt="logo" src={govgr} />
        <div className="switchRole">
          <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
          <button onClick={handleSwitchRole}>Σύνδεση ως Επαγγελματίας</button>
        </div>
        <div className="profile">
          <img className="pfp" alt="profile" src={userPfp === "" ? emptyProfile : userPfp} />
          <img className="arrow" alt="arrow" src={arrow} />
          <div className="dropdown-content">
            <button onClick={handleProfile} className={currentNavPage === 'ParentProfile' ? 'currentNavPage' : ''}>ΠΡΟΦΙΛ</button>
            <button onClick={handleMessages} className={currentNavPage === 'WriteMessageParent' || currentNavPage === 'MessageParent' ? 'bold' : ''}>ΜΗΝΥΜΑΤΑ</button>
            <button onClick={handleNotifications} className={currentNavPage === 'NotificationsParent' ? 'currentNavPage' : ''} >ΕΙΔΟΠΟΙΗΣΕΙΣ</button>
            <button onClick={handleAppointments} className={currentNavPage === 'ParentAllAppointments' || currentNavPage === 'ParentAppointment' || currentNavPage === 'ParentAppointmentEnd' || currentNavPage === 'ParentContractRenew' ? 'currentNavPage' : ''}>ΡΑΝΤΕΒΟΥ</button>
            <button onClick={handleRequests} className={currentNavPage === 'ParentContractFinal' || currentNavPage === 'ParentContractNotFinal' ? 'currentNavPage' : ''}>ΑΙΤΗΣΕΙΣ</button>
            <button onClick={handleLogout}>ΑΠΟΣΥΝΔΕΣΗ</button>
          </div>
        </div>
      </div>
      <div className="roleBar">
        <div className="navOptions">
          <button onClick={handleParentHome} className={currentNavPage === 'dashboard' ? 'currentNavPage' : ''}>ΑΡΧΙΚΗ</button>
          <button onClick={handleFindProfessional} className={currentNavPage === 'evresi_epaggelmatia' ? 'currentNavPage' : ''}>ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</button>
          <button onClick={handleHireProfessional} className={currentNavPage === 'ParentHireProfessional' ? 'currentNavPage' : ''}>ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</button>
          <div className="dropdown">
            <button onClick={handleContractPay} className={(currentNavPage === 'ParentContractPayment' || currentNavPage === 'ParentContractEnd') ? 'currentNavPage' : ''}>ΣΥΜΦΩΝΗΤΙΚΟ
              <img className="arrow" alt="arrow" src={arrowBlack} />
            </button>
            <div className="dropdown-content">
              <button onClick={handleContractPay} className={currentNavPage === 'ParentContractPayment' ? 'currentNavPage' : ''}>ΠΛΗΡΩΜΗ</button>
              <button onClick={handleContractEnd} className={currentNavPage === 'ParentContractEnd' ? 'currentNavPage' : ''}>ΛΗΞΗ</button>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={handleParentHistory1} className={(currentNavPage === 'HistoryParent1' || currentNavPage === 'HistoryParent2' || currentNavPage === 'HistoryParent3') ? 'currentNavPage' : ''}>ΙΣΤΟΡΙΚΟ
              <img className="arrow" alt="arrow" src={arrowBlack} />
            </button>
            <div className="dropdown-content">
              <button onClick={handleParentHistory1} className={currentNavPage === 'HistoryParent1' ? 'currentNavPage' : ''}>ΑΙΤΗΣΕΙΣ</button>
              <button onClick={handleParentHistory2} className={currentNavPage === 'HistoryParent2' ? 'currentNavPage' : ''}>ΣΥΜΦΩΝΗΤΙΚΑ</button>
              <button onClick={handleParentHistory3} className={currentNavPage === 'HistoryParent3' ? 'currentNavPage' : ''}>ΠΛΗΡΩΜΕΣ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentNavigation;
