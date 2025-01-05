import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './ParentAppointment.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import RequiredField from '../../components/RequiredField';  
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

function ParentAppointment({ babysitterName , userName , userLastName , userPhone, userEmail}) {

    const navigate = useNavigate();
    const [meetingType, setMeetingType] = useState(''); // Διαχειρίζεται την επιλογή του τύπου συνάντησης

    const handleMeetingTypeChange = (event) => {
        setMeetingType(event.target.value); // Ενημέρωση τύπου συνάντησης για radiobuttons 
    };

    const handleCancel = (event) => { // Για button Ακύρωσης 
        event.preventDefault();  // Αποτρέπει την υποβολή της φόρμας
        alert("Η φόρμα ακυρώθηκε."); 
    };

    const handleSubmit = (event) => { // Για button Αποστολή
        event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή
        if (!meetingType) {
            alert("Παρακαλώ επιλέξτε τύπο συνάντησης.");
            return;
        }
        navigate('/ParentAppointmentEnd'); 
    };

    const breadcrumbPages = [
        { name: 'ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ'}  // ΙΣΩΣ ΘΕΛΕΙ ΕΞΤΡΑ "ΒΗΜΑΤΑ" ΕΔΩ
    ];

    return (
        <>
            <ParentNavigation currentNavPage={'parHire'}/>

            <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

            <div className='ApPersonInfo'>
                <h1>ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ ΜΕ:</h1>
                <h1> {babysitterName}</h1>

                <form onSubmit={handleSubmit}>
                    <p className="infoType">Όνομα:</p>
                    <p className="infoBox">{userName === "" ? "Όνομα" : userName}</p>
                    <br/>
                    <p className="infoType">Επώνυμο:</p>
                    <p className="infoBox">{userLastName === "" ? "Επώνυμο" : userLastName}</p>

                    <div className="phoneAndEmail">
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoType">Τηλέφωνο:</p>
                            <p className="infoBox">{userPhone === "" ? "Τηλέφωνο" : userPhone}</p>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                            <p className="infoBox">{userEmail === "" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
                        </div>
                    </div>

                    <div className="dateAndtime">
                        <div>
                            <br /><br />
                            <label htmlFor="date" className="infoType">
                                <RequiredField label="Ημερομηνία Ραντεβού:" />
                            </label>
                            <input type="date" id="date" name="date" className="infoBox" placeholder="Ημερομηνία Ραντεβού" required />
                        </div>
                        <div>
                            <br /><br />
                            <label htmlFor="time" className="infoType">
                                <RequiredField label="Ώρα Ραντεβού:" />
                            </label>
                            <input type="time" id="time" name="time" className="infoBox" placeholder="Ώρα Ραντεβού" required />
                        </div>
                    </div>

                    <div className="container">
                        <div>
                            <br /><br />
                            <RequiredField label="Τύπος Συνάντησης:" />
                        </div>

                        <div className="meeting">
                            <div>
                                <label id="radiobutton">
                                    <input type="radio" value="FaceToFace" name="meeting" onChange={handleMeetingTypeChange} required /> 
                                    <span className="radio-label">Δια ζώσης Συνάντηση</span>
                                </label>
                            </div>
                            <div>
                                <label id="radiobutton">
                                    <input type="radio" value="Online" name="meeting" onChange={handleMeetingTypeChange} required /> 
                                    <span className="radio-label">Online Συνάντηση</span>
                                </label>
                            </div>
                        </div>
                        <br />
                        <br />

                        {/* Δυναμική απόδοση πεδίων βάσει της επιλογής online ή face to face meeting */}
                        {meetingType === "FaceToFace" && (
                            <div>
                                <label htmlFor="location" className="infoType">Διεύθυνση Ραντεβού:</label>
                                <input 
                                    type="text" 
                                    id="location" 
                                    name="location" 
                                    className="infoBox" 
                                    placeholder="Διεύθυνση Αριθμός, Περιοχή , Τ.Κ." 
                                    pattern="^[^,]+?\s*,\s*[^,]+?\s*,\s*[0-9]{5}$"
                                    title="Η διεύθυνση πρέπει να έχει τη μορφή 'Διεύθυνση Αριθμός, Περιοχή, Τ.Κ.' π.χ. 'Ερμού 15, Αθήνα, 10563'" 
                                    required 
                                />
                            </div>
                        )}

                        {meetingType === "Online" && (
                            <div>
                                <label htmlFor="link" className="infoType">Link online συνάντησης:</label>
                                <Tooltip title="Δημιουργήστε ένα online meeting σε κάποια πλατφόρμα όπως webex,zoom...και συμπληρώστε εδώ τον σύνδεσμο" arrow>
                                    <InfoIcon sx={{ marginLeft: '5px', cursor: 'pointer' }} />
                                </Tooltip>
                                <input 
                                    type="url" 
                                    id="link" 
                                    name="link" 
                                    className="infoBox" 
                                    placeholder="Link online συνάντησης" 
                                    pattern="https?://.*" 
                                    title="Συμπληρώστε έναν έγκυρο σύνδεσμο URL (π.χ., https://example.com)" 
                                    required 
                                />
                            </div>
                        )}


                        <div className="message">
                            <textarea className="mymessage" name="subject" placeholder="Μήνυμα προς Επαγγελματία.." style={{ height:200 }}></textarea>
                        </div>

                        <button type="submit" className="submitbutton">Αποστολή</button>
                        <br />
                        <button type="button" className="cancelbutton" onClick={handleCancel}>Ακύρωση</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ParentAppointment;
