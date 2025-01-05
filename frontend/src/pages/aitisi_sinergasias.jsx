import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import Header from '../components/Header_unconnected';
import Footer from '../components/Footer';

const Page6 = () => {
  const [selectedOption, setSelectedOption] = useState('homeParent'); // State to track selected option

  // Generate time slots and days
  const hours = Array.from({ length: 14 }, (_, i) => `${8 + i}:00`);
  const days = ['ΔΕΥ', 'ΤΡΙ', 'ΤΕΤ', 'ΠΕΜ', 'ΠΑΡ', 'ΣΑΒ', 'ΚΥΡ'];

  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ ΜΕ: Εύη Κωστοπούλου
          </Typography>

          {/* Form */}
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Όνομα" />
            <TextField label="Επώνυμο" />
            <TextField label="Τηλέφωνο" />
            <TextField label="Ηλεκτρονικό Ταχυδρομείο" />
            <TextField label="Ηλικία Παιδιού (σε μήνες)" type="number" />
            <TextField label="Έναρξη Συνεργασίας" type="date" InputLabelProps={{ shrink: true }} />
            <TextField label="Λήξη Συνεργασίας" type="date" InputLabelProps={{ shrink: true }} />

            <Divider sx={{ my: 3 }} />

            {/* Availability Section */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Διαθεσιμότητα
            </Typography>
            <Table sx={{ border: '1px solid #ddd', borderRadius: '8px' }}>
              <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Ώρες</TableCell>
                  {days.map((day) => (
                    <TableCell key={day} sx={{ fontWeight: 'bold' }}>
                      {day}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {hours.map((hour) => (
                  <TableRow key={hour} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell>{hour}</TableCell>
                    {days.map((day) => (
                      <TableCell key={`${hour}-${day}`}>
                        <Checkbox defaultChecked={day === 'ΤΕΤ'} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Divider sx={{ my: 3 }} />

            {/* Area Selection */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Περιοχή Φύλαξης
            </Typography>
            <RadioGroup
              row
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)} // Handle selection change
            >
              <FormControlLabel value="homeParent" control={<Radio />} label="Φύλαξη στο σπίτι του Γονέα" />
              <FormControlLabel value="homeProfessional" control={<Radio />} label="Φύλαξη στο σπίτι του Επαγγελματία" />
            </RadioGroup>

            {/* Address Field - Show only when "homeProfessional" is selected */}
            {selectedOption === 'homeProfessional' && (
              <TextField label="Διεύθυνση, Περιοχή, ΤΚ" />
            )}

            <Divider sx={{ my: 3 }} />

            {/* Message Section */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Μήνυμα προς επαγγελματία (προαιρετικό)
            </Typography>
            <TextField label="Μήνυμα" multiline rows={4} />

            <Divider sx={{ my: 3 }} />

            {/* Confirmation Checkbox */}
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  Δηλώνω Επιθυμία Συνεργασίας και Υπογραφή Ιδιωτικού Συμφωνητικού
                </Typography>
              }
            />

            {/* Notice */}
            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
              ΠΡΟΣΟΧΗ: Εάν πατήσετε "Οριστική Υποβολή" θα προχωρήσετε στη σύναψη συμφωνητικού με τον επαγγελματία.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined">Ακύρωση</Button>
              <Button variant="outlined">Προσωρινή Αποθήκευση</Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#004080',
                  color: 'white',
                  '&:hover': { backgroundColor: '#003366' },
                }}
              >
                Οριστική Υποβολή
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page6;
