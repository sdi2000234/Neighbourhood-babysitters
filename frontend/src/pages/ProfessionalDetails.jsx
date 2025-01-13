import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from '../components/Footer'; // Adjust path as needed

const ProfessionalDetails = ({ professional }) => {
  // Ensure the professional data is available
  if (!professional) {
    return (
      <Box sx={{ p: 2, minHeight: '60vh' }}>
        <Typography variant="h5">Δεν βρέθηκαν πληροφορίες για τον επαγγελματία.</Typography>
        <Footer />
      </Box>
    );
  }

  const schedule = [
    { time: '08:00 - 09:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '09:00 - 12:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '12:00 - 15:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    { time: '15:00 - 18:00', mon: true, tue: true, wed: true, thu: false, fri: true, sat: false, sun: false },
    { time: '18:00 - 21:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: true, sun: false },
    { time: '21:00 - 06:00', mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
        {/* Professional Details Section */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
            mb: 4,
            bgcolor: '#DCEEFB',
            color: '#003366',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            {professional.name}, {professional.area}
          </Typography>

          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <CardMedia
              component="img"
              alt="Professional photo"
              height="200"
              image="https://via.placeholder.com/600x300?text=Professional+Photo"
              sx={{ borderRadius: 2, boxShadow: 2 }}
            />
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Αξιολογήσεις: {professional.rating} ⭐ ({professional.reviews} αξιολογήσεις)
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Ηλικία</Typography>
              <Typography>{professional.age}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Εμπειρία</Typography>
              <Typography>{professional.exp} χρόνια</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Περιοχή</Typography>
              <Typography>{professional.area}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography sx={{ fontWeight: 'bold' }}>Τελευταία ενημέρωση</Typography>
              <Typography>Σήμερα</Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Services Section */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
            mb: 4,
            bgcolor: '#DCEEFB',
            color: '#003366',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Υπηρεσίες
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Chip
              label="Σιδέρωμα ρούχων"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
              sx={{ fontWeight: 'bold', borderColor: '#003366', color: '#003366' }}
            />
            <Chip
              label="Καθαρισμός σπιτιού"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
              sx={{ fontWeight: 'bold', borderColor: '#003366', color: '#003366' }}
            />
            <Chip
              label="Δουλειές γύρω από το παιδί"
              color="success"
              icon={<CheckCircleIcon />}
              variant="outlined"
              sx={{ fontWeight: 'bold', borderColor: '#003366', color: '#003366' }}
            />
          </Box>
        </Paper>

        {/* Schedule Section */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
            bgcolor: '#F8F3EB',
            color: '#003366',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Πρόγραμμα
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 2, bgcolor: '#DCEEFB' }}>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#003366' }}>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Ώρα</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Δευ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Τρι.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Τετ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Πέμ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Παρα.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Σάβ.</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#ffffff' }}>Κυρ.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#EAF6FF' : '#DCEEFB',
                      '&:hover': { backgroundColor: '#CCE7FF' },
                    }}
                  >
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

    </Box>
  );
};

export default ProfessionalDetails;
