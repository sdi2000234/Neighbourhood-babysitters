import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ParentChangeAppointment.css';
import Footer from '../../components/Footer';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import { db } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import Breadcrumbs from '../../components/Breadcrumbs';
import { collection, query, where, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';

function ParentChangeAppointment() {
  const location = useLocation();
  const { connectionId, profId } = location.state || {};
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

  useEffect(() => {
    if (!userId || !profId) {
      console.error('Invalid userId or profId:', { userId, profId });
      return;
    }

    const fetchConnectionData = async () => {
      try {
        const q = query(
          collection(db, 'connections'),
          where('parentId', '==', userId),
          where('professionalId', '==', profId),
          where('type', '==', 'appointment')
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          const data = docSnap.data();

          setAppointmentDetails({
            date: data.details.date || '',
            time: data.details.time || '',
            meetingType: data.details.meetingType || '',
            location: data.details.location || '',
            message: data.details.message || '',
          });
          setMeetingType(data.details.meetingType || '');
        } else {
          console.log('No matching documents found');
        }
      } catch (error) {
        console.error('Error fetching connection data:', error);
      }
    };

    fetchConnectionData();
  }, [userId, profId]);

  const handleMeetingTypeChange = (event) => {
    setMeetingType(event.target.value);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate('/ParentAllAppointments');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!meetingType) {
      alert('Παρακαλώ επιλέξτε τύπο συνάντησης.');
      return;
    }

    try {
      const q = query(
        collection(db, 'connections'),
        where('parentId', '==', userId),
        where('professionalId', '==', profId),
        where('type', '==', 'appointment')
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        const connectionRef = docSnap.ref;

        const updatedDetails = {
          date: appointmentDetails.date,
          time: appointmentDetails.time,
          location: appointmentDetails.location,
          message: appointmentDetails.message,
          meetingType: meetingType,
        };

        await updateDoc(connectionRef, {
          details: updatedDetails,
          status: 'changed',
          updatedAt: new Date(),
        });

        navigate('/ParentChangeAppointmentEnd');
      }
    } catch (error) {
      console.error('Error updating connection:', error);
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
      <Breadcrumbs page1="ΡΑΝΤΕΒΟΥ" link1="../ParentAllAppointments" page2="ΑΛΛΑΓΗ ΣΤΟΙΧΕΙΩΝ ΡΑΝΤΕΒΟΥ" />

      <div className="ApPersonInfo">
        <h1>ΑΛΛΑΓΗ ΣΤΟΙΧΕΙΩΝ ΡΑΝΤΕΒΟΥ</h1>

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

export default ParentChangeAppointment;
