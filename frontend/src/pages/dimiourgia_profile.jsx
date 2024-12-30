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
import Header from '../components/Header_unconnected'; // Keep the same header
import Footer from '../components/Footer'; // Keep the same footer

const Page2 = () => {
  return (
    <Box>
      {/* Header */}
      <Header />

      {/* Main Container */}
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        {/* Profile Form Box */}
        <Box
          sx={{
            width: 400,
            padding: 3,
            borderRadius: '8px',
            backgroundColor: '#f0f0f0',
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
ΔΗΜΙΟΥΡΓΙΑ ΛΟΓΑΡΙΑΣΜΟΥ          </Typography>

          {/* Profile Picture Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Avatar
              alt="Profile Picture"
              sx={{
                width: 80,
                height: 80,
                mb: 1,
                backgroundColor: '#e0e0e0',
                fontWeight: 'bold',
                fontSize: 24,
                color: '#555',
              }}
            >
              {/* Icon placeholder */}
              <i className="fas fa-user"></i>
            </Avatar>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#004080',
                  color: 'white',
                  '&:hover': { backgroundColor: '#003366' },
                }}
              >
                Προσθήκη Εικόνας
              </Button>
              <Typography variant="body2" sx={{ color: 'black' }}>
                (.png, .jpg)
              </Typography>
            </Box>
          </Box>

          {/* Form Fields */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField label="Όνομα" />
            <TextField label="Επώνυμο" />
            <TextField label="Πατρώνυμο" />
            <TextField label="Μητρώνυμο" />

            <FormControl>
              <InputLabel>Έτος Γέννησης</InputLabel>
              <Select>
                <MenuItem value="1994">1994</MenuItem>
                <MenuItem value="1995">1995</MenuItem>
                <MenuItem value="1996">1996</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel>Φύλο</InputLabel>
              <Select>
                <MenuItem value="Γυναίκα">Γυναίκα</MenuItem>
                <MenuItem value="Άνδρας">Άνδρας</MenuItem>
                <MenuItem value="Άλλο">Άλλο</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Αριθμός Ταυτότητας" />
            <TextField label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)" />
            <TextField label="ΑΜΚΑ" />
            <TextField label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)" />
            <TextField label="Τηλέφωνο" />
            <TextField label="Ηλεκτρονικό Ταχυδρομείο" />
{/* Address Section */}
<Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
  Κατοικία:
</Typography>

<Box sx={{ display: 'flex', gap: 2 }}>
  <TextField label="Νομός" sx={{ flex: 1 }} />
  <TextField label="Περιοχή" sx={{ flex: 1 }} />
</Box>

<Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
  <TextField label="Οδός" sx={{ flex: 2 }} />
  <TextField label="Αριθμός" sx={{ flex: 1 }} />
  <TextField label="Τ.Κ." sx={{ flex: 1 }} />
</Box>


            {/* Save Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#004080',
                color: 'white',
                mt: 2,
                '&:hover': { backgroundColor: '#003366' },
              }}
            >
              Αποθήκευση
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Page2;
