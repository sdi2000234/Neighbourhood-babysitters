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

export default function DimiourgiaProfileProfessional1() {
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Navigate to the next step if all required fields are valid
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

        <form onSubmit={handleNext}>
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
            <TextField label="Όνομα" size="small" fullWidth required />
            <TextField label="Επώνυμο" size="small" fullWidth required />
            <TextField label="Πατρώνυμο" size="small" fullWidth required />
            <TextField label="Μητρώνυμο" size="small" fullWidth required />
            <TextField
              label="Έτος Γέννησης"
              size="small"
              fullWidth
              required
              type="number"
              inputProps={{ min: 1900, max: new Date().getFullYear() }}
            />

            <FormControl size="small" fullWidth required>
              <InputLabel>Φύλο</InputLabel>
              <Select label="Φύλο" defaultValue="">
                <MenuItem value="male">Άνδρας</MenuItem>
                <MenuItem value="female">Γυναίκα</MenuItem>
                <MenuItem value="other">Άλλο</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Αριθμός Ταυτοπ. Εγγράφου" size="small" fullWidth required />
            <TextField
              label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
              size="small"
              fullWidth
              required
            />
            <TextField label="AMKA" size="small" fullWidth required />
            <TextField
              label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)"
              size="small"
              fullWidth
              required
            />
            <TextField label="Τηλέφωνο" size="small" fullWidth required />
            <TextField
              label="Ηλεκτρονικό Ταχυδρομείο"
              size="small"
              fullWidth
              required
              type="email"
            />

            <TextField label="Νομός" size="small" fullWidth required />
            <TextField label="Περιοχή" size="small" fullWidth required />
            <TextField label="Οδός" size="small" fullWidth required />
            <TextField label="Αριθμός" size="small" fullWidth required />
            <TextField label="Τ.Κ." size="small" fullWidth required />

            <div style={{ display: 'flex', gap: '20px' }}>
              <TextField label="Ενήλικες" size="small" fullWidth required type="number" />
              <TextField label="Ανήλικοι" size="small" fullWidth required type="number" />
            </div>
          </div>

          <div className="options1" style={{ marginTop: '30px', textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#013372',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Επόμενο Βήμα
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
