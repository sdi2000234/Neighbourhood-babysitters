// src/pages/ProfilePersonal.js

import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Header from '../components/Header_starter';
import Footer from '../components/Footer';
import ProgressTracker_CreateProfile from '../components/ProgressTracker_CreateProfile';

export default function ProfilePersonal() {
  // State for form fields
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
  });

  // State for handling image upload and its preview
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');

  // Handle text changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload: accept only PNG or JPG files.
  const handleImageUpload = (event) => {
    const file = event.target.files[0] || null;
    if (file) {
      // Check file type (allow only PNG and JPEG)
      if (!['image/png', 'image/jpeg'].includes(file.type)) {
        setProfileImage(null);
        setImagePreview(null);
        setUploadMsg('Παρακαλώ επιλέξτε εικόνα τύπου PNG ή JPG.');
        return;
      }
      // If file is allowed, save it and show preview.
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
      setUploadMsg('Η εικόνα ελήφθη επιτυχώς!');
    } else {
      setProfileImage(null);
      setImagePreview(null);
      setUploadMsg('');
    }
  };

  // Simulate save action
  const handleSave = () => {
    alert('Τα προσωπικά στοιχεία αποθηκεύτηκαν!');
  };

  // Inline style for the Save button (matching your primary colour)
  const saveButtonStyle = {
    backgroundColor: '#013372',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 16px',
  };

  return (
    <Box>
     

      {/* Progress Tracker with current step set to 1 */}
      <ProgressTracker_CreateProfile currentStep={1} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h2>

        {/* Profile Image Upload Section */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          {/* Display preview if available; otherwise, a placeholder icon */}
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
            />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 80, color: '#888' }} />
          )}

          <Button
            variant="outlined"
            component="label"
            sx={{
              mt: 1,
              textTransform: 'none',
              backgroundColor: '#013372',
              color: 'white',
              borderColor: '#013372',
              '&:hover': {
                backgroundColor: '#013372',
                color: 'white',
              },
            }}
          >
            Προσθήκη Εικόνας
            <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
          </Button>
          {/* Notification message */}
          {uploadMsg && (
            <Typography variant="body2" sx={{ mt: 1, color: uploadMsg.includes('ελήφθη') ? 'green' : 'red' }}>
              {uploadMsg}
            </Typography>
          )}
        </div>

        {/* Form Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TextField label="Όνομα" name="firstName" value={formData.firstName} onChange={handleChange} size="small" />
          <TextField label="Επώνυμο" name="lastName" value={formData.lastName} onChange={handleChange} size="small" />
          <TextField label="Πατρώνυμο" name="fatherName" value={formData.fatherName} onChange={handleChange} size="small" />
          <TextField label="Μητρώνυμο" name="motherName" value={formData.motherName} onChange={handleChange} size="small" />
          <TextField label="Έτος Γέννησης" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange} size="small" />
          <FormControl size="small">
            <InputLabel>Φύλο</InputLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange} label="Φύλο">
              <MenuItem value="male">Άνδρας</MenuItem>
              <MenuItem value="female">Γυναίκα</MenuItem>
              <MenuItem value="other">Άλλο</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Αριθμός Ταυτοπ. Εγγράφου" name="idNumber" value={formData.idNumber} onChange={handleChange} size="small" />
          <TextField label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)" name="afm" value={formData.afm} onChange={handleChange} size="small" />
          <TextField label="AMKA" name="amka" value={formData.amka} onChange={handleChange} size="small" />
          <TextField label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)" name="doy" value={formData.doy} onChange={handleChange} size="small" />
          <TextField label="Τηλέφωνο" name="phone" value={formData.phone} onChange={handleChange} size="small" />
          <TextField label="Ηλεκτρονικό Ταχυδρομείο" name="email" value={formData.email} onChange={handleChange} size="small" />
          <TextField label="Νομός" name="region" value={formData.region} onChange={handleChange} size="small" />
          <TextField label="Περιοχή" name="area" value={formData.area} onChange={handleChange} size="small" />
          <TextField label="Οδός" name="street" value={formData.street} onChange={handleChange} size="small" />
          <TextField label="Αριθμός" name="streetNumber" value={formData.streetNumber} onChange={handleChange} size="small" />
          <TextField label="Τ.Κ." name="zipCode" value={formData.zipCode} onChange={handleChange} size="small" />
        </div>

        {/* Save Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button variant="contained" sx={saveButtonStyle} onClick={handleSave}>
            Αποθήκευση
          </Button>
        </div>
      </div>

      <Footer />
    </Box>
  );
}
