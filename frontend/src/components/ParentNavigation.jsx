import React from 'react';
import './NavigationBar.css';
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

  return (
    <div>
      <div className="navBar">
        <img className="logo" alt="logo" src={govgr} />
        <div className="switchRole">
          <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
          <button><a href="./profHome">Σύνδεση ως Επαγγελματίας</a></button>
        </div>
        <div className="profile">
          <img className="pfp" alt="profile" src={userPfp === "" ? emptyProfile : userPfp} />
          <img className="arrow" alt="arrow" src={arrow} />
          <div className="dropdown-content">
            <a className={currentNavPage === 'ParentProfile' ? 'currentNavPage' : ''} href="./ParentProfile">ΠΡΟΦΙΛ</a>
            <a 
              className={currentNavPage === 'WriteMessageParent' || currentNavPage === 'MessageParent' ? 'bold' : ''} 
              href="./MessageParent"
            >
              ΜΗΝΥΜΑΤΑ
            </a>
            <a className={currentNavPage === 'NotificationsParent' ? 'currentNavPage' : ''} href="./NotificationsParent">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
            <a className={currentNavPage === 'ParentAllAppointments' || currentNavPage === 'ParentAppointment' || currentNavPage === 'ParentAppointmentEnd' || currentNavPage === 'ParentContractRenew' ? 'bold' : ''} href="./ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a>
            <a 
              className={currentNavPage === 'ParentContractFinal' || currentNavPage === 'ParentContractNotFinal' ? 'bold' : ''} 
              href="./ParentContractFinal"
            >
              ΑΙΤΗΣΕΙΣ
            </a>
            <a href="#" onClick={handleLogout}>ΑΠΟΣΥΝΔΕΣΗ</a>
          </div>
        </div>
      </div>
      <div className="parentBar">
        <div className="navOptions">
          <button className={currentNavPage === 'ParentHome' ? 'currentNavPage' : ''}>
            <a href="./ParentHome">ΑΡΧΙΚΗ</a>
          </button>
          <button className={currentNavPage === 'FindProfessional' ? 'currentNavPage' : ''}>
            <a href="./FindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a>
          </button>
          <button className={currentNavPage === 'ParentHireProfessional' ? 'currentNavPage' : ''}>
            <a 
              href="./ParentHireProfessional"
              className={`${(currentNavPage === 'ParentContractRenew' || currentNavPage === 'ParentAppointment' || currentNavPage === 'ParentAppointmentEnd' || currentNavPage === 'ParentAllAppointments') ? 'bold' : ''}`}
            >
              ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ
            </a>
          </button>
          <div className="dropdown">
            <button className={(currentNavPage === 'ParentContractPayment' || currentNavPage === 'ParentContractEnd') ? 'currentNavPage' : ''}>
              <a 
                href="./ParentContractPayment" 
                className={`${(currentNavPage === 'RatingParents' || currentNavPage === 'RatingParentsEnd') ? 'bold' : ''}`}
              >
                ΣΥΜΦΩΝΗΤΙΚΟ
                <img className="arrow" alt="arrow" src={arrowBlack} />
              </a>
            </button>
            <div className="dropdown-content">
              <a className={currentNavPage === 'ParentContractPayment' ? 'currentNavPage' : ''} href="./ParentContractPayment">ΠΛΗΡΩΜΗ</a>
              <a 
                href="./ParentContractEnd"
                className={`${(currentNavPage === 'RatingParentsEnd' || currentNavPage === 'RatingParents') ? 'bold' : ''} ${currentNavPage === 'ParentContractEnd' ? 'currentNavPage' : ''}`}
              >
                ΛΗΞΗ
              </a>
            </div>
          </div>
          <div className="dropdown">
            <button className={(currentNavPage === 'HistoryParent1' || currentNavPage === 'HistoryParent2' || currentNavPage === 'HistoryParent3') ? 'currentNavPage' : ''}>
              <a href="./RequestHistory">ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrowBlack} /></a>
            </button>
            <div className="dropdown-content">
              <a className={currentNavPage === 'HistoryParent1' ? 'currentNavPage' : ''} href="./HistoryParent1">ΑΙΤΗΣΕΙΣ</a>
              <a className={currentNavPage === 'HistoryParent2' ? 'currentNavPage' : ''} href="./HistoryParent2">ΣΥΜΦΩΝΗΤΙΚΑ</a>
              <a className={currentNavPage === 'HistoryParent3' ? 'currentNavPage' : ''} href="./HistoryParent3">ΠΛΗΡΩΜΕΣ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentNavigation;
