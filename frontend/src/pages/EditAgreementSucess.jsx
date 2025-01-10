import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import HeaderConnected from '../components/Header_connected';
import Footer from '../components/Footer';

const Page7 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Header */}

      {/* Main Content */}
      <Container sx={{ flexGrow: 1, mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Έχετε συνδεθεί ως Γονέας/Κηδεμόνας.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#004080', color: 'white' }}>
            Σύνδεση ως Επαγγελματίας
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Η Αίτηση έχει υποβληθεί οριστικά.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Παρακαλώ αναμείνετε την αποδοχή ή απόρριψή της από την/τον επαγγελματία.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#333', color: 'white' }}>
            Μεταφορά στη σελίδα "Αιτήσεις"
          </Button>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Page7;
