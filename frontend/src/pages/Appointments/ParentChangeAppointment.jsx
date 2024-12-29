import React, { useState, useEffect } from 'react'; 
import './ParentChangeAppointment.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import RequiredField from '../../components/RequiredField';  
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

function ParentChangeAppointment({babysitterName, userName, userLastName, userPhone, userEmail, prevDate, prevTime, initialMeetingType, initialMessage, initialAddress , initialLink }) {
    // Συνάρτηση για μετατροπή ημερομηνίας
    const convertDateToISO = (date) => {
        const [month, day, year] = date.split("/");
        return `20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    // Μετατροπή ημερομηνίας σε μορφή ISO για το date input
    const isoDate = convertDateToISO(prevDate);

    // State για τον τύπο συνάντησης
    const [meetingType, setMeetingType] = useState(initialMeetingType); 

    // State για το μήνυμα
    const [message, setMessage] = useState(initialMessage || "");

    // State για τη διεύθυνση
    const [address, setAddress] = useState(initialAddress);

    // State για το link
    const [link, setLink] = useState(initialLink);

    // Διαχείριση αλλαγής τύπου συνάντησης
    const handleMeetingTypeChange = (event) => {
        setMeetingType(event.target.value);
    };

    const handleCancel = () => {
        alert("Η φόρμα ακυρώθηκε.");
        // ΘΕΛΕΙ ΑΛΛΑΓΗ πχ navigation για επιστροφή σε προηγούμενη σελίδα εδώ.
    };

    const breadcrumbPages = [
        { name: 'ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ' }
    ];

    useEffect(() => {
        if (initialMeetingType) {
            setMeetingType(initialMeetingType);
        }
    }, [initialMeetingType]);

    return (
        <>
            <ParentNavigation currentNavPage={'parHire'} />
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages} />

            <div className='ApPersonInfoCh'>
                <h1>ΑΛΛΑΓΗ ΣΤΟΙΧΕΙΩΝ ΡΑΝΤΕΒΟΥ ΜΕ: </h1>
                <h1>{babysitterName}</h1>

                <form>
                    <p className="infoTypeCh">Όνομα:</p>
                    <p className="infoBoxCh">{userName || "Όνομα"}</p>
                    <br />
                    <p className="infoTypeCh">Επώνυμο:</p>
                    <p className="infoBoxCh">{userLastName || "Επώνυμο"}</p>

                    <div className="phoneAndEmailCh">
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoTypeCh">Τηλέφωνο:</p>
                            <p className="infoBoxCh">{userPhone || "Τηλέφωνο"}</p>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoTypeCh">Ηλεκτρονικό Ταχυδρομίο:</p>
                            <p className="infoBoxCh">{userEmail || "Ηλεκτρονικό Ταχυδρομίο"}</p>
                        </div>
                    </div>

                    <div className="dateAndtimeCh">
                        <div>
                            <br /><br />
                            <label htmlFor="date" className="infoTypeCh">
                                <RequiredField label="Ημερομηνία Ραντεβού:" />
                            </label>
                            <input type="date" id="date" name="date" className="infoBoxCh" value={isoDate} required />
                        </div>
                        <div>
                            <br /><br />
                            <label htmlFor="time" className="infoTypeCh">
                                <RequiredField label="Ώρα Ραντεβού:" />
                            </label>
                            <input type="time" id="time" name="time" className="infoBoxCh" value={prevTime} required />
                        </div>
                    </div>

                    <div className="containerCh">
                        <div>
                            <br /><br />
                            <RequiredField label="Τύπος Συνάντησης:" />
                        </div>

                        <div className="meetingCh">
                            <div>
                                <label id="radiobutton">
                                    <input
                                        type="radio"
                                        value="FaceToFace"
                                        name="meeting"
                                        onChange={handleMeetingTypeChange}
                                        checked={meetingType === "FaceToFace"}
                                        required
                                    />
                                    <span className="radio-labelCh">Δια ζώσης Συνάντηση</span>
                                </label>
                            </div>
                            <div>
                                <label id="radiobutton">
                                    <input
                                        type="radio"
                                        value="Online"
                                        name="meeting"
                                        onChange={handleMeetingTypeChange}
                                        checked={meetingType === "Online"}
                                        required
                                    />
                                    <span className="radio-labelCh">Online Συνάντηση</span>
                                </label>
                            </div>
                        </div>
                        <br />
                        <br />

                        {meetingType === "FaceToFace" && (
                            <div>
                                <label htmlFor="location" className="infoTypeCh">Διεύθυνση Ραντεβού:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    className="infoBoxCh"
                                    placeholder="Διεύθυνση , Περιοχή , Τ.Κ."
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {meetingType === "Online" && (
                            <div>
                                <label htmlFor="location" className="infoTypeCh">Link online συνάντησης:</label>
                                <Tooltip title="Δημιουργήστε ένα online meeting σε κάποια πλατφόρμα όπως webex, zoom...και συμπληρώστε εδώ τον σύνδεσμο" arrow>
                                    <InfoIcon sx={{ marginLeft: '5px', cursor: 'pointer' }} />
                                </Tooltip>
                                <input
                                    type="text"
                                    id="link"
                                    name="link"
                                    className="infoBoxCh"
                                    placeholder="Link online συνάντησης"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <div className="messageCh">
                            <textarea
                                className="mymessageCh"
                                name="subject"
                                placeholder="Μήνυμα προς Επαγγελματία.."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ height: 200 }}
                            ></textarea>
                        </div>

                        <button type="submit" className="submitbuttonCh">Αλλαγή Στοιχείων</button>
                        <br />
                        <button type="button" className="cancelbuttonCh" onClick={handleCancel}>Πίσω</button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default ParentChangeAppointment;
