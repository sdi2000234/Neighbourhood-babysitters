import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import Header from '../components/Header_unconnected';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const SubmissionConfirmation = () => {
  const navigate = useNavigate();

  // Redirect function
  const handleRedirect = () => {
    navigate('/requests'); // Replace with your actual route
  };

  return (
    <Box>
      {/* Header */}

      {/* Main Container */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: '8px',
            backgroundColor: '#f0f0f0', // Light grey background
            textAlign: 'center',
            maxWidth: 600,
            margin: 'auto',
          }}
        >
          {/* Message */}
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              color: '#333', // Dark grey text
              fontSize: '16px',
              fontWeight: '500',
            }}
          >
            Η Αίτηση έχει υποβληθεί οριστικά. Παρακαλώ αναμένετε την αποδοχή ή απόρριψή της από την/τον επαγγελματία.
          </Typography>

          {/* Redirect Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004080', // Dark blue button
              color: 'white',
              '&:hover': { backgroundColor: '#003366' },
              padding: '10px 20px',
              textTransform: 'none',
              borderRadius: '8px', // Rounded button corners
            }}
            onClick={handleRedirect}
          >
            Μεταφορά στη σελίδα "Αιτήσεις"
          </Button>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default SubmissionConfirmation;
