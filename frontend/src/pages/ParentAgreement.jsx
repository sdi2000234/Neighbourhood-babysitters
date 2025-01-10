import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import Header from '../components/Header_unconnected';
import Footer from '../components/Footer';

const Page3 = () => {
  return (
    <Box>
      <Container sx={{ mt: 4 }}>
        <Typography variant="body2" gutterBottom>
          Έχετε συνδεθεί ως Γονέας/Κηδεμόνας. | <a href="#/">Σύνδεση ως Επαγγελματίας</a>
        </Typography>

        <Typography variant="h6" gutterBottom>Τρέχον Συμφωνητικό:</Typography>
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="body1"><strong>Π/η:</strong> Αγγελική Χριστοπούλου</Typography>
          <Typography variant="body1"><strong>ΕΝΑΡΞΗ:</strong> 01/09/2024</Typography>
          <Typography variant="body1"><strong>ΛΗΞΗ:</strong> 28/02/2025</Typography>
          <Typography variant="body1"><strong>ΠΟΣΟ ΠΛΗΡΩΜΗΣ:</strong> 500,00 €</Typography>
          <Typography variant="body1"><strong>ΤΡΕΧΟΥΣΑ ΠΛΗΡΩΜΗ:</strong> Μη Ολοκληρωμένη</Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button variant="outlined">ΔΙΑΧΕΙΡΙΣΗ</Button>
            <Button variant="outlined">ΠΛΗΡΩΜΗ</Button>
          </Box>
        </Paper>

        <Typography variant="h6" gutterBottom>Ημερολόγιο:</Typography>
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="body1">Νοέμβριος</Typography>
          {/* A placeholder for the calendar - customize as needed */}
          <Typography variant="body2">[Calendar Placeholder]</Typography>
        </Paper>

        <Typography variant="h6" gutterBottom>Συχνές Ερωτήσεις:</Typography>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1"><strong>Ε:</strong> Ποιοι έχουν δικαίωμα συμμετοχής...</Typography>
          <Typography variant="body2"><strong>Α:</strong> ... κείμενο ...</Typography>
        </Paper>

      </Container>
      <Footer />
    </Box>
  );
};

export default Page3;
