import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './ParentChangeAppointment.css';
import Footer from '../../components/Footer';
import RequiredField from '../../components/RequiredField';  
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentChangeAppointment({babysitterName, userName, userLastName, userPhone, userEmail, prevDate, prevTime, initialMeetingType, initialMessage, initialAddress , initialLink }) {
    
    const navigate = useNavigate();
    
    // Συνάρτηση για μετατροπή ημερομηνίας σε ISO
    const convertDateToISO = (date) => {
        const [day, month, year] = date.split("/");
        return `20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    // Μετατροπή ημερομηνίας σε μορφή ISO για το date input
    const isoDate = convertDateToISO(prevDate);

    // State για την ημερομηνία και την ώρα
    const [date, setDate] = useState(isoDate);
    const [time, setTime] = useState(prevTime);

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

    // Διαχείριση αλλαγής ημερομηνίας
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // Διαχείριση αλλαγής ώρας
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleCancel = () => {
        navigate('/ParentAllAppointments');
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Αποφυγή υποβολής αν δεν πληρούνται τα πεδία
        // Ελέγχουμε αν όλα τα πεδία είναι σωστά πριν την υποβολή
        if (meetingType === "FaceToFace" && !address.match(/^[^,]+?\s*,\s*[^,]+?\s*,\s*[0-9]{5}$/)) {
            alert("Η διεύθυνση δεν είναι έγκυρη.");
            return;
        }
        if (meetingType === "Online" && !link.match(/^https?:\/\/.*$/)) {
            alert("Ο σύνδεσμος δεν είναι έγκυρος.");
            return;
        }
        navigate('/ParentChangeAppointmentEnd');
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
            {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages} /> */}
            <Breadcrumbs page1={"ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"} link1={"../ParentHireProfessional"} page2={"ΕΠΕΞΕΡΓΑΣΙΑ ΡΑΝΤΕΒΟΥ"}/>

            <div className='ApPersonInfoCh'>
                <h1>ΑΛΛΑΓΗ ΣΤΟΙΧΕΙΩΝ ΡΑΝΤΕΒΟΥ ΜΕ: </h1>
                <h1>{babysitterName}</h1>

                <form onSubmit={handleSubmit}>
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
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="infoBoxCh"
                                value={date}  // Χρησιμοποιούμε το state
                                onChange={handleDateChange}  // Ενημέρωση του state όταν αλλάζει
                                required
                            />
                        </div>
                        <div>
                            <br /><br />
                            <label htmlFor="time" className="infoTypeCh">
                                <RequiredField label="Ώρα Ραντεβού:" />
                            </label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="infoBoxCh"
                                value={time}  // Χρησιμοποιούμε το state
                                onChange={handleTimeChange}  // Ενημέρωση του state όταν αλλάζει
                                required
                            />
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
                                    pattern="^[^,]+?\s*,\s*[^,]+?\s*,\s*[0-9]{5}$"
                                    title="Η διεύθυνση πρέπει να έχει τη μορφή 'Διεύθυνση Αριθμός, Περιοχή, Τ.Κ.' π.χ. 'Ερμού 15, Αθήνα, 10563'. Επιτρέπονται επιπλέον κενά."
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
                                    type="url"
                                    id="link"
                                    name="link"
                                    className="infoBoxCh"
                                    placeholder="Link online συνάντησης"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    pattern="https?://.*"
                                    title="Ο σύνδεσμος πρέπει να είναι έγκυρο URL που ξεκινά με http:// ή https://"
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
