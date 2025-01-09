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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import Header from '../components/ProfessionalNavigation';
import Footer from '../components/Footer';

export default function DimiourgiaProfileProfessional2() {
  const steps = ['Προσωπικά Στοιχεία', 'Πιστοποιητικά', 'Βιογραφικό Σημείωμα'];

  const handlePrev = () => {
    // e.g., navigate back to step 1
    alert('Going back to Step 1...');
  };

  const handleNext = () => {
    // e.g., navigate to step 3
    alert('Going to Step 3...');
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

        {/* Stepper (step 1 is active) */}
        <Stepper activeStep={1} alternativeLabel sx={{ mb: 4 }}>
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
            ΠΙΣΤΟΠΟΙΗΤΙΚΑ
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Education */}
            <TextField
              label="Επίπεδο Εκπαίδευσης"
              placeholder="π.χ. Πτυχίο ΕΠΑΛ πώς: 'Βοηθός Βρεφοκομικών'"
              size="small"
            />

            {/* PDF Upload fields */}
            <Typography variant="body2">Πιστοποίηση Εκπαίδευσης (.pdf):</Typography>
            <Button variant="outlined" component="label">
              Browse
              <input hidden type="file" accept=".pdf" />
            </Button>

            <Typography variant="body2">Πιστοποίηση Πρώτων Βοηθειών (.pdf):</Typography>
            <Button variant="outlined" component="label">
              Browse
              <input hidden type="file" accept=".pdf" />
            </Button>

            {/* Health certificates info */}
            <Typography variant="body1" sx={{ mt: 2 }}>
              Πιστοποιητικά Υγείας:
            </Typography>
            <Typography variant="body2">
              (Ενημερώνονται αυτόματα από το σύστημα της ΗΔΙΚΑ. Εάν κάποιο πιστοποιητικό
              εμφανίζεται σε κόκκινο χρώμα, παρακαλούμε επικοινωνήστε με τον γιατρό σας.)
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
              <Button variant="outlined">Πιστοποιητικό Παθολόγου / Γενικού Γιατρού</Button>
              <Button variant="contained" color="error">
                Πιστοποιητικό Δερματολόγου
              </Button>
              <Button variant="outlined">Πιστοποιητικό Ψυχικής Υγείας</Button>
            </Box>

            {/* Foreign language knowledge */}
            <Box sx={{ mt: 2 }}>
              <FormControl size="small" fullWidth>
                <InputLabel>Γνώση Ξένης Γλώσσας 1</InputLabel>
                <Select defaultValue="" label="Γνώση Ξένης Γλώσσας 1">
                  <MenuItem value="english">ΑΓΓΛΙΚΑ</MenuItem>
                  <MenuItem value="french">ΓΑΛΛΙΚΑ</MenuItem>
                  <MenuItem value="german">ΓΕΡΜΑΝΙΚΑ</MenuItem>
                  {/* ... */}
                </Select>
              </FormControl>

              <Typography variant="body2" sx={{ mt: 1 }}>
                Πιστοποίηση Γλωσσομάθειας 1 (.pdf):
              </Typography>
              <Button variant="outlined" component="label">
                Browse
                <input hidden type="file" accept=".pdf" />
              </Button>

              <Button variant="outlined" sx={{ mt: 2 }}>
                Προσθήκη Ξένης Γλώσσας +
              </Button>
            </Box>

            {/* Sign language */}
            <FormControlLabel
              control={<Checkbox />}
              label="Γνώση Νοηματικής Γλώσσας"
            />
            <Typography variant="body2">Πιστοποίηση Γνώσης Νοηματικής (.pdf):</Typography>
            <Button variant="outlined" component="label">
              Browse
              <input hidden type="file" accept=".pdf" />
            </Button>

            {/* Add more certs */}
            <Button variant="outlined" sx={{ mt: 2 }}>
              Προσθήκη Επιπλέον Πιστοποιητικού +
            </Button>
          </Box>

          {/* Prev / Next buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={handlePrev}>
              Προηγούμενο Βήμα
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#013372', color: 'white', fontWeight: 'bold' }}
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
