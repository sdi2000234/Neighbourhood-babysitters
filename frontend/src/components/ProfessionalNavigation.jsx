import React from 'react';
import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import govgr from '../assets/govgr_logo_white.png';
import emptyProfile from '../assets/empty_profile.png';
import arrow from '../assets/arrow_white.png';
import arrowBlack from '../assets/arrow_black.png';

function ProfessionalNavigation({ currentNavPage }) {
  const userPfp = ""; // user's Pfp src (αντικατάστησέ το με τον πραγματικό σύνδεσμο του profile picture του χρήστη)

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
  const handleProfile = () => { navigate('../ProfessionalProfile'); };
  const handleMessages = () => { navigate('../MessageProfessional'); };
  const handleNotifications = () => { navigate('../NotificationsProfessional'); };
  const handleAppointments = () => { navigate('../ProfessionalAllAppointments'); };
  const handleRequests = () => { navigate('../ProfessionalContract'); };
  const handleReviews = () => { navigate('../RatingProfessional'); };
  const handleProfHome = () => { navigate('../dashboard'); };
  const handleMyAds = () => { navigate('../ProfessionalMyAds'); };
  const handleProfHistory1 = () => { navigate('../HistoryProfessional1'); };
  const handleProfHistory2 = () => { navigate('../HistoryProfessional2'); };
  const handleProfHistory3 = () => { navigate('../HistoryProfessional3'); };

  return (
    <div>
      <div className="navBar">
        <img className="logo" alt="logo" src={govgr} />
        <div className="switchRole">
          <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
          <button onClick={handleSwitchRole}>Σύνδεση ως Γονέας/Κηδεμόνας</button>
        </div>
        <div className="profile">
          <img className="pfp" alt="profile" src={userPfp === "" ? emptyProfile : userPfp} />
          <img className="arrow" alt="arrow" src={arrow} />
          <div className="dropdown-content">
            <button onClick={handleProfile} className={currentNavPage === 'ProfessionalProfile' ? 'currentNavPage' : 'ProfessionalProfile'}>ΠΡΟΦΙΛ</button>
            <button onClick={handleMessages} className={currentNavPage==='MessageProfessional' ? 'currentNavPage' : 'MessageProfessional'}>ΜΗΝΥΜΑΤΑ</button>
            <button onClick={handleNotifications} className={currentNavPage === 'NotificationsProfessional' ? 'currentNavPage' : 'NotificationsProfessional'}>ΕΙΔΟΠΟΙΗΣΕΙΣ</button>
            <button onClick={handleAppointments} className={currentNavPage === 'ProfessionalAllAppointments' ? 'currentNavPage' : 'ProfessionalAllAppointments'}>ΡΑΝΤΕΒΟΥ</button>
            <button onClick={handleRequests} className={currentNavPage === 'ProfessionalContract' ? 'currentNavPage' : 'ProfessionalContract'}>ΑΙΤΗΣΕΙΣ</button>
            <button onClick={handleReviews} className={currentNavPage === 'RatingProfessional' ? 'currentNavPage' : 'RatingProfessional'}>ΑΞΙΟΛΟΓΗΣΕΙΣ</button>
            <button onClick={handleLogout}>ΑΠΟΣΥΝΔΕΣΗ</button>
          </div>
        </div>
      </div>
      <div className="roleBar">
        <div className="navOptions">
          <button onClick={handleProfHome} className={currentNavPage === 'dashboard' ? 'currentNavPage' : 'dashboard'}>ΑΡΧΙΚΗ</button>
          <button onClick={handleMyAds} className={['ProfessionalCreateAd1', 'ProfessionalCreateAd2', 'ProfessionalCreateAd3', 'ProfessionalCreateAd4','ProfessionalMyAds'].includes(currentNavPage) ? 'currentNavPage' : 'ProfessionalMyAds'}>ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</button>
          <div className="dropdown">
            <button onClick={handleRequests} className={['ProfessionalAllAppointments', 'ProfessionalContract', 'ProfessionalCoOpRequests'].includes(currentNavPage) ? 'currentNavPage' : 'ProfessionalContract'}>ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ
              <img className="arrow" alt="arrow" src={arrowBlack} />
            </button>
            <div className="dropdown-content">
              <button onClick={handleAppointments} className={currentNavPage === 'ProfessionalAllAppointments' ? 'currentNavPage' : 'ProfessionalAllAppointments'}>ΡΑΝΤΕΒΟΥ</button>
              <button onClick={handleRequests} className={currentNavPage === 'ProfessionalContract' ? 'currentNavPage' : 'ProfessionalContract'}>ΑΙΤΗΣΕΙΣ</button>
            </div>
          </div>
          <div className="dropdown">
            <button onClick={handleProfHistory1} className={['HistoryProfessional1', 'HistoryProfessional2', 'HistoryProfessional3'].includes(currentNavPage) ? 'currentNavPage' : 'ProfessionalHistory'}>ΙΣΤΟΡΙΚΟ
              <img className="arrow" alt="arrow" src={arrowBlack} />
            </button>
            <div className="dropdown-content">
              <button onClick={handleProfHistory1} className={currentNavPage === 'HistoryProfessional1' ? 'currentNavPage' : 'HistoryProfessional1'} href="./HistoryProfessional1">ΑΙΤΗΣΕΙΣ</button>
              <button onClick={handleProfHistory2} className={currentNavPage === 'HistoryProfessional2' ? 'currentNavPage' : 'HistoryProfessional2'} href="./HistoryProfessional2">ΣΥΜΦΩΝΗΤΙΚΑ</button>
              <button onClick={handleProfHistory3} className={currentNavPage === 'HistoryProfessional3' ? 'currentNavPage' : 'HistoryProfessional3'} href="./HistoryProfessional3">ΠΛΗΡΩΜΕΣ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalNavigation;
