import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust this to your Firebase configuration file
import Footer from '../components/Footer';
import ProgressTracker from '../components/ProgressTrackerCreateProfile';

export default function DimiourgiaProfileProfessional3() {
  const navigate = useNavigate();
  const [bioText, setBioText] = useState(''); // State for the bio text
  const [cvPdf, setCvPdf] = useState(null); // State for the PDF file
  const [uploadMsg, setUploadMsg] = useState(''); // Upload message
  const userId = 'user-123'; // Replace with actual user ID from authentication

  const handlePrev = () => {
    navigate('/profesionaleditstep2'); // Adjust route accordingly
  };

  // For the Browse buttons, use MUI styling via the sx prop
  const browseButtonStyle = {
    minWidth: '120px',
    alignSelf: 'flex-start',
    backgroundColor: '#013372',
    color: 'white',
    borderColor: '#013372',
    '&:hover': {
      backgroundColor: '#013372',
      color: 'white',
    },
  };

  const handleCompleteProfile = async () => {
    try {
      // Save bioText and CV (if exists) to the database
      const data = { bioText };
      if (cvPdf) {
        data.cvPdf = cvPdf;
      }

      await setDoc(doc(db, 'users', userId), data, { merge: true });
      alert('Το προφίλ σας ολοκληρώθηκε με επιτυχία!');
      navigate('../dashboard_professional');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Υπήρξε σφάλμα κατά την αποθήκευση του προφίλ.');
    }
  };

  const handleBioChange = (event) => {
    setBioText(event.target.value);
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setCvPdf(null);
        setUploadMsg('Παρακαλώ επιλέξτε αρχείο PDF.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setCvPdf(reader.result); // Save base64 PDF
        setUploadMsg('Το αρχείο PDF επισυνάφθηκε επιτυχώς!');
      };
      reader.readAsDataURL(file);
    } else {
      setCvPdf(null);
      setUploadMsg('');
    }
  };

  return (
    <div>
      {/* Progress Tracker with current step set to 3 */}
      <ProgressTracker currentStep={3} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΒΙΟΓΡΑΦΙΚΟ</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Short Intro */}
          <Typography style={{ fontWeight: 'bold' }} variant="body1">
            Σύντομη Αυτοπαρουσίαση: (εμφανίζεται στην σελίδα αναζήτησης - εύρεσης επαγγελματιών)
          </Typography>
          <TextField
            style={{ backgroundColor: '#fff', borderRadius: '5px' }}
            multiline
            rows={4}
            placeholder="Λίγα λόγια για εσάς..."
            value={bioText}
            onChange={handleBioChange}
          />

          {/* PDF Upload for Bio */}
          <Typography style={{ fontWeight: 'bold', marginTop: '20px', fontSize: '18px' }} variant="body2">
            Επισύναψη Βιογραφικού Σημειώματος (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>
          {uploadMsg && (
            <Typography
              variant="body2"
              sx={{ mt: 1, color: uploadMsg.includes('επιτυχώς') ? 'green' : 'red' }}
            >
              {uploadMsg}
            </Typography>
          )}
        </div>

        {/* Navigation Buttons */}
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
            onClick={handleCompleteProfile}
          >
            <b>Ολοκλήρωση Δημιουργίας Προφίλ</b>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
