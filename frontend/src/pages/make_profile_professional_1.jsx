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
import { useNavigate } from 'react-router-dom';
import ProgressTracker from '../components/ProgressTrackerCreateProfile';
import Footer from '../components/Footer';
import './make_profile_parent.css';

export default function ProfileProfessional() {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  const navigate = useNavigate();

  // Merge both sets of state
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
    // Optionally add extra fields from the professional version,
    // such as cohabitation details if needed.
    cohabitants: false,
    adultsCount: '',
    minorsCount: '',
  });

  // For image upload we’ll convert the file to a base64 string for preview/registration
  const [profileImage, setProfileImage] = useState(null); // holds the base64 string
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadMsg, setUploadMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Optional checkbox state from the professional version:
  const [isChecked, setIsChecked] = useState(false);

  // If the user data should be pre-loaded from Firestore
  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          // If the saved data includes an image or cohabitant info, update state
          setFormData((prev) => ({ ...prev, ...data }));
          if (data.profileImage) {
            setImagePreview(data.profileImage);
            setProfileImage(data.profileImage);
          }
          if (data.cohabitants) {
            setIsChecked(true);
          }
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

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setFormData((prev) => ({
      ...prev,
      cohabitants: checked,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Optionally limit size (1 MB) and file types
      if (file.size > 1024 * 1024) {
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

      // Convert image to base64 so we can preview and save it
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

  const handleSave = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!userId) {
      alert('You must be logged in to save your profile.');
      return;
    }
    setLoading(true);
    try {
      const docRef = doc(db, 'users', userId);
      // Include the profile image in the data payload.
      await setDoc(
        docRef,
        {
          ...formData,
          profileImage: profileImage,
          email: auth.currentUser.email,
        },
        { merge: true }
      );
      alert('Τα προσωπικά στοιχεία αποθηκεύτηκαν!');
      // If you have a multi-step process, you might navigate to the next step:
      navigate('/profesionaleditstep2');
      // Otherwise, navigate to a dashboard or confirmation page:
     
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Υπήρξε σφάλμα κατά την αποθήκευση.');
    } finally {
      setLoading(false);
    }
  };

  // Styles for the save button
  const saveButtonStyle = {
    backgroundColor: '#013372',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 16px',
  };

  return (
    <Box>
      {/* Optional progress tracker if needed */}
      <ProgressTracker currentStep={1} />

      <div className="personInfo1">
        <h1>ΔΗΜΙΟΥΡΓΙΑ ΠΡΟΦΙΛ</h1>

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
            {/* Standard personal fields */}
            <TextField required placeholder="Όνομα" name="firstName" label="Όνομα" value={formData.firstName} onChange={handleChange} size="small" />
            <TextField required placeholder="Επώνυμο" name="lastName" label="Επώνυμο" value={formData.lastName} onChange={handleChange} size="small" />
            <TextField required placeholder="Πατρώνυμο" name="fatherName" label="Πατρώνυμο" value={formData.fatherName} onChange={handleChange} size="small" />
            <TextField required placeholder="Μητρώνυμο" name="motherName" label="Μητρώνυμο" value={formData.motherName} onChange={handleChange} size="small" />
            <TextField
              required
              placeholder="Έτος Γέννησης"
              name="yearOfBirth"
              label="Έτος Γέννησης"
              value={formData.yearOfBirth}
              onChange={handleChange}
              size="small"
              type="number"
              inputProps={{ min: new Date().getFullYear() - 120, max: new Date().getFullYear() - 17 }}
            />
            <FormControl required size="small">
              <InputLabel>Φύλο</InputLabel>
              <Select name="gender" value={formData.gender} onChange={handleChange} label="Φύλο">
                <MenuItem value="Άνδρας">Άνδρας</MenuItem>
                <MenuItem value="Γυναίκα">Γυναίκα</MenuItem>
                <MenuItem value="Άλλο">Άλλο</MenuItem>
              </Select>
            </FormControl>
            <TextField required placeholder="Αριθμός Ταυτοπ. Εγγράφου" name="idNumber" label="Αριθμός Ταυτοπ. Εγγράφου" value={formData.idNumber} onChange={handleChange} size="small" />
            <TextField
              required
              placeholder="Αριθμός Φορολογικού Μητρώου (ΑΦΜ)"
              name="afm"
              label="ΑΦΜ"
              value={formData.afm}
              onChange={handleChange}
              size="small"
              type="number"
            />
            <TextField required placeholder="AMKA" name="amka" label="AMKA" value={formData.amka} onChange={handleChange} size="small" type="number"/>
            <TextField required placeholder="Δημόσια Οικονομική Υπηρεσία (ΔΟΥ)" name="doy" label="ΔΟΥ" value={formData.doy} onChange={handleChange} size="small" />
            <TextField required placeholder="Τηλέφωνο" name="phone" label="Τηλέφωνο" value={formData.phone} onChange={handleChange} size="small" type="number"/>
            <TextField required placeholder="Ηλεκτρονικό Ταχυδρομείο" name="email" label="Ηλεκτρονικό Ταχυδρομείο" value={formData.email} onChange={handleChange} size="small" type="email" />
            <TextField required placeholder="Νομός" name="region" label="Νομός" value={formData.region} onChange={handleChange} size="small" />
            <TextField required placeholder="Περιοχή" name="area" label="Περιοχή" value={formData.area} onChange={handleChange} size="small" />
            <TextField required placeholder="Οδός" name="street" label="Οδός" value={formData.street} onChange={handleChange} size="small" />
            <TextField required placeholder="Αριθμός" name="streetNumber" label="Αριθμός" value={formData.streetNumber} onChange={handleChange} size="small" type="number"/>
            <TextField
              required
              placeholder="Τ.Κ."
              name="zipCode"
              label="Ταχυδρομικός Κώδικας"
              value={formData.zipCode}
              onChange={handleChange}
              size="small"
              inputProps={{
                pattern: '[0-9]{5}',
                title: 'Ο ταχυδρομικός κωδικός πρέπει να έχει 5 αριθμούς',
              }}
            />

            {/* Optional cohabitant checkbox and extra fields */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <input
                style={{ marginRight: '15px', width: '18px' }}
                type="checkbox"
                id="cohabitants"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#373737' }}>
                Μπορείτε να διαθέσετε τον χώρο σας για τη φύλαξη του παιδιού;
              </Typography>
            </div>
            {isChecked && (
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <TextField
                  label="Ενήλικες"
                  name="adultsCount"
                  value={formData.adultsCount}
                  onChange={handleChange}
                  size="small"
                  type="number"
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
                <TextField
                  label="Ανήλικοι"
                  name="minorsCount"
                  value={formData.minorsCount}
                  onChange={handleChange}
                  size="small"
                  type="number"
                  required
                  sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <Button type="submit" sx={saveButtonStyle} disabled={loading}>
              {loading ? 'Αποθήκευση...' : 'Επόμενο Βήμα'}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </Box>
  );
}
