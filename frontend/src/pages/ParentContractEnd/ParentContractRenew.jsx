// src/pages/ParentContractRenew.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ParentContractRenew.css';
import Footer from '../../components/Footer';
import Schedule from '../../components/Schedule';
import { collection, addDoc, getDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ParentContractRenew() {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // We read "adData" & "professionalDetails" from location.state
  const { adData, professionalDetails } = location.state || {};

  // We'll parse out the ID and name
  const professionalId = professionalDetails?.userId;
  const proFullName =
    `${professionalDetails?.firstName || ''} ${professionalDetails?.lastName || ''}`.trim() ||
    '(Άγνωστος Επαγγελματίας)';

  // Current user (parent)
  const [userId, setUserId] = useState(null);

  // Listen for auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  // Fetch parent's user doc
  const [parentData, setParentData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    kidsAge: '',
    address: '',
  });

  useEffect(() => {
    if (!userId) return;
    const fetchParentDoc = async () => {
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data() || {};
          setParentData({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            phone: data.phone || '',
            email: data.email || '',
            kidsAge: data.kidsAge || '',
            address: data.address || '',
          });
        }
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };
    fetchParentDoc();
  }, [userId]);

  // Additional contract details
  const [contractDetails, setContractDetails] = useState({
    houseOption: '',
    startDate: '',
    endDate: '',
    message: '',
    signContract: false,
    // possibly schedule
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setContractDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // If your <Schedule /> returns some data, store it
  const handleScheduleChange = (scheduleData) => {
    // setContractDetails((prev) => ({ ...prev, schedule: scheduleData }));
  };

  const handleSubmit = async () => {
    // Must have user
    if (!userId) {
      alert('Απαιτείται σύνδεση.');
      return;
    }
    // Must have professional
    if (!professionalId) {
      alert('Λείπει το ID του επαγγελματία. Επιστρέψτε και επιλέξτε επαγγελματία.');
      return;
    }
    // Must sign contract
    if (!contractDetails.signContract) {
      alert('Παρακαλώ επιβεβαιώστε την επιθυμία συνεργασίας...');
      return;
    }

    // If the user didn't pick any date, fallback to "today" for startContract.
    let finalStart = contractDetails.startDate.trim();
    if (!finalStart) {
      // fallback: "YYYY-MM-DD" from today's date
      const today = new Date().toISOString().slice(0,10); 
      finalStart = today; 
    }

    // optional fallback for endDate if you want
    let finalEnd = contractDetails.endDate.trim(); 
    // or leave it empty if user didn't pick

    try {
      await addDoc(collection(db, 'notifications'), {
        from: userId,
        to: professionalId,
        professionalName: proFullName,
        type: 'collaborationRequest',
        timestamp: serverTimestamp(),
        status: 'pending',

        // parent's email, child age, address
        parentEmail: parentData.email,
        childAge: parentData.kidsAge,
        address: parentData.address,

        // user-chosen but ensure we don't store an empty string for startContract
        startContract: finalStart, // store fallback if empty
        endContract: finalEnd,
        locationChoice: contractDetails.houseOption,
        message: contractDetails.message,
        signContract: contractDetails.signContract,

        createdAt: new Date(),
        // schedule: contractDetails.schedule
      });
      alert('Η αίτηση συνεργασίας καταχωρήθηκε επιτυχώς!');
      navigate('/ParentContractEnd');
    } catch (error) {
      console.error('Error creating doc:', error);
      alert('Σφάλμα κατά την αποθήκευση.');
    }
  };

  return (
    <div className="parentContractRenew">
      <div className="personInfo">
        <h1>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ ΜΕ: {proFullName}</h1>

        <div>
          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{parentData.firstName || '*Αυτό το στοιχείο λείπει*'}</p>
          <br />

          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{parentData.lastName || '*Αυτό το στοιχείο λείπει*'}</p>
          <br />

          <p className="infoType">Τηλέφωνο:</p>
          <p className="infoBox">{parentData.phone || '*Αυτό το στοιχείο λείπει*'}</p>
          <br />

          <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
          <p className="infoBox">{parentData.email || '*Αυτό το στοιχείο λείπει*'}</p>

          <p className="message">
            Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα από το Προφίλ σας.
          </p>

          <div className="seperatorBar"></div>

          <div className="kidsAge">
            <p className="infoType">Ηλικία Παιδιού (σε μήνες):</p>
            <p className="infoBox">
              {parentData.kidsAge || '*Δεν έχετε καταχωρήσει ηλικία παιδιού στο προφίλ*'}
            </p>
          </div>

          <div className="address">
            <p className="infoType">Διεύθυνση, Περιοχή, ΤΚ:</p>
            <p className="infoBox">
              {parentData.address || '*Δεν έχετε καταχωρήσει διεύθυνση στο προφίλ*'}
            </p>
          </div>

          <div className="seperatorBar"></div>

          {/* House Option */}
          <div className="where">
            <p className="infoType">Επιλέξτε το μέρος φύλαξης του παιδιού:</p>
            <form>
              <input
                type="radio"
                id="parentsHouse"
                value="parentsHouse"
                name="houseOption"
                checked={contractDetails.houseOption === 'parentsHouse'}
                onChange={handleInputChange}
              />
              <label htmlFor="parentsHouse"> Στο σπίτι του γονέα/κηδεμόνα</label>
              <br />
              <input
                type="radio"
                id="professionalsHouse"
                value="professionalsHouse"
                name="houseOption"
                checked={contractDetails.houseOption === 'professionalsHouse'}
                onChange={handleInputChange}
              />
              <label htmlFor="professionalsHouse"> Στο σπίτι του επαγγελματία</label>
            </form>
          </div>

          <div className="seperatorBar"></div>

          {/* Start & End Date */}
          <div className="duration">
            <label htmlFor="startDate">Έναρξη Συνεργασίας:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={contractDetails.startDate}
              onChange={handleInputChange}
            />
            <p>&emsp;&emsp;&emsp;</p>
            <label htmlFor="endDate">Λήξη Συνεργασίας:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={contractDetails.endDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Schedule */}
          <div className="schedule">
            <Schedule onChange={handleScheduleChange} />
          </div>

          <div className="seperatorBar"></div>

          {/* Message */}
          <p className="infoType">Μήνυμα προς επαγγελματία (προαιρετικό):</p>
          <textarea
            className="messagePannel"
            name="message"
            placeholder="Γράψτε ένα μήνυμα εδώ..."
            value={contractDetails.message}
            onChange={handleInputChange}
          ></textarea>

          <div className="seperatorBar"></div>

          {/* Sign check */}
          <div className="signContract">
            <input
              type="checkbox"
              id="sign"
              name="signContract"
              checked={contractDetails.signContract}
              onChange={handleInputChange}
            />
            <p>Δηλώνω επιθυμία συνεργασίας και υπογραφής ιδιωτικού συμφωνητικού.</p>
          </div>

          <p className="message">
            <b>
              ΠΡΟΣΟΧΗ: Εάν πατήσετε "Υποβολή" η παρούσα αίτηση θα σταλεί στον Επαγγελματία
              και δεν θα μπορεί να υποστεί μελλοντική επεξεργασία.
            </b>
          </p>
        </div>

        <div className="options">
          <button onClick={() => navigate('../ParentContractEnd')} className="cancel">
            <b>Ακύρωση</b>
          </button>
          <button onClick={() => navigate('../ParentContractEnd')}>
            <b>Προσωρινή Αποθήκευση</b>
          </button>
          <button onClick={handleSubmit}>
            <b>Οριστική Υποβολή</b>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ParentContractRenew;
