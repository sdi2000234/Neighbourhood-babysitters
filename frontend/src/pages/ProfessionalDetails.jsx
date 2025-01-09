import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Header from '../components/Header_starter'; // Adjust path as needed
import Footer from '../components/Footer';          // Adjust path as needed

const ProfessionalDetails = () => {
  // Get the 'professional' object from state:
  //   { name, rating, reviews, age, area, exp } 
  //   as passed from FindProfessionalUnconnected.jsx
  const { state: professional } = useLocation();

  // If no professional was passed, show a fallback message
  if (!professional) {
    return (
      <Box>
        <Header />
        <Box sx={{ p: 2, minHeight: '60vh' }}>
          <Typography>Δεν βρέθηκαν πληροφορίες για τον επαγγελματία.</Typography>
        </Box>
        <Footer />
      </Box>
    );
  }

  // Example schedule data 
  // (You can adapt this to come from `professional`, 
  //  or keep it static as a demonstration.)
  const schedule = [
    { time: '06:00 - 09:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '09:00 - 12:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '12:00 - 15:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '15:00 - 18:00', mon: true,  tue: true,  wed: true,  thu: false, fri: true,  sat: false, sun: false },
    { time: '18:00 - 21:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: true,  sun: false },
    { time: '21:00 - 06:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Paper sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, mb: 4 }}>
          {/* Title / Name / Area */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            {/* Name & Area from the object */}
            {professional.name}, {professional.area}
          </Typography>

          {/* Placeholder Photo */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <img
              src="https://via.placeholder.com/600x300?text=Professional+Photo"
              alt="Professional placeholder"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>

          {/* A short description or rating info */}
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            Αξιολογήσεις: {professional.rating} ⭐ ({professional.reviews} αξιολογήσεις)
          </Typography>

          {/* Grid with some details */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Ηλικία</Typography>
              <Typography>{professional.age}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Εμπειρία</Typography>
              <Typography>{professional.exp} χρόνια</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Περιοχή</Typography>
              <Typography>{professional.area}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Τελευταία ενημέρωση</Typography>
              <Typography>Σήμερα</Typography>
            </Grid>
          </Grid>

          <Button variant="contained" color="primary">
            Εγγραφή
          </Button>
        </Paper>

        {/* Services (static example) */}
        <Paper sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Υπηρεσίες
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label="Σιδέρωμα ρούχων"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
            />
            <Chip
              label="Καθαρισμός σπιτιού"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
            />
            <Chip
              label="Δουλειές γύρω από το παιδί"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
            />
          </Box>
        </Paper>

        {/* Schedule (static example) */}
        <Paper sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Πρόγραμμα
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Ώρα</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Δευ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Τρι.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Τετ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Πέμ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Παρα.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Σάβ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Κυρ.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.mon ? '✓' : ''}</TableCell>
                    <TableCell>{row.tue ? '✓' : ''}</TableCell>
                    <TableCell>{row.wed ? '✓' : ''}</TableCell>
                    <TableCell>{row.thu ? '✓' : ''}</TableCell>
                    <TableCell>{row.fri ? '✓' : ''}</TableCell>
                    <TableCell>{row.sat ? '✓' : ''}</TableCell>
                    <TableCell>{row.sun ? '✓' : ''}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ProfessionalDetails;
