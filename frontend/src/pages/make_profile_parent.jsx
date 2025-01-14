import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust to your Firebase configuration file
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import Footer from '../components/Footer';

export default function ProfilePersonal() {
  const auth = getAuth();
  const userId = auth.currentUser?.uid; // Dynamically fetch user ID from Firebase Authentication
  const navigate = useNavigate(); // Initialize useNavigate for redirection

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

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0] || null;
    if (file) {
      if (!['image/png', 'image/jpeg'].includes(file.type)) {
        setProfileImage(null);
        setImagePreview(null);
        setUploadMsg('Παρακαλώ επιλέξτε εικόνα τύπου PNG ή JPG.');
        return;
      }
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
      setUploadMsg('Η εικόνα ελήφθη επιτυχώς!');
    } else {
      setProfileImage(null);
      setImagePreview(null);
      setUploadMsg('');
    }
  };

  const handleSave = async () => {
    if (!userId) {
      alert('You must be logged in to save your profile.');
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, 'users', userId);
      await setDoc(docRef, { ...formData, email: auth.currentUser.email }, { merge: true });
      alert('Τα προσωπικά στοιχεία αποθηκεύτηκαν!');
      navigate('/dashboard'); // Redirect to /dashboard after saving
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Υπήρξε σφάλμα κατά την αποθήκευση.');
    } finally {
      setLoading(false);
    }
  };

  const saveButtonStyle = {
    backgroundColor: '#013372',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 16px',
  };

  return (
    <Box>
      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
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
          {uploadMsg && (
            <Typography variant="body2" sx={{ mt: 1, color: uploadMsg.includes('ελήφθη') ? 'green' : 'red' }}>
              {uploadMsg}
            </Typography>
          )}
        </div>

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

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button variant="contained" sx={saveButtonStyle} onClick={handleSave} disabled={loading}>
            {loading ? 'Αποθήκευση...' : 'Αποθήκευση'}
          </Button>
        </div>
      </div>

      <Footer />
    </Box>
  );
}
