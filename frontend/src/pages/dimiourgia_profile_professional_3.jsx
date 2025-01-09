import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

import Header from '../components/ProfessionalNavigation';
import Footer from '../components/Footer';

export default function DimiourgiaProfileProfessional3() {
  const steps = ['Προσωπικά Στοιχεία', 'Πιστοποιητικά', 'Βιογραφικό Σημείωμα'];

  const handlePrev = () => {
    // e.g., navigate back to step 2
    alert('Going back to Step 2...');
  };

  const handleCompleteProfile = () => {
    // e.g., finalize or submit
    alert('Ολοκλήρωση Δημιουργίας Προφίλ!');
  };

  return (
    <Box>
      <Header />

      <Container sx={{ my: 4 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}
        >
          ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ
        </Typography>

        {/* Stepper (step 2 is active) */}
        <Stepper activeStep={2} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

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
            ΒΙΟΓΡΑΦΙΚΟ
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Short Intro */}
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Σύντομη Αυτοπαρουσίαση: (εμφανίζεται στην σελίδα αναζήτησης - εύρεσης επαγγελματιών)
            </Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Λίγα λόγια για εσάς..."
            />

            {/* Longer bio text (placeholder) */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos...
            </Typography>

            {/* PDF Upload */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Επισύναψη Βιογραφικού Σημειώματος (.pdf):
            </Typography>
            <Button variant="outlined" component="label">
              Browse
              <input hidden type="file" accept=".pdf" />
            </Button>

            {/* Additional docs */}
            <Button variant="outlined" sx={{ mt: 2 }}>
              Προσθήκη Επιπλέον Εγγράφων +
            </Button>
          </Box>

          {/* Prev / Complete buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={handlePrev}>
              Προηγούμενο Βήμα
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#013372', color: 'white', fontWeight: 'bold' }}
              onClick={handleCompleteProfile}
            >
              Ολοκλήρωση Δημιουργίας Προφίλ
            </Button>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}
