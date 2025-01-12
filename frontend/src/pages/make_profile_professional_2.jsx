import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';

import ProgressTracker from '../components/ProgressTracker_CreateProfile';
import Footer from '../components/Footer';

export default function DimiourgiaProfileProfessional2() {
  const navigate = useNavigate();

  const handlePrev = () => {
    navigate('/profesionaleditstep1'); // Adjust route accordingly
  };

  const handleNext = () => {
    navigate('/profesionaleditstep3'); // Adjust route accordingly
  };

  // Define a common style for labels (for file upload and certificate texts)
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
      {/* Progress Tracker with current step set to 2 */}
      <ProgressTracker currentStep={2} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΠΙΣΤΟΠΟΙΗΤΑ</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Education Level Field */}
          <TextField
            label="Επίπεδο Εκπαίδευσης"
            placeholder="π.χ. Πτυχίο ΕΠΑΛ πώς: 'Βοηθός Βρεφοκομικών'"
            size="small"
            fullWidth
          />

          {/* PDF Upload fields for Education */}
          <Typography variant="body2" sx={labelStyle}>
            Πιστοποίηση Εκπαίδευσης (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>

          <Typography variant="body2" sx={labelStyle}>
            Πιστοποίηση Πρώτων Βοηθειών (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>

          {/* Health Certificates Information */}
          <Typography variant="body1" sx={{ ...labelStyle, mt: 2 }}>
            Πιστοποιητικά Υγείας:
          </Typography>
          <Typography variant="body2" sx={labelStyle}>
            (Ενημερώνονται αυτόματα από το σύστημα της ΗΔΙΚΑ. Εάν κάποιο πιστοποιητικό εμφανίζεται
            σε κόκκινο χρώμα, παρακαλούμε επικοινωνήστε με τον γιατρό σας.)
          </Typography>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              marginTop: '10px',
            }}
          >
            <Button variant="outlined" size="small" sx={browseButtonStyle}>
              Πιστοποιητικό Παθολόγου / Γενικού Γιατρού
            </Button>
            <Button variant="contained" size="small" sx={browseButtonStyle}>
              Πιστοποιητικό Δερματολόγου
            </Button>
            <Button variant="outlined" size="small" sx={browseButtonStyle}>
              Πιστοποιητικό Ψυχικής Υγείας
            </Button>
          </div>
        </div>

        {/* Navigation Buttons using plain HTML buttons with inline styling */}
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
          <button style={navButtonStyle} onClick={handleNext}>
            <b>Επόμενο Βήμα</b>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
