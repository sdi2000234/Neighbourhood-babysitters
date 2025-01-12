import React from 'react';
import './NavigationBar.css';
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

  return (
    <div>
      <div className="navBar">
        <img className="logo" alt="logo" src={govgr} />
        <div className="switchRole">
          <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
          <button><a href="./profHome">Σύνδεση ως Γονέας/Κηδεμόνας</a></button>
        </div>
        <div className="profile">
          <img className="pfp" alt="profile" src={userPfp === "" ? emptyProfile : userPfp} />
          <img className="arrow" alt="arrow" src={arrow} />
          <div className="dropdown-content">
            <a className={currentNavPage === 'ProfessionalProfile' ? 'currentNavPage' : 'ProfessionalProfile'} href="./ProfessionalProfile">ΠΡΟΦΙΛ</a>
            <a className={['MessageProfessional', 'WriteMessageProfessional'].includes(currentNavPage) ? 'currentNavPage boldText' : 'MessageProfessional'} href="./MessageProfessional">ΜΗΝΥΜΑΤΑ</a>
            <a className={currentNavPage === 'NotificationsProfessional' ? 'currentNavPage' : 'NotificationsProfessional'} href="./NotificationsProfessional">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
            <a className={currentNavPage === 'ProfessionalAllAppointments' ? 'currentNavPage boldText' : 'ProfessionalAllAppointments'} href="./ProfessionalAllAppointments">ΡΑΝΤΕΒΟΥ</a>
            <a className={currentNavPage === 'ProfessionalContract' ? 'currentNavPage boldText' : 'ProfessionalContract'} href="./ProfessionalContract">ΑΙΤΗΣΕΙΣ</a>
            <a className={currentNavPage === 'RatingProfessional' ? 'currentNavPage' : 'RatingProfessional'} href="./RatingProfessional">ΑΞΙΟΛΟΓΗΣΕΙΣ</a>
            <a href="#" onClick={handleLogout}>ΑΠΟΣΥΝΔΕΣΗ</a>
          </div>
        </div>
      </div>
      <div className="parentBar">
        <div className="navOptions">
          <button className={currentNavPage === 'ProfessionalHome' ? 'currentNavPage' : 'ProfessionalHome'}>
            <a href="./ProfessionalHome">ΑΡΧΙΚΗ</a>
          </button>
          <button className={['ProfessionalCreateAd1', 'ProfessionalCreateAd2', 'ProfessionalCreateAd3', 'ProfessionalCreateAd4','ProfessionalMyAds'].includes(currentNavPage) ? 'currentNavPage boldText' : 'ProfessionalMyAds'}>
            <a href="./ProfessionalMyAds">ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</a>
          </button>
          <div className="dropdown">
            <button className={['ProfessionalAllAppointments', 'ProfessionalContract', 'ProfessionalCoOpRequests'].includes(currentNavPage) ? 'currentNavPage boldText' : 'ProfessionalContract'}>
              <a href="./ProfessionalContract">ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ <img className="arrow" alt="arrow" src={arrowBlack} /></a>
            </button>
            <div className="dropdown-content">
              <a className={currentNavPage === 'ProfessionalAllAppointments' ? 'currentNavPage boldText' : 'ProfessionalAllAppointments'} href="./ProfessionalAllAppointments">ΡΑΝΤΕΒΟΥ</a>
              <a className={currentNavPage === 'ProfessionalContract' ? 'currentNavPage boldText' : 'ProfessionalContract'} href="./ProfessionalContract">ΑΙΤΗΣΕΙΣ</a>
            </div>
          </div>
          <div className="dropdown">
            <button className={['HistoryProfessional1', 'HistoryProfessional2', 'HistoryProfessional3'].includes(currentNavPage) ? 'currentNavPage boldText' : 'ProfessionalHistory'}>
              <a href="./HistoryProfessional1">ΙΣΤΟΡΙΚΟ <img className="arrow" alt="arrow" src={arrowBlack} /></a>
            </button>
            <div className="dropdown-content">
              <a className={currentNavPage === 'HistoryProfessional1' ? 'currentNavPage boldText' : 'HistoryProfessional1'} href="./HistoryProfessional1">ΑΙΤΗΣΕΙΣ</a>
              <a className={currentNavPage === 'HistoryProfessional2' ? 'currentNavPage boldText' : 'HistoryProfessional2'} href="./HistoryProfessional2">ΣΥΜΦΩΝΗΤΙΚΑ</a>
              <a className={currentNavPage === 'HistoryProfessional3' ? 'currentNavPage boldText' : 'HistoryProfessional3'} href="./HistoryProfessional3">ΠΛΗΡΩΜΕΣ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalNavigation;
