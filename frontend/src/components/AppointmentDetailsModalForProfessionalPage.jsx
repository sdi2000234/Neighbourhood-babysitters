import React from 'react';
import './AppointmentDetailsModalForProfessionalPage.css'; // Θα δημιουργήσεις αυτό το αρχείο για το styling

function AppointmentDetailsModalForProfessionalPage({ onClose, appointmentDetails }) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>X</button>
        
        <div className="appointmentDetail">
          <h3>Λεπτομέρειες Ραντεβού</h3>
          
          <p><strong>Ηλικία Παιδιού:</strong> {appointmentDetails.childAge}</p>
          <p><strong>Περιοχή Φύλαξης:</strong> {appointmentDetails.loc2}</p>
          <p><strong>Τύπος Ραντεβού:</strong> {appointmentDetails.type === "facetoface" ? "Δια Ζώσης" : "Online"}</p>
          <p><strong>Διεύθυνση Ραντεβού:</strong> {appointmentDetails.loc}</p>
          <p><strong>Ημερομηνία Ραντεβού:</strong> {appointmentDetails.date}</p>
          <p><strong>Ώρα Ραντεβού:</strong> {appointmentDetails.time}</p>
          <p><strong>Σχόλια από τον Γονέα/Κηδεμόνα:</strong> {appointmentDetails.comments === "" ? "-" : appointmentDetails.comments}</p>
          <p><strong>Κινητό Γονέα:</strong> {appointmentDetails.phone}</p>
          <p><strong>Εmail Γονέα:</strong> {appointmentDetails.email}</p>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetailsModalForProfessionalPage;
