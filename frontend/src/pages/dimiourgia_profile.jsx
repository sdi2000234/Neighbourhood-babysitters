import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Avatar,
} from '@mui/material';
import Header from '../components/Header_unconnected'; // Header
import Footer from '../components/Footer'; // Footer

const Page2 = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    dou: '',
    idNumber: '',
    afm: '',
    amka: '',
    phone: '',
    email: '',
    nomos: '',
    perioxh: '',
    odos: '',
    arithmos: '',
    tk: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    fatherName: false,
    motherName: false,
    dou: false,
    afm: false,
    amka: false,
    phone: false,
  });

  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');

  // Generate years dynamically from 1900 to 2025
  const years = Array.from({ length: 2025 - 1900 + 1 }, (_, i) => 1900 + i);

  // Validation function - only letters allowed
  const validateLetters = (name, value) => {
    const onlyLetters = /^[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώΏΆΈΉΊΌΎΏ]*$/; // Allows Greek and Latin letters
    return onlyLetters.test(value);
  };

  // Validation function - only numbers allowed
  const validateNumbers = (value) => {
    const onlyNumbers = /^[0-9]*$/; // Allows only digits
    return onlyNumbers.test(value);
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate input for letter-only fields
    if (['firstName', 'lastName', 'fatherName', 'motherName', 'dou'].includes(name)) {
      setErrors((prev) => ({ ...prev, [name]: !validateLetters(name, value) }));
    }

    // Validate input for number-only fields
    if (['afm', 'amka', 'phone'].includes(name)) {
      setErrors((prev) => ({ ...prev, [name]: !validateNumbers(value) }));
    }
  };

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
            ΔΗΜΙΟΥΡΓΙΑ ΛΟΓΑΡΙΑΣΜΟΥ
          </Typography>

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
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Name Fields */}
            <TextField label="Όνομα" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} helperText={errors.firstName ? 'Επιτρέπονται μόνο γράμματα.' : ''} />
            <TextField label="Επώνυμο" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} helperText={errors.lastName ? 'Επιτρέπονται μόνο γράμματα.' : ''} />
            <TextField label="Πατρώνυμο" name="fatherName" value={formData.fatherName} onChange={handleChange} error={errors.fatherName} helperText={errors.fatherName ? 'Επιτρέπονται μόνο γράμματα.' : ''} />
            <TextField label="Μητρώνυμο" name="motherName" value={formData.motherName} onChange={handleChange} error={errors.motherName} helperText={errors.motherName ? 'Επιτρέπονται μόνο γράμματα.' : ''} />
            <TextField label="ΔΟΥ" name="dou" value={formData.dou} onChange={handleChange} error={errors.dou} helperText={errors.dou ? 'Επιτρέπονται μόνο γράμματα.' : ''} />

            {/* Year Dropdown */}
            <TextField select label="Έτος Γέννησης" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} fullWidth SelectProps={{ MenuProps: { PaperProps: { style: { maxHeight: 224 } } } }}>
              {years.map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </TextField>

            {/* Gender Dropdown */}
            <TextField select label="Φύλο" value={gender} onChange={(e) => setGender(e.target.value)} fullWidth>
              <MenuItem value="Γυναίκα">Γυναίκα</MenuItem>
              <MenuItem value="Άνδρας">Άνδρας</MenuItem>
              <MenuItem value="Άλλο">Άλλο</MenuItem>
            </TextField>

            {/* Number-only fields */}
            <TextField label="ΑΦΜ" name="afm" value={formData.afm} onChange={handleChange} error={errors.afm} helperText={errors.afm ? 'Επιτρέπονται μόνο αριθμοί.' : ''} />
            <TextField label="ΑΜΚΑ" name="amka" value={formData.amka} onChange={handleChange} error={errors.amka} helperText={errors.amka ? 'Επιτρέπονται μόνο αριθμοί.' : ''} />
            <TextField label="Τηλέφωνο" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} helperText={errors.phone ? 'Επιτρέπονται μόνο αριθμοί.' : ''} />
{/* Address Section */}
<Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
  Κατοικία:
</Typography>
<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
  {/* Νομός */}
  <TextField
    label="Νομός"
    name="nomos"
    value={formData.nomos}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, nomos: value }));
      setErrors((prev) => ({ ...prev, nomos: !/^[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώΏΆΈΉΊΌΎΏ]*$/.test(value) }));
    }}
    error={errors.nomos}
    helperText={errors.nomos ? 'Επιτρέπονται μόνο γράμματα.' : ''}
  />

  {/* Περιοχή */}
  <TextField
    label="Περιοχή"
    name="perioxh"
    value={formData.perioxh}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, perioxh: value }));
      setErrors((prev) => ({ ...prev, perioxh: !/^[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώΏΆΈΉΊΌΎΏ]*$/.test(value) }));
    }}
    error={errors.perioxh}
    helperText={errors.perioxh ? 'Επιτρέπονται μόνο γράμματα.' : ''}
  />
</Box>

<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
  {/* Οδός */}
  <TextField
    label="Οδός"
    name="odos"
    value={formData.odos}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, odos: value }));
      setErrors((prev) => ({ ...prev, odos: !/^[A-Za-zΑ-Ωα-ωίϊΐόάέύϋΰήώΏΆΈΉΊΌΎΏ]*$/.test(value) }));
    }}
    error={errors.odos}
    helperText={errors.odos ? 'Επιτρέπονται μόνο γράμματα.' : ''}
  />

  {/* Αριθμός */}
  <TextField
    label="Αριθμός"
    name="arithmos"
    value={formData.arithmos}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, arithmos: value }));
      setErrors((prev) => ({ ...prev, arithmos: !/^[0-9]*$/.test(value) }));
    }}
    error={errors.arithmos}
    helperText={errors.arithmos ? 'Επιτρέπονται μόνο αριθμοί.' : ''}
  />

  {/* Τ.Κ. */}
  <TextField
    label="Τ.Κ."
    name="tk"
    value={formData.tk}
    onChange={(e) => {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, tk: value }));
      setErrors((prev) => ({ ...prev, tk: !/^[0-9]*$/.test(value) }));
    }}
    error={errors.tk}
    helperText={errors.tk ? 'Επιτρέπονται μόνο αριθμοί.' : ''}
  />
</Box>

            <Button variant="contained" sx={{ backgroundColor: '#004080', color: 'white', mt: 2, '&:hover': { backgroundColor: '#003366' } }}>Αποθήκευση</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page2;
