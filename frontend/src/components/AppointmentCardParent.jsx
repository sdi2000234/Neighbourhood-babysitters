import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './AppointmentCardParent.css';
import location from '../assets/location_black.png';
import dateIcon from '../assets/dateIcon.png';
import timeIcon from '../assets/timeIcon.png';
import linkIcon from '../assets/linkIcon.png';
import cake from '../assets/cake_black.png';
import { Avatar } from "@mui/material";
import AppointmentDetailsModal from './AppointmentDetailsModalForProfessionalPage';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function AppointmentCardParent({ id, type, picLink, parentName, date, loc, time, childAge, loc2, state, comments, email, phone }) {
  const [status, setStatus] = useState(state || "none");
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const docRef = doc(db, 'connections', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStatus(data.status || "none");
        }
      } catch (error) {
        console.error("Error fetching appointment status:", error);
      }
    };

    fetchStatus();
  }, [id]);

  const updateStatus = async (newStatus) => {
    try {
      const docRef = doc(db, 'connections', id);
      await updateDoc(docRef, { status: newStatus });
      setStatus(newStatus);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleAccept = () => updateStatus("accepted");

  const handleReject = () => setShowModal(true);

  const confirmReject = () => {
    updateStatus("rejected");
    setShowModal(false);
  };

  const cancelReject = () => setShowModal(false);

  const handleShowDetails = () => setShowDetails(true);

  const handleCloseDetails = () => setShowDetails(false);

  const handleMessage = () => navigate('/WriteMessageProfessional');

  if (status === "rejected") {
    return null;
  }

  const appointmentDetails = {
    childAge,
    loc2,
    loc,
    date,
    time,
    comments,
    type,
    email,
    phone,
  };

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

        <div className="appointmentOptionsParent">
          {status === "none" && (
            <>
              <button className="moreButtonParent" onClick={handleShowDetails}>Περισσότερες Λεπτομέρειες</button>
              <div className="yesNoButtons">
                <button className="acceptButtonParent" onClick={handleAccept}>Αποδοχή</button>
                <button className="rejectButtonParent" onClick={handleReject}>Απόρριψη</button>
              </div>
              <button className="buttonsParent" onClick={handleMessage}>Στείλτε Μήνυμα</button>
            </>
          )}
          {status === "changed" && (
            <>
              <div className="mesProf">
                <p>Έγινε αλλαγή στοιχείων ραντεβού</p>
              </div>
              <button className="moreButtonParent" onClick={handleShowDetails}>Περισσότερες Λεπτομέρειες</button>
              <div className="yesNoButtons">
                <button className="acceptButtonParent" onClick={handleAccept}>Αποδοχή</button>
                <button className="rejectButtonParent" onClick={handleReject}>Απόρριψη</button>
              </div>
              <button className="buttonsParent" onClick={handleMessage}>Στείλτε Μήνυμα</button>
            </>
          )}
          {status === "accepted" && (
            <>
              <button className="moreButtonParent" onClick={handleShowDetails}>Περισσότερες Λεπτομέρειες</button>
              <button className="buttonsParent" onClick={handleMessage}>Στείλτε Μήνυμα</button>
              <button className="cancelButtonParent" onClick={handleReject}>Ακύρωση Ραντεβού</button>
            </>
          )}
        </div>
      </div>

      {showDetails && <AppointmentDetailsModal onClose={handleCloseDetails} appointmentDetails={appointmentDetails} />}

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
