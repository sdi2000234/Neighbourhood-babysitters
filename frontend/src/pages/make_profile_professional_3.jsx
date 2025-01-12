import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

import ProgressTracker from '../components/ProgressTracker_CreateProfile';
import Footer from '../components/Footer';

export default function DimiourgiaProfileProfessional3() {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/profesionaleditstep2'); // Adjust route accordingly
  };

  const handleCompleteProfile = () => {
    alert('Ολοκλήρωση Δημιουργίας Προφίλ!');
  };

  // Define a common style for labels (for file upload and bio texts)
  const labelStyle = { fontSize: '1.1rem' };

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

  // Style for the navigation buttons (plain HTML buttons)
  const navButtonStyle = {
    backgroundColor: '#013372',
    color: 'white',
    border: 'none',
    padding: '8px 13px',
    borderRadius: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
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
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Σύντομη Αυτοπαρουσίαση: (εμφανίζεται στην σελίδα αναζήτησης - εύρεσης επαγγελματιών)
          </Typography>
          <TextField multiline rows={4} placeholder="Λίγα λόγια για εσάς..." />

         

          {/* PDF Upload for Bio */}
          <Typography variant="body2" sx={{ mt: 2, ...labelStyle }}>
            Επισύναψη Βιογραφικού Σημειώματος (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>

          
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
          <button style={navButtonStyle} onClick={handlePrev}>
            <b>Προηγούμενο Βήμα</b>
          </button>
          <button style={navButtonStyle} onClick={handleCompleteProfile}>
            <b>Ολοκλήρωση Δημιουργίας Προφίλ</b>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
