import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './AppointmentCardProfessional.css';
import location from '../assets/location_black.png';
import dateIcon from '../assets/dateIcon.png';
import timeIcon from '../assets/timeIcon.png';
import linkIcon from '../assets/linkIcon.png';
import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'; // Adjust the path to your Firebase config

function AppointmentCardProfessional({ connectionId, type, picLink, professionalName, date, loc, time, profId }) {
    const [status, setStatus] = useState("none");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const docRef = doc(db, 'connections', connectionId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setStatus(data.status || "none");
                }
            } catch (error) {
                console.error("Error fetching status:", error);
            }
        };

        fetchStatus();
    }, [connectionId]);

    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, 'connections', connectionId)); // Delete the document
            setStatus("deleted"); // Update local state to hide the card
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    };

    const handleCancelButton = () => {
        setShowModal(true);
    };

    const confirmCancel = async () => {
        try {
            await deleteDoc(doc(db, 'connections', connectionId));
            setStatus("deleted");
            setShowModal(false);
        } catch (error) {
            console.error("Error canceling appointment:", error);
            alert("Παρουσιάστηκε σφάλμα κατά την ακύρωση του ραντεβού. Δοκιμάστε ξανά.");
        }
    };

    const cancelCancel = () => {
        setShowModal(false);
    };

    const handleMoreButton = () => {
        navigate('/new-page');
    };

    const handleChangeButton = () => {
        navigate('/ParentChangeAppointment', {
            state: { connectionId, profId }, // Περάστε το connectionId και το profId στο ParentChangeAppointment
        })
    };

    const handleApplButton = () => {
        navigate('/ParentContractRenew');
    };

    const handleMessage = () => {
        navigate('/WriteMessageProfessional');
    };

    if (status === "deleted" || status === "canceled") {
        return null; // Hide the appointment if it's deleted or canceled
    }

    return (
        <div className="professionalPannel">
            <div className="professionalInfo">
                <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} className="professionalPfp" />
                <p>{professionalName}</p>
                {status === "rejected" && (
                    <IconButton
                        onClick={handleDelete}
                        aria-label="delete"
                        className="deleteIcon"
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: 'red'
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}
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
                        <p>Ώρα Ραντεβού: {time}</p>
                    </div>
                </div>
                <div className="appointmentOptions">
                    {(status === "none" || status ==="changed") && (
                        <>
                            <div className="mesParent">
                                <p>Αναμένετε απάντηση από επαγγελματία</p>
                            </div>
                            <button className="moreButton" onClick={handleMoreButton}>Δείτε Προφίλ Επαγγελματία</button>
                            <button className="buttons" onClick={handleChangeButton}>Αλλαγή Στοιχείων Ραντεβού</button>
                            <button className="buttons" onClick={handleApplButton}>Κάντε Αίτηση Συνεργασίας</button>
                            <button className="cancelButtonProfessional" onClick={handleCancelButton}>Ακύρωση Ραντεβού</button>
                        </>
                    )}
                    {status === "accepted" && (
                        <>
                            <div className="mesParent">
                                <p>Ο επαγγελματίας αποδέχτηκε το ραντεβού</p>
                            </div>
                            <button className="moreButton" onClick={handleMoreButton}>Δείτε Προφίλ Επαγγελματία</button>
                            <button className="buttons" onClick={handleChangeButton}>Αλλαγή Στοιχείων Ραντεβού</button>
                            <button className="buttons" onClick={handleApplButton}>Κάντε Αίτηση Συνεργασίας</button>
                            <button className="cancelButtonProfessional" onClick={handleCancelButton}>Ακύρωση Ραντεβού</button>
                        </>
                    )}
                    {status === "rejected" && (
                        <>
                            <div className="rejmesParent">
                                <p>Το ραντεβού έχει απορριφθεί</p>
                            </div>
                            <button className="moreButton" onClick={handleMoreButton}>Δείτε Προφίλ Επαγγελματία</button>
                            <button className="buttons" onClick={handleMessage}>Στείλτε Μήνυμα</button>
                        </>
                    )}
                </div>
            </div>

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
