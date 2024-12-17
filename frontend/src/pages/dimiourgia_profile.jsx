import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
} from '@mui/material';
import Header from '../components/Header_connected'; // Updated to match Header
import Footer from '../components/Footer';

const Page2 = () => {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Main Container */}
      <Container sx={{ mt: 4 }}>
        {/* Breadcrumbs */}
        <Typography variant="body2" gutterBottom>
          Έχετε συνδεθεί ως Γονέας/Κηδεμόνας. |{' '}
          <a href="#/" style={{ textDecoration: 'none', color: '#004080' }}>
            Σύνδεση ως Επαγγελματίας
          </a>
        </Typography>

        {/* Page Title */}
        <Typography variant="h5" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
          ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ
        </Typography>

        {/* Profile Picture Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          <Avatar
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              mb: 1,
              backgroundColor: '#f0f0f0',
              fontWeight: 'bold',
              fontSize: 24,
              color: '#555',
            }}
          >
            Pfp
          </Avatar>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#004080', color: 'white', '&:hover': { backgroundColor: '#003366' } }}
          >
            Προσθήκη Εικόνας
          </Button>
        </Box>

        {/* Form Section */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 2,
            maxWidth: 400,
            margin: '0 auto',
          }}
        >
          <TextField label="Όνομα" />
          <TextField label="Επώνυμο" />
          <TextField label="Πατρώνυμο" />
          <TextField label="Μητρώνυμο" />
          <TextField label="Έτος Γέννησης" type="number" />

          <FormControl>
            <InputLabel>Φύλο</InputLabel>
            <Select label="Φύλο">
              <MenuItem value="Γυναίκα">Γυναίκα</MenuItem>
              <MenuItem value="Άνδρας">Άνδρας</MenuItem>
              <MenuItem value="Άλλο">Άλλο</MenuItem>
            </Select>
          </FormControl>

          <TextField label="Αριθμός Ταυτότητας" />
          <TextField label="ΑΦΜ" />
          <TextField label="ΑΜΚΑ" />
          <TextField label="ΔΟΥ" />
          <TextField label="Τηλέφωνο" />
          <TextField label="Ηλεκτρονικό Ταχυδρομείο" type="email" />
          <TextField label="Νομός" />
          <TextField label="Περιοχή" />
          <TextField label="Οδός" />
          <TextField label="Αριθμός" />
          <TextField label="Τ.Κ." />

          {/* Save Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004080',
              color: 'white',
              '&:hover': { backgroundColor: '#003366' },
            }}
          >
            Αποθήκευση
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Page2;
