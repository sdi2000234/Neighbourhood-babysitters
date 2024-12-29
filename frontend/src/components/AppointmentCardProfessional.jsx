import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AppointmentCardProfessional.css';
import location from '../assets/location_black.png';
import dateIcon from '../assets/dateIcon.png';
import timeIcon from '../assets/timeIcon.png';
import linkIcon from '../assets/linkIcon.png';
import { Avatar } from "@mui/material";

function AppointmentCardProfessional({ type, picLink, professionalName, date, loc, time }) {
    
    const [status, setStatus] = useState("none"); // Κατάσταση ραντεβού (none, canceled)
    const [showModal, setShowModal] = useState(false); // Εμφάνιση modal
    const navigate = useNavigate();

    const handleMoreButton = () => {
        navigate('/new-page');
    };

    const handleChangeButton = () => {
        navigate('/ParentChangeAppointment');
    };

    const handleApplButton = () => {
        navigate('/new-page');
    };

    const handleCancelButton = () => {
        setShowModal(true); // Εμφάνιση modal για επιβεβαίωση ακύρωσης
    };

    const confirmCancel = () => {
        setStatus("canceled"); // Ορισμός κατάστασης σε "canceled"
        setShowModal(false); // Κλείσιμο modal
    };

    const cancelCancel = () => {
        setShowModal(false); // Ακύρωση διαδικασίας ακύρωσης
    };

    if (status === "canceled") {
        return null; // Εξαφανίζεται η κάρτα αν το ραντεβού ακυρωθεί
    }

    return (
        <div className="professionalPannel">
            <div className="professionalInfo">
                <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} className="professionalPfp" />
                <p>{professionalName}</p>
            </div>
            <div className="professionalDetails">
                <div className="professionalpersonalinfo">
                    <div className="appointmentLocation">
                        {type === 'facetoface' ? (
                            <>
                                <img src={location} alt="location" />
                                <p>Διεύθυνση ραντεβού: {loc}</p>
                            </>
                        ) : (
                            <>
                                <img src={linkIcon} alt="link" />
                                <p>Link online συνάντησης: <a href={loc} target="_blank" rel="noopener noreferrer">{loc}</a></p>
                            </>
                        )}
                    </div>
                    <div className="appointmentDate">
                        <img src={dateIcon} alt='date' />
                        <p>Ημερομηνία Ραντεβού: {date}</p>
                    </div>
                    <div className="appointmentTime">
                        <img src={timeIcon} alt='time' />
                        <p>Ώρα Ραντεβού: {time} </p>
                    </div>
                </div>
                <div className="appointmentOptions">
                    <button className="moreButton" onClick={handleMoreButton}>Δείτε Προφίλ Επαγγελματία</button>
                    <button className="buttons" onClick={handleChangeButton}>Αλλαγή Στοιχείων Ραντεβού</button>
                    <button className="buttons" onClick={handleApplButton}>Κάντε Αίτηση Συνεργασίας</button>
                    <button className="cancelButtonProfessional" onClick={handleCancelButton}>Ακύρωση Ραντεβού</button>
                </div>
            </div>

            {/* Modal για επιβεβαίωση ακύρωσης */}
            {showModal && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <p>Είστε σίγουρος/η ότι θέλετε να ακυρώσετε αυτό το ραντεβού;</p>
                        <div className="modalButtons">
                            <button className="confirmButton" onClick={confirmCancel}>Ναι</button>
                            <button className="cancelButton" onClick={cancelCancel}>Όχι</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AppointmentCardProfessional;
