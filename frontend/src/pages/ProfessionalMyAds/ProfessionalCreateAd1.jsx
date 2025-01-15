import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfessionalCreateAd1.css';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function ProfessionalCreateAd1(canEdit) {
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid; // Get current user ID from Firebase Authentication

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    amka: '',
    phone: '',
    email: '',
    gender: '',
    area: '',
  });

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', userId); // Reference to the user's document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data()); // Set user data from Firestore
        } else {
          console.error('No user data found in Firestore.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handlers for buttons
  const handleCancel = () => {
    navigate('/ProfessionalMyAds');
  };

  const handleSave = () => {
    console.log('Η αγγελία αποθηκεύτηκε προσωρινά.');
    navigate('/ProfessionalMyAds');
  };

  const handleNextStep = () => {
    navigate('/ProfessionalCreateAd2', { state: { canEdit } });
  };

  return (
    <div>
      <ProgressTracker currentStep={1} />
      <div className="personInfo1">
        <h1>ΑΓΓΕΛΙΑ - ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ</h1>
        <div>
          <p className="infoType">Όνομα:</p>
          {userData.firstName ? (
            <p className="infoBox">{userData.firstName}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">Επώνυμο:</p>
          {userData.lastName ? (
            <p className="infoBox">{userData.lastName}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">AMKA:</p>
          {userData.amka ? (
            <p className="infoBox">{userData.amka}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">Τηλέφωνο:</p>
          {userData.phone ? (
            <p className="infoBox">{userData.phone}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
          {userData.email ? (
            <p className="infoBox">{userData.email}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">Γένος:</p>
          {userData.gender ? (
            <p className="infoBox">{userData.gender}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />
          <p className="infoType">Περιοχή Κατοικίας:</p>
          {userData.area ? (
            <p className="infoBox">{userData.area}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <p className="message">
            Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας.
            Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. 
            Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.
          </p>
        </div>
        <div className="options1">
          <button className="cancel" onClick={handleCancel}>
            <b>Ακύρωση</b>
          </button>
          <button onClick={handleSave}>
            <b>Προσωρινή Αποθήκευση</b>
          </button>
          <button onClick={handleNextStep}>
            <b>Επόμενο Βήμα</b>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfessionalCreateAd1;
