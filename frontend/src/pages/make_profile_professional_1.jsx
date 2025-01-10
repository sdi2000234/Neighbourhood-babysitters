import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

import Header from '../components/ProfessionalNavigation';
import Footer from '../components/Footer';

export default function DimiourgiaProfileProfessional1() {
  // Steps for the top Stepper
  const steps = ['Προσωπικά Στοιχεία', 'Πιστοποιητικά', 'Βιογραφικό Σημείωμα'];

  // Placeholder "handleNext" to go to step 2
  const handleNext = () => {
    // e.g., navigate to /dimiourgia_profile_professional_2
    // or do however you handle routing
    alert('Going to Step 2...');
  };

  return (
    <Box>

      <Container sx={{ my: 4 }}>
        {/* Top Title */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}
        >
          ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ
        </Typography>

        {/* Stepper (step 0 is active) */}
        <Stepper activeStep={0} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Paper with form fields */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            mx: 'auto',
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}
          >
            ΤΟ ΠΡΟΦΙΛ ΜΟΥ
          </Typography>

          {/* Example "Προσθήκη Εικόνας" (dummy) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Button variant="outlined">Προσθήκη Εικόνας</Button>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Personal Info Fields */}
            <TextField label="Όνομα" size="small" />
            <TextField label="Επώνυμο" size="small" />
            <TextField label="Πατρώνυμο" size="small" />
            <TextField label="Μητρώνυμο" size="small" />
            <TextField label="Έτος Γέννησης" size="small" />
            <FormControl size="small">
              <InputLabel>Φύλο</InputLabel>
              <Select label="Φύλο" defaultValue="">
                <MenuItem value="male">Άνδρας</MenuItem>
                <MenuItem value="female">Γυναίκα</MenuItem>
                <MenuItem value="other">Άλλο</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Αριθμός Ταυτοπ. Εγγράφου" size="small" />
            <TextField
              label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
              size="small"
            />
            <TextField label="AMKA" size="small" />
            <TextField
              label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)"
              size="small"
            />
            <TextField label="Τηλέφωνο" size="small" />
            <TextField label="Ηλεκτρονικό Ταχυδρομείο" size="small" />

            {/* Address */}
            <TextField label="Νομός" size="small" />
            <TextField label="Περιοχή" size="small" />
            <TextField label="Οδός" size="small" />
            <TextField label="Αριθμός" size="small" />
            <TextField label="Τ.Κ." size="small" />

            {/* Example: Πλήθος Συγκατοίκων / Ενήλικες / Ανήλικοι (if needed) */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Ενήλικες" size="small" />
              <TextField label="Ανήλικοι" size="small" />
            </Box>
          </Box>

          {/* Next Step Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#013372',
                fontWeight: 'bold',
                color: 'white',
              }}
              onClick={handleNext}
            >
              Επόμενο Βήμα
            </Button>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}
