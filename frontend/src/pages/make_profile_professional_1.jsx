import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import ProgressTracker from '../components/ProgressTrackerCreateProfile';
import Footer from '../components/Footer';
// import Header from '../components/ProfessionalNavigation'; // if you want to include this

export default function DimiourgiaProfileProfessional1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/profesionaleditstep2'); // Replace with your actual route
  };

  return (
    <div>
      {/* Progress Tracker at the top */}
      <ProgressTracker currentStep={1} />

      {/* Main content styled similar to file2 */}
      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h2>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Button variant="outlined">Προσθήκη Εικόνας</Button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <TextField label="Όνομα" size="small" fullWidth />
          <TextField label="Επώνυμο" size="small" fullWidth />
          <TextField label="Πατρώνυμο" size="small" fullWidth />
          <TextField label="Μητρώνυμο" size="small" fullWidth />
          <TextField label="Έτος Γέννησης" size="small" fullWidth />

          <FormControl size="small" fullWidth>
            <InputLabel>Φύλο</InputLabel>
            <Select label="Φύλο" defaultValue="">
              <MenuItem value="male">Άνδρας</MenuItem>
              <MenuItem value="female">Γυναίκα</MenuItem>
              <MenuItem value="other">Άλλο</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Αριθμός Ταυτοπ. Εγγράφου" size="small" fullWidth />
          <TextField
            label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
            size="small"
            fullWidth
          />
          <TextField label="AMKA" size="small" fullWidth />
          <TextField
            label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)"
            size="small"
            fullWidth
          />
          <TextField label="Τηλέφωνο" size="small" fullWidth />
          <TextField label="Ηλεκτρονικό Ταχυδρομείο" size="small" fullWidth />

          <TextField label="Νομός" size="small" fullWidth />
          <TextField label="Περιοχή" size="small" fullWidth />
          <TextField label="Οδός" size="small" fullWidth />
          <TextField label="Αριθμός" size="small" fullWidth />
          <TextField label="Τ.Κ." size="small" fullWidth />

          <div style={{ display: 'flex', gap: '20px' }}>
            <TextField label="Ενήλικες" size="small" fullWidth />
            <TextField label="Ανήλικοι" size="small" fullWidth />
          </div>
        </div>

        <div className="options1">
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              backgroundColor: '#013372',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Επόμενο Βήμα
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
