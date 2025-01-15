import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
} from '@mui/material';
import ProgressTracker from '../components/ProgressTrackerCreateProfile';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig'; // Adjust based on your Firebase configuration
import { doc, setDoc } from 'firebase/firestore';

export default function DimiourgiaProfileProfessional2() {
  const navigate = useNavigate();

  const [educationPdf, setEducationPdf] = useState(null);
  const [firstAidPdf, setFirstAidPdf] = useState(null);
  const [educationMsg, setEducationMsg] = useState('');
  const [firstAidMsg, setFirstAidMsg] = useState('');

  const handlePrev = () => {
    navigate('/profesionaleditstep1'); // Adjust route accordingly
  };

  const handleNext = async () => {
    if (!educationPdf || !firstAidPdf) {
      alert('Παρακαλώ επισυνάψτε όλα τα απαραίτητα αρχεία πριν συνεχίσετε.');
      return;
    }

    try {
      const userId = "user-id-placeholder"; // Replace with actual user ID logic
      const docRef = doc(db, 'users', userId);
      await setDoc(
        docRef,
        {
          educationPdf,
          firstAidPdf,
        },
        { merge: true }
      );
      alert('Τα αρχεία αποθηκεύτηκαν με επιτυχία!');
      navigate('/profesionaleditstep3'); // Adjust route accordingly
    } catch (error) {
      console.error('Error saving files:', error);
      alert('Υπήρξε σφάλμα κατά την αποθήκευση των αρχείων.');
    }
  };

  const handleFileUpload = (event, setFile, setMessage) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== 'application/pdf') {
        setMessage('Παρακαλώ επιλέξτε ένα αρχείο τύπου PDF.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64Pdf = reader.result;
        setFile(base64Pdf);
        setMessage('Το αρχείο επισυνάφθηκε επιτυχώς!');
      };
      reader.readAsDataURL(file);
    } else {
      setFile(null);
      setMessage('Αποτυχία επισύναψης αρχείου.');
    }
  };

  return (
    <div>
      {/* Progress Tracker with current step set to 2 */}
      <ProgressTracker currentStep={2} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h2>

        <Typography style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Επίπεδο Εκπαίδευσης:
        </Typography>
        <TextField
          style={{ backgroundColor: '#fff', borderRadius: '5px' }}
          label="Επίπεδο Εκπαίδευσης"
          placeholder="π.χ. Πτυχίο ΕΠΑΛ πώς: 'Βοηθός Βρεφοκομικών'"
          size="small"
          fullWidth
        />

        <Typography style={{ fontWeight: 'bold', marginTop: '30px' }}>
          Πιστοποίηση Εκπαίδευσης (.pdf):
        </Typography>
        <Button
          variant="outlined"
          component="label"
          size="small"
          sx={{
            backgroundColor: '#013372',
            color: 'white',
            '&:hover': {
              backgroundColor: '#013372',
            },
          }}
        >
          Επιλογή Αρχείου
          <input
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, setEducationPdf, setEducationMsg)}
          />
        </Button>
        {educationMsg && (
          <Typography style={{ marginTop: '10px', color: educationMsg.includes('επιτυχώς') ? 'green' : 'red' }}>
            {educationMsg}
          </Typography>
        )}

        <Typography style={{ fontWeight: 'bold', marginTop: '30px' }}>
          Πιστοποίηση Πρώτων Βοηθειών (.pdf):
        </Typography>
        <Button
          variant="outlined"
          component="label"
          size="small"
          sx={{
            backgroundColor: '#013372',
            color: 'white',
            '&:hover': {
              backgroundColor: '#013372',
            },
          }}
        >
          Επιλογή Αρχείου
          <input
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileUpload(e, setFirstAidPdf, setFirstAidMsg)}
          />
        </Button>
        {firstAidMsg && (
          <Typography style={{ marginTop: '10px', color: firstAidMsg.includes('επιτυχώς') ? 'green' : 'red' }}>
            {firstAidMsg}
          </Typography>
        )}

        <div
          className="options1"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <button
            style={{
              backgroundColor: '#013372',
              color: 'white',
              border: 'none',
              padding: '8px 13px',
              borderRadius: '5px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            onClick={handlePrev}
          >
            <b>Προηγούμενο Βήμα</b>
          </button>
          <button
            style={{
              backgroundColor: '#013372',
              color: 'white',
              border: 'none',
              padding: '8px 13px',
              borderRadius: '5px',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            onClick={handleNext}
          >
            <b>Επόμενο Βήμα</b>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
