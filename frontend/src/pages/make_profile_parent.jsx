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
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './make_profile_parent.css';
import Footer from '../components/Footer';

export default function ProfilePersonal() {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

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
    kidsAge: '',
    careLocation: 'homeOfProfessional',
    careArea: '',
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

  const handleSave = async (event) => {
    event.preventDefault();

    if (!userId) {
      alert('You must be logged in to save your profile.');
      return;
    }

    // Ορισμός του careArea ανάλογα με την επιλογή του χρήστη
    const updatedCareArea = formData.careLocation === 'homeOfProfessional'
      ? 'Σπίτι Επαγγελματία'
      : formData.careArea || formData.area;

    setLoading(true);
    try {
      const docRef = doc(db, 'users', userId);
      await setDoc(docRef, { ...formData, careArea: updatedCareArea, email: auth.currentUser.email }, { merge: true });
      alert('Τα προσωπικά στοιχεία αποθηκεύτηκαν!');
      navigate('/dashboard');
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
        <h1>ΔΗΜΙΟΥΡΓΙΑ/ΕΠΕΞΕΡΓΑΣΙΑ ΠΡΟΦΙΛ</h1>
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

        <form onSubmit={handleSave}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Όνομα*</p>
            <TextField className='makeproftext' required placeholder="Όνομα" name="firstName" value={formData.firstName} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Επώνυμο*</p>
            <TextField className='makeproftext' required placeholder="Επώνυμο" name="lastName" value={formData.lastName} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Πατρώνυμο*</p>
            <TextField className='makeproftext' required placeholder="Πατρώνυμο" name="fatherName" value={formData.fatherName} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Μητρώνυμο*</p>
            <TextField className='makeproftext' required placeholder="Μητρώνυμο" name="motherName" value={formData.motherName} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Έτος Γέννησης*</p>
            <TextField className='makeproftext' required placeholder="Έτος Γέννησης" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange} size="small" type="number" inputProps={{ min: new Date().getFullYear() - 120, max: new Date().getFullYear() - 17 }} />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Επιλέξτε Φύλο*</p>
            <FormControl required size="small">
              <InputLabel>Φύλο</InputLabel>
              <Select className='makeproftext' name="gender" value={formData.gender} onChange={handleChange} label="Φύλο">
                <MenuItem value="male">Άνδρας</MenuItem>
                <MenuItem value="female">Γυναίκα</MenuItem>
                <MenuItem value="other">Άλλο</MenuItem>
              </Select>
            </FormControl>
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Αριθμός Ταυτοπ. Εγγράφου*</p>
            <TextField className='makeproftext' required placeholder="Αριθμός Ταυτοπ. Εγγράφου" name="idNumber" value={formData.idNumber} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Αριθμός Φορολογικού Μητρώου (ΑΦΜ)*</p>
            <TextField className='makeproftext' required placeholder="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)" name="afm" value={formData.afm} onChange={handleChange} size="small" type="number" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>ΑΜΚΑ*</p>
            <TextField className='makeproftext' required placeholder="AMKA" name="amka" value={formData.amka} onChange={handleChange} size="small" type="number"/>
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)*</p>
            <TextField className='makeproftext' required placeholder="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)" name="doy" value={formData.doy} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Τηλέφωνο*</p>
            <TextField className='makeproftext' required placeholder="Τηλέφωνο" name="phone" value={formData.phone} onChange={handleChange} size="small" type="number"/>
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Ηλεκτρονικό Ταχυδρομείο*</p>
            <TextField className='makeproftext' required placeholder="Ηλεκτρονικό Ταχυδρομείο" name="email" value={formData.email} onChange={handleChange} size="small" type='email' />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Νομός*</p>
            <TextField className='makeproftext' required placeholder="Νομός" name="region" value={formData.region} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Περιοχή*</p>
            <TextField className='makeproftext' required placeholder="Περιοχή" name="area" value={formData.area} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Οδός*</p>
            <TextField className='makeproftext' required placeholder="Οδός" name="street" value={formData.street} onChange={handleChange} size="small" />
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Αριθμός*</p>
            <TextField className='makeproftext' required placeholder="Αριθμός" name="streetNumber" value={formData.streetNumber} onChange={handleChange} size="small" type='number'/>
            <p style={{ fontWeight: 'bold', color: '#373737' }}>Ταχυδρομικός Κώδικας*</p>
            <TextField className='makeproftext' required placeholder="Τ.Κ." name="zipCode" value={formData.zipCode} onChange={handleChange} size="small" inputProps={{
              pattern: '[0-9]{5}',  
              title: 'Ο ταχυδρομικός κωδικός πρέπει να έχει 5 αριθμούς'
            }}/>
            <TextField className='makeproftext' required label="Ηλικία Παιδιού προς φύλαξη" name="kidsAge" value={formData.kidsAge} onChange={handleChange} size="small"/>

            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Περιοχή Φύλαξης
              </Typography>
              <RadioGroup
                name="careLocation"
                value={formData.careLocation}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="homeOfProfessional"
                  control={<Radio />}
                  label="Σπίτι Επαγγελματία"
                  sx={{ marginRight: 2 }}
                />
                <FormControlLabel
                  value="homeOfParent"
                  control={<Radio />}
                  label="Σπίτι Γονέα/Κηδεμόνα"
                />
              </RadioGroup>
            </FormControl>

            {formData.careLocation === 'homeOfParent' && (
              <TextField
                className='makeproftext'
                required
                label="Περιοχή Φύλαξης"
                name="careArea"
                value={formData.careArea || formData.area}
                onChange={handleChange}
                size="small"
              />
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <Button type="submit" sx={saveButtonStyle} disabled={loading}>
              {loading ? 'Αποθήκευση...' : 'Αποθήκευση'}
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </Box>
  );
}
