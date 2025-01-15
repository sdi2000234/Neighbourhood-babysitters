import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import ProgressTracker from '../components/ProgressTrackerCreateProfile';
import Footer from '../components/Footer';

import { getAuth } from 'firebase/auth';

export default function DimiourgiaProfileProfessional1() {
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Navigate to the next step if all required fields are valid
    navigate('/profesionaleditstep2'); // Replace with your actual route
  };

  const auth = getAuth(); // Initialize Firebase Auth
  const user = auth.currentUser; // Get the current user

  // State for form data
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
    email: '', // This will be auto-filled from Firebase
    region: '',
    area: '',
    street: '',
    streetNumber: '',
    zipCode: '',
    adults: '',
    minors: '',
  });

  useEffect(() => {
    // Populate email field if user is logged in
    if (user) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  // State to track checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // State for image upload and preview
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');

  // Handle checkbox toggle
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) { // Restrict size to 1 MB
        setProfileImage(null);
        setImagePreview(null);
        setUploadMsg('Το μέγεθος της εικόνας δεν πρέπει να ξεπερνά το 1 MB.');
        return;
      }

      if (!['image/png', 'image/jpeg'].includes(file.type)) {
        setProfileImage(null);
        setImagePreview(null);
        setUploadMsg('Παρακαλώ επιλέξτε εικόνα τύπου PNG ή JPG.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        setImagePreview(base64Image);
        setUploadMsg('Η εικόνα ελήφθη επιτυχώς!');
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
      setImagePreview(null);
      setUploadMsg('');
    }
  };

  return (
    <div>
      {/* Progress Tracker at the top */}
      <ProgressTracker currentStep={1} />

      {/* Main content styled similar to file2 */}
      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h2>

        <form onSubmit={handleNext}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <Typography variant="body2" sx={{ color: '#888' }}>Προεπισκόπηση Εικόνας</Typography>
            )}
            <Button
              variant="outlined"
              component="label"
              sx={{
                mt: 1,
                backgroundColor: '#013372',
                color: 'white',
                textTransform: 'none',
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

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Όνομα" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Επώνυμο" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Πατρώνυμο" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Μητρώνυμο" size="small" fullWidth required />
            <TextField
              style={{ backgroundColor: '#fff', borderRadius: '5px' }}
              label="Έτος Γέννησης"
              size="small"
              fullWidth
              required
              type="number"
              inputProps={{ min: 1900, max: new Date().getFullYear() }}
            />

            <FormControl size="small" fullWidth required>
              <InputLabel>Φύλο</InputLabel>
              <Select style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Φύλο" defaultValue="">
                <MenuItem value="male">Άνδρας</MenuItem>
                <MenuItem value="female">Γυναίκα</MenuItem>
                <MenuItem value="other">Άλλο</MenuItem>
              </Select>
            </FormControl>

            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Αριθμός Ταυτοπ. Εγγράφου" size="small" fullWidth required />
            <TextField
              style={{ backgroundColor: '#fff', borderRadius: '5px' }}
              label="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
              size="small"
              fullWidth
              required
              type='number'
            />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="AMKA" size="small" fullWidth required type='number'/>
            <TextField
              style={{ backgroundColor: '#fff', borderRadius: '5px' }}
              label="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)"
              size="small"
              fullWidth
              required
            />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Τηλέφωνο" size="small" fullWidth required type='number'/>
            <TextField required label="Ηλεκτρονικό Ταχυδρομείο" value={formData.email} size="small" type='email'   style={{ backgroundColor: '#fff', borderRadius: '5px' }}/>
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Νομός" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Περιοχή" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Οδός" size="small" fullWidth required />
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Αριθμός" size="small" fullWidth required type='number'/>
            <TextField style={{ backgroundColor: '#fff', borderRadius: '5px' }} label="Τ.Κ." size="small" fullWidth required 
            inputProps={{
              pattern: '[0-9]{5}',  
              title: 'Ο ταχυδρομικός κωδικός πρέπει να έχει 5 αριθμούς'
            }}
            />

            <div>
              <div style={{ display: 'flex' }}>
                <input
                  style={{ marginRight: '15px', width: '18px', marginTop: '20px' }}
                  type="checkbox"
                  id='cohabitants'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p style={{ fontWeight: 'bold', color: '#373737', marginTop: '20px' }}>
                  Μπορείτε να διαθέσετε τον χώρο σας για τη φύλαξη του παιδιού;
                </p>
              </div>
              {isChecked && (
                <div>
                  <p
                    style={{ fontWeight: 'bold', color: '#737373', marginTop: '20px', marginBottom: '10px' }}
                  >
                    Πλήθος ατόμων που κατοικούν στον χώρο σας:
                  </p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <TextField
                      style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                      label="Ενήλικες"
                      size="small"
                      fullWidth
                      required
                      type="number"
                    />
                    <TextField
                      style={{ backgroundColor: '#fff', borderRadius: '5px' }}
                      label="Ανήλικοι"
                      size="small"
                      fullWidth
                      required
                      type="number"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="options1" style={{ marginTop: '30px', textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#013372',
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'none',
              }}
            >
              Επόμενο Βήμα
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
