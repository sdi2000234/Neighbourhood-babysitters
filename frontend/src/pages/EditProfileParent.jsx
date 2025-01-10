import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  Checkbox,
} from '@mui/material';
import Header from '../components/Header_connected'; // Header Component
import Footer from '../components/Footer'; // Footer Component

const Page5 = () => {
  return (
    <Box>
      {/* Header */}

      {/* Main Container */}
      <Container sx={{ mt: 4, mb: 4 }}>
        {/* Breadcrumbs */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          Ρυθμίσεις
        </Typography>

        {/* Section 1: Change Email */}
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            mb: 2,
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Αλλαγή E-mail πρόσβασης
          </Typography>
          <TextField label="Τρέχον Email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Νέο Email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Επιβεβαίωση" fullWidth sx={{ mb: 2 }} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#013372', // Yale Blue
              color: 'white',
              '&:hover': { backgroundColor: '#002855' }, // Darker Yale Blue on hover
            }}
          >
            Αποθήκευση
          </Button>
        </Box>

        {/* Section 2: Change Password */}
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            mb: 2,
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Αλλαγή Συνθηματικού (password)
          </Typography>
          <TextField label="Τρέχον Συνθηματικό" fullWidth sx={{ mb: 2 }} />
          <TextField label="Νέο Συνθηματικό" fullWidth sx={{ mb: 2 }} />
          <TextField label="Επιβεβαίωση Συνθηματικού" fullWidth sx={{ mb: 2 }} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#013372', // Yale Blue
              color: 'white',
              '&:hover': { backgroundColor: '#002855' }, // Darker Yale Blue on hover
            }}
          >
            Αποθήκευση
          </Button>
        </Box>

        {/* Section 3: Deactivate Keeper Role */}
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            mb: 2,
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Απενεργοποίηση ιδιότητας keeper
          </Typography>
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Checkbox />
            <Typography variant="body2">Δεν θέλω να είμαι keeper</Typography>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#013372', // Yale Blue
              color: 'white',
              '&:hover': { backgroundColor: '#002855' }, // Darker Yale Blue on hover
            }}
          >
            Αποθήκευση
          </Button>
        </Box>

        {/* Section 4: Notifications and Data Preferences */}
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            mb: 2,
            borderRadius: '4px',
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Προτιμήσεις ενημερώσεων - Προσωπικά Δεδομένα
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#013372', // Yale Blue
              color: 'white',
              '&:hover': { backgroundColor: '#002855' }, // Darker Yale Blue on hover
            }}
          >
            Προτιμήσεις ενημερώσεων
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Page5;
