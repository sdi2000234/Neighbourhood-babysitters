import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentAppointment.css';
import Footer from '../../components/Footer';
import RequiredField from '../../components/RequiredField';  
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path to your Firebase config
import { getAuth } from 'firebase/auth';

function ParentAppointment({ babysitterName }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  const [parentData, setParentData] = useState({
    userName: '',
    userLastName: '',
    userPhone: '',
    userEmail: '',
  });

  const [meetingType, setMeetingType] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
    location: '',
    link: '',
    message: '',
  });

  useEffect(() => {
    if (!userId) return;
    const handleCancel = (event) => { // Για button Ακύρωσης 
        event.preventDefault();  // Αποτρέπει την υποβολή της φόρμας
        navigate('/FindProfessional_unconnected'); 
    };
    const fetchParentData = async () => {
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setParentData({
            userName: data.firstName || '',
            userLastName: data.lastName || '',
            userPhone: data.phone || '',
            userEmail: data.email || '',
          });
        }
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };

    fetchParentData();
  }, [userId]);

    const handleMeetingTypeChange = (event) => {
        setMeetingType(event.target.value); // Ενημέρωση τύπου συνάντησης για radiobuttons 
    };

    const handleCancel = (event) => { // Για button Ακύρωσης 
        event.preventDefault();  // Αποτρέπει την υποβολή της φόρμας
        navigate('/ParentHireProfessional'); 
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
      <Breadcrumbs page1="ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ" link1="../ParentHireProfessional" page2="ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ" />

            {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
            <Breadcrumbs page1={"ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"} link1={"../ParentHireProfessional"} page2={"ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ"}/>

            <div className='ApPersonInfo'>
                <h1>ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ ΜΕ:</h1>
                <h1> {babysitterName}</h1>

        <form onSubmit={handleSubmit}>
          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{parentData.userName || 'Όνομα'}</p>
          <br />
          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{parentData.userLastName || 'Επώνυμο'}</p>

          <div className="phoneAndEmail">
            <div style={{ flexGrow: 1 }}>
              <p className="infoType">Τηλέφωνο:</p>
              <p className="infoBox">{parentData.userPhone || 'Τηλέφωνο'}</p>
            </div>
            <div style={{ flexGrow: 1 }}>
              <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
              <p className="infoBox">{parentData.userEmail || 'Ηλεκτρονικό Ταχυδρομίο'}</p>
            </div>
          </div>

          <div className="dateAndtime">
            <div>
              <br />
              <br />
              <label htmlFor="date" className="infoType">
                Ημερομηνία Ραντεβού:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="infoBox"
                placeholder="Ημερομηνία Ραντεβού"
                value={appointmentDetails.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <br />
              <br />
              <label htmlFor="time" className="infoType">
                Ώρα Ραντεβού:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="infoBox"
                placeholder="Ώρα Ραντεβού"
                value={appointmentDetails.time}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="container">
            <div>
              <br />
              <br />
              <label>Τύπος Συνάντησης:</label>
            </div>

            <div className="meeting">
              <div>
                <label id="radiobutton">
                  <input
                    type="radio"
                    value="FaceToFace"
                    name="meeting"
                    onChange={handleMeetingTypeChange}
                    required
                  />
                  <span className="radio-label">Δια ζώσης Συνάντηση</span>
                </label>
              </div>
              <div>
                <label id="radiobutton">
                  <input
                    type="radio"
                    value="Online"
                    name="meeting"
                    onChange={handleMeetingTypeChange}
                    required
                  />
                  <span className="radio-label">Online Συνάντηση</span>
                </label>
              </div>
            </div>
            <br />
            <br />

            {meetingType === 'FaceToFace' && (
              <div>
                <label htmlFor="location" className="infoType">
                  Διεύθυνση Ραντεβού:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="infoBox"
                  placeholder="Οδός Αριθμός, Περιοχή , Τ.Κ."
                  value={appointmentDetails.location}
                  onChange={handleInputChange}
                  pattern="^[^,]+?\s*,\s*[^,]+?\s*,\s*[0-9]{5}$"
                  title="Η διεύθυνση πρέπει να έχει τη μορφή 'Οδός Αριθμός, Περιοχή, Τ.Κ.' π.χ. 'Ερμού 15, Αθήνα, 10563'"
                  required
                />
              </div>
            )}

            {meetingType === 'Online' && (
              <div>
                <label htmlFor="link" className="infoType">
                  Link online συνάντησης:
                </label>
                <Tooltip
                  title="Δημιουργήστε ένα online meeting σε κάποια πλατφόρμα όπως webex,zoom...και συμπληρώστε εδώ τον σύνδεσμο"
                  arrow
                >
                  <InfoIcon sx={{ marginLeft: '5px', cursor: 'pointer' }} />
                </Tooltip>
                <input
                  type="url"
                  id="link"
                  name="link"
                  className="infoBox"
                  placeholder="Link online συνάντησης"
                  value={appointmentDetails.link}
                  onChange={handleInputChange}
                  pattern="https?://.*"
                  title="Συμπληρώστε έναν έγκυρο σύνδεσμο URL (π.χ., https://example.com)"
                  required
                />
              </div>
            )}

            <div className="message">
              <textarea
                className="mymessage"
                name="message"
                placeholder="Μήνυμα προς Επαγγελματία.."
                style={{ height: 200 }}
                value={appointmentDetails.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="submitbutton">
              Αποστολή
            </button>
            <br />
            <button type="button" className="cancelbutton" onClick={handleCancel}>
              Ακύρωση
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ParentAppointment;
