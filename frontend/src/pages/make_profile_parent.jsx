// src/pages/ProfilePersonal.js

import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Import your existing header and footer
import Header from '../components/Header_starter';
import Footer from '../components/Footer';

export default function ProfilePersonal() {
  // State for all the form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    yearOfBirth: '',
    gender: '',
    idNumber: '',
    afm: '',
    amka: '',
    doy: '',
    phone: '',
    email: '',
    region: '',
    area: '',
    street: '',
    streetNumber: '',
    zipCode: '',
    profileImage: null, // If you want to keep image upload logic
  });

  // Handle text changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload (currently not displayed, but stored in state)
  const handleImageUpload = (event) => {
    const file = event.target.files[0] || null;
    setFormData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  // Simulate "Αποθήκευση" action
  const handleSave = () => {
    // In a real app, you'd POST this data to your backend
    alert('Τα προσωπικά στοιχεία αποθηκεύτηκαν!');
  };

  return (
    <Box>
      {/* Top navigation (blue bar) */}

      {/* Main Content */}
      <Container sx={{ my: 4 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}
        >
          ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ
        </Typography>

        {/* The form in a centered Paper */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            mx: 'auto',
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', fontWeight: 'bold', mb: 3 }}
          >
            ΤΟ ΠΡΟΦΙΛ ΜΟΥ
          </Typography>

          {/* Placeholder icon / Upload */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            }}
          >
            {/* Large user icon as placeholder */}
            <AccountCircleIcon sx={{ fontSize: 80, color: '#888' }} />

            <Button
              variant="outlined"
              component="label"
              sx={{ mt: 1, textTransform: 'none' }}
            >
              Προσθήκη Εικόνας
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageUpload}
              />
            </Button>
          </Box>

          {/* Form fields */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Όνομα"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Επώνυμο"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Πατρώνυμο"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Μητρώνυμο"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Έτος Γέννησης"
              name="yearOfBirth"
              value={formData.yearOfBirth}
              onChange={handleChange}
              size="small"
            />
            <FormControl size="small">
              <InputLabel>Φύλο</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Φύλο"
              >
                <MenuItem value="male">Άνδρας</MenuItem>
                <MenuItem value="female">Γυναίκα</MenuItem>
                <MenuItem value="other">Άλλο</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Αριθμός Ταυτοπ. Εγγράφου"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
              name="afm"
              value={formData.afm}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="AMKA"
              name="amka"
              value={formData.amka}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)"
              name="doy"
              value={formData.doy}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Τηλέφωνο"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Ηλεκτρονικό Ταχυδρομείο"
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
            />

            <TextField
              label="Νομός"
              name="region"
              value={formData.region}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Περιοχή"
              name="area"
              value={formData.area}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Οδός"
              name="street"
              value={formData.street}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Αριθμός"
              name="streetNumber"
              value={formData.streetNumber}
              onChange={handleChange}
              size="small"
            />
            <TextField
              label="Τ.Κ."
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              size="small"
            />
          </Box>

          {/* Action Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#013372',
                fontWeight: 'bold',
                color: 'white',
              }}
              onClick={handleSave}
            >
              Αποθήκευση
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Bottom area (footer) */}
      <Footer />
    </Box>
  );
}
