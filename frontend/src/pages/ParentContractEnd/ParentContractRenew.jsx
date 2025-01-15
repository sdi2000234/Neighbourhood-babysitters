import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentContractRenew.css';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import Schedule from '../../components/Schedule';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path to your Firebase config
import { getAuth } from 'firebase/auth';

function ParentContractRenew() {
  const [parentData, setParentData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [contractDetails, setContractDetails] = useState({
    kidsAge: '',
    address: '',
    houseOption: '',
    startDate: '',
    endDate: '',
    message: '',
    signContract: false,
  });
  const childAges = ["2 μηνών", "3 μηνών", "4 μηνών", "5 μηνών", "6 μηνών", "7 μηνών", "8 μηνών", "9 μηνών", "10 μηνών", "11 μηνών", "12 μηνών", "13 μηνών", "14 μηνών", "15 μηνών", "16 μηνών", "17 μηνών", "18 μηνών", "19 μηνών", "20 μηνών", "21 μηνών", "22 μηνών", "23 μηνών", "24 μηνών", "25 μηνών", "26 μηνών", "27 μηνών", "28 μηνών", "29 μηνών", "30 μηνών"];

  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) return;

    const fetchParentData = async () => {
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setParentData({
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            phone: data.phone || '',
            email: data.email || '',
          });
        }
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };

    fetchParentData();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setContractDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!contractDetails.signContract) {
      alert('Παρακαλώ επιβεβαιώστε την επιθυμία συνεργασίας και υπογραφής συμφωνητικού.');
      return;
    }

    const contractData = {
      ...contractDetails,
      parentId: userId,
      createdAt: new Date(),
    };

    try {
      await setDoc(doc(db, 'contracts', `${userId}_${Date.now()}`), contractData);
      alert('Η αίτηση συνεργασίας καταχωρήθηκε επιτυχώς!');
      navigate('/ParentContractEnd');
    } catch (error) {
      console.error('Error saving contract:', error);
      alert('Παρουσιάστηκε σφάλμα κατά την αποθήκευση της αίτησης. Δοκιμάστε ξανά.');
    }
  };

  return (
    <div className='parentContractRenew'>
      <div className="personInfo">
        <h1>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ ΜΕ: {parentData.firstName} {parentData.LastName}</h1>
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
            Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας.
          </p>
          <div className="seperatorBar"></div>
          <div className="kidsAge">
            <p className="infoType">Επιλέξτε την ηλικία του παιδιού (σε μήνες):</p>
            <Dropdown
              defaultoption="Επιλέξτε ηλικία"
              options={childAges}
              onChange={(e) => handleInputChange({ target: { name: 'kidsAge', value: e.target.value } })}
            />
          </div>
          <div className="address">
            <p className="infoType">Διεύθυνση, Περιοχή, ΤΚ:</p>
            <input
              className="infoBox"
              type='text'
              name="address"
              placeholder="Εισάγετε τη διεύθυνση κατοικίας σας"
              value={contractDetails.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="where">
            <p className="infoType">Επιλέξτε το μέρος φύλαξης του παιδιού:</p>
            <form>
              <input
                type="radio"
                id="parentsHouse"
                value="parentsHouse"
                name="houseOption"
                onChange={handleInputChange}
              />
              <label htmlFor="parentsHouse"> Στο σπίτι του γονέα/κηδεμόνα</label>
              <br />
              <input
                type="radio"
                id="professionalsHouse"
                value="professionalsHouse"
                name="houseOption"
                onChange={handleInputChange}
              />
              <label htmlFor="professionalsHouse"> Στο σπίτι του επαγγελματία</label>
            </form>
          </div>
          <div className="seperatorBar"></div>
          <div className="duration">
            <label htmlFor="startDate">Έναρξη Συνεργασάς:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={contractDetails.startDate}
              onChange={handleInputChange}
            />
            <p>&emsp;&emsp;&emsp;</p>
            <label htmlFor="endDate">Λήξη Συνεργασάς:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={contractDetails.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="schedule">
            <Schedule />
          </div>
          <div className="seperatorBar"></div>
          <p className="infoType">Μήνυμα προς επαγγελματία (προαιρετικό):</p>
          <textarea
            className="messagePannel"
            name="message"
            placeholder="Γράψτε ένα μήνυμα εδώ..."
            value={contractDetails.message}
            onChange={handleInputChange}
          ></textarea>
          <div className="seperatorBar"></div>
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
            <b>ΠΡΟΣΟΧΗ: Εαν πατήσετε "Υποβολή" η παρούσα αίτηση θα σταλεί στην/στον επαγγελματία και δεν θα μπορεί να υποστεί μελλοντική επεξεργασία.</b>
          </p>
        </div>
        <div className="options">
          <button onClick={() => navigate('../ParentContractEnd')} className="cancel"><b>Ακύρωση</b></button>
          <button onClick={() => navigate('../ParentContractEnd')}><b>Προσωρινή Αποθήκευση</b></button>
          <button onClick={handleSubmit}><b>Οριστική Υποβολή</b></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ParentContractRenew;
