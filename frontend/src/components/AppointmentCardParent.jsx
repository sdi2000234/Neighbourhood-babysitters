import React, { useState } from "react";
import './AppointmentCardParent.css';
import location from '../assets/location_black.png';
import dateIcon from '../assets/dateIcon.png';
import timeIcon from '../assets/timeIcon.png';
import linkIcon from '../assets/linkIcon.png';
import cake from '../assets/cake_black.png';
import { Avatar } from "@mui/material";

function AppointmentCardParent({ type, picLink, parentName, date, loc, time, childAge, loc2, state }) {
  const [status, setStatus] = useState(state || "none"); // none, accepted, rejected
  const [showModal, setShowModal] = useState(false); // Ελέγχει αν εμφανίζεται το modal

  const handleAccept = () => setStatus("accepted");

  const handleReject = () => setShowModal(true); // Εμφάνιση modal

  const confirmReject = () => {
    setStatus("rejected"); // Απόρριψη ραντεβού
    setShowModal(false); // Κλείσιμο modal
  };

  const cancelReject = () => setShowModal(false); // Ακύρωση απόρριψης

  if (status === "rejected") {
    return null; // Εξαφανίζεται το ραντεβού αν είναι rejected
  }

  return (

    <div className="parentPannel">

      <div className="parentInfo">
        <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} className="parentPfp" />
        <p>{parentName}</p>
      </div>

      <div className="parentDetails">

        <div className="parentpersonalinfo">
          <div className="childAgeParent">
            <img src={cake} alt="childAge" />
            <p>Ηλικία Παιδιού: {childAge}</p>
          </div>

          <div className="houselocationParent">
            <img src={location} alt="location" />
            <p>Περιοχή Φύλαξης: {loc2}</p>
          </div>

          <div className="appointmentLocationParent">
            {type === "facetoface" ? (
              <>
                <img src={location} alt="location" />
                <p>Διεύθυνση ραντεβού: {loc}</p>
              </>
            ) : (
              <>
                <img src={linkIcon} alt="link" />
                <p>
                  Link online συνάντησης: <a href={loc} target="_blank" rel="noopener noreferrer">{loc}</a>
                </p>
              </>
            )}

          </div>

          <div className="appointmentDateParent">
            <img src={dateIcon} alt="date" />
            <p>Ημερομηνία Ραντεβού: {date}</p>
          </div>

          <div className="appointmentTimeParent">
            <img src={timeIcon} alt="time" />
            <p>Ώρα Ραντεβού: {time}</p>
          </div>

        </div>
            
        {/* Διαφορετικά κουμπία ανάλογα με την κατάσταση του Ραντεβού από την πλευρά του Επαγγελματία */}
        <div className="appointmentOptionsParent">
          {status === "none" && (  
            <>
              <button className="moreButtonParent">Περισσότερες Λεπτομέρειες</button>
              <button className="profileButtonParent">Δείτε Προφίλ Γονέα</button>
              <div className="yesNoButtons">
                <button className="acceptButtonParent" onClick={handleAccept}>Αποδοχή</button>
                <button className="rejectButtonParent" onClick={handleReject}>Απόρριψη</button>
              </div>
              <button className="buttonsParent">Αλλαγή Στοιχείων Ραντεβού</button>
            </>
          )}
          {status === "accepted" && (
            <>
              <button className="moreButtonParent">Περισσότερες Λεπτομέρειες</button>
              <button className="profileButtonParent">Δείτε Προφίλ Γονέα</button>
              <button className="buttonsParent">Αλλαγή Στοιχείων Ραντεβού</button>
              <button className="cancelButtonParent" onClick={handleReject}>Ακύρωση Ραντεβού</button>
            </>
          )}
        </div>
      </div>

      {/* Modal για να εμφανίζει κατάλληλο μήνυμα επιβεβαίωσης αν ο επαγγελματίας πατήσει να ακυρώσει/απορρίψει το ραντεβού*/}
      {showModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p>Είστε σίγουρος/η ότι θέλετε να ακυρώσετε αυτό το ραντεβού;</p>
            <div className="modalButtons">
              <button className="confirmButton" onClick={confirmReject}>Ναι</button>
              <button className="cancelButton" onClick={cancelReject}>Όχι</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentCardParent;
