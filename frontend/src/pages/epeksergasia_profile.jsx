import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from '@mui/material';
import Header from '../components/Header_connected';
import Footer from '../components/Footer';

const Page5 = () => {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Main Container */}
      <Container sx={{ mt: 4 }}>
        {/* Breadcrumbs */}
        <Typography variant="body2" gutterBottom>
          ΠΡΟΦΙΛ &gt; ΕΠΕΞΕΡΓΑΣΙΑ ΠΡΟΦΙΛ
        </Typography>

        {/* Profile Section */}
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
            sx={{ width: 120, height: 120, mb: 1, backgroundColor: '#f0f0f0' }} // Circular Avatar
          >
            Pfp
          </Avatar>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#004080', color: 'white' }}>
            Αλλαγή Εικόνας
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
          <TextField label="E-mail" />
          <TextField label="Νομός" />
          <TextField label="Περιοχή" />
          <TextField label="Οδός" />
          <TextField label="Αριθμός" />
          <TextField label="Τ.Κ." />

          {/* Save Button */}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#004080', color: 'white', '&:hover': { backgroundColor: '#003366' } }}
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

export default Page5;
