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
import './HealthVerifications.css';
import ProgressTracker from '../components/ProgressTrackerCreateProfile';
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
    cursor: 'pointer',
  };

  //Μεταβλητές για αν υπάρχουν ή όχι τα πιστοποιητικά υγείας
  const userGenHealthVerification = false;
  const userDermatologyVerification = false;
  const userMentalHealthVerification = false;

  return (
    <div>
      {/* Progress Tracker with current step set to 2 */}
      <ProgressTracker currentStep={2} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h2>

        <Typography style={{fontWeight: 'bold', marginBottom: '20px'}} variant="body2" sx={labelStyle}>
          Επίπεδο Εκπαίδευσης:
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Education Level Field */}
          <TextField style={{backgroundColor: '#fff', borderRadius: '5px'}}
            label="Επίπεδο Εκπαίδευσης"
            placeholder="π.χ. Πτυχίο ΕΠΑΛ πώς: 'Βοηθός Βρεφοκομικών'"
            size="small"
            fullWidth
          />

          {/* PDF Upload fields for Education */}
          <Typography style={{fontWeight: 'bold', marginTop: '30px'}} variant="body2" sx={labelStyle}>
            Πιστοποίηση Εκπαίδευσης (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>

          <Typography style={{fontWeight: 'bold', marginTop: '30px'}} variant="body2" sx={labelStyle}>
            Πιστοποίηση Πρώτων Βοηθειών (.pdf):
          </Typography>
          <Button variant="outlined" component="label" size="small" sx={browseButtonStyle}>
            Browse
            <input hidden type="file" accept=".pdf" />
          </Button>

          {/* Health Certificates Information */}
          <Typography style={{fontWeight: 'bold'}} variant="body1" sx={{ ...labelStyle, mt: 2 }}>
            Πιστοποιητικά Υγείας:
          </Typography>
          <Typography variant="body2" sx={labelStyle}>
            (Ενημερώνονται αυτόματα από το σύστημα της ΗΔΙΚΑ. Εάν κάποιο πιστοποιητικό εμφανίζεται
            σε κόκκινο χρώμα, παρακαλούμε επικοινωνήστε με τον γιατρό σας.)
          </Typography>


          <div className="healthVerificationsProfessionalCreateProfile">
            <p className={userGenHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Παθολόγου / Γενικού Γιατρού</p>
            <p className={userDermatologyVerification ? "valid" : "invalid"}>Πιστοποιητικό Δερματολόγου</p>
            <p className={userMentalHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Ψυχικής Υγείας</p>
          </div>
          {/* <div
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
          </div> */}
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
