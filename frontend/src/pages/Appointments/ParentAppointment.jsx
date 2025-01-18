import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentAppointment.css';
import Footer from '../../components/Footer';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path to your Firebase config
import { getAuth } from 'firebase/auth';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLocation } from 'react-router-dom';

function ParentAppointment() {
  const location = useLocation();
  const { babysitterName, ProfadId } = location.state || {};

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
    message: '',
  });

  useEffect(() => {
    if (!userId) return;

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
    setMeetingType(event.target.value);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate('/FindProfessional_unconnected');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!meetingType) {
      alert('Παρακαλώ επιλέξτε τύπο συνάντησης.');
      return;
    }

    const connectionData = {
      parentId: userId,
      parentEmail: parentData.userEmail,
      professionalId: ProfadId,
      status: 'none',
      type: 'appointment',
      details: {
        date: appointmentDetails.date,
        time: appointmentDetails.time,
        location: appointmentDetails.location,
        message: appointmentDetails.message,
        meetingType: meetingType,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await setDoc(doc(db, 'connections', `${userId}_${Date.now()}`), connectionData);
      navigate('/ParentAppointmentEnd');
    } catch (error) {
      console.error('Error saving connection:', error);
      alert('Παρουσιάστηκε σφάλμα κατά την αποθήκευση του ραντεβού. Δοκιμάστε ξανά.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Breadcrumbs page1="ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ" link1="../FindProfessional_unconnected" page2="ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ" />

      <div className="ApPersonInfo">
        <h1>ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ ΜΕ:</h1>
        <h1>{babysitterName}</h1>

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
              <label htmlFor="meetingType" className="infoType">
                Τύπος Συνάντησης:
              </label>
            </div>

            <div className="meeting">
              <div>
                <label id="radiobutton">
                  <input
                    type="radio"
                    value="facetoface"
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
                    value="online"
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

            {meetingType === 'online' && (
              <div>
                <label htmlFor="location" className="infoType">
                  Link online συνάντησης:
                </label>
                <Tooltip
                  title="Δημιουργήστε ένα online meeting σε κάποια πλατφόρμα όπως webex, zoom...και συμπληρώστε εδώ τον σύνδεσμο"
                  arrow
                >
                  <InfoIcon sx={{ marginLeft: '5px', cursor: 'pointer' }} />
                </Tooltip>
                <input
                  type="url"
                  id="location"
                  name="location"
                  className="infoBox"
                  placeholder="Link online συνάντησης"
                  value={appointmentDetails.location}
                  onChange={handleInputChange}
                  pattern="https?://.*"
                  title="Συμπληρώστε έναν έγκυρο σύνδεσμο URL (π.χ., https://example.com)"
                  required
                />
              </div>
            )}

            {meetingType === 'facetoface' && (
              <div>
                <label htmlFor="location" className="infoType">
                  Διεύθυνση Ραντεβού:
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="infoBox"
                  placeholder="Οδός Αριθμός, Περιοχή, Τ.Κ."
                  value={appointmentDetails.location}
                  onChange={handleInputChange}
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
