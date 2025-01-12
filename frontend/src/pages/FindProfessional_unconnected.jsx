import React, { useEffect, useState } from 'react';
import {
Box,
Container,
Typography,
TextField,
Button,
Radio,
RadioGroup,
FormControlLabel,
Checkbox,
Grid,
Paper,
Divider,
MenuItem,
Select,
InputLabel,
FormControl,
Dialog,
DialogActions,
DialogContent,
DialogTitle,
} from '@mui/material';
import Footer from '../components/Footer';
import Pagination from '@mui/material/Pagination'; // (NEW) Pagination import
import { useNavigate, useLocation } from 'react-router-dom';


import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; // Make sure this file exports 'auth' and 'db'

import cake from '../assets/cake_black.png'
import location from '../assets/location_black.png'
import experience from '../assets/briefcase_black.png'

const FindProfessionalUnconnected = () => {

// --------- STATE ---------
const [favorites, setFavorites] = useState({});
const [selectedLanguage, setSelectedLanguage] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const professionalsPerPage = 9;
const navigate = useNavigate();

const [user, setUser] = useState(null);
const [isKeeper, setIsKeeper] = useState(false);

// --------- LANGUAGE OPTIONS (same as first snippet) ---------
const languages = [
  'Αγγλικά',
  'Γερμανικά',
  'Ολλανδικά',
  'Φλαμανδικά',
  'Αφρικάανς',
  'Δανικά',
  'Σουηδικά',
  'Νορβηγικά',
  'Ισλανδικά',
  'Φεροϊκά',
  'Ισπανικά',
  'Πορτογαλικά',
  'Γαλλικά',
  'Ιταλικά',
  'Ρουμανικά',
  'Καταλανικά',
  'Γαλικιανά',
  'Οξιτανικά',
  'Σαρδηνιακά',
  'Ρωσικά',
  'Πολωνικά',
  'Τσέχικα',
  'Σλοβάκικα',
  'Ουκρανικά',
  'Λευκορωσικά',
  'Σερβικά',
  'Κροατικά',
  'Βοσνιακά',
  'Σλοβενικά',
  'Βουλγαρικά',
  'Μακεδονικά',
  'Λετονικά',
  'Λιθουανικά',
  'Φινλανδικά',
  'Εσθονικά',
  'Ουγγρικά',
  'Ελληνικά',
  'Ουαλικά',
  'Αλβανικά',
  'Αρμενικά',
  'Γεωργιανά',
];

// --------- PROFESSIONALS (from second snippet / "ads") ---------
const professionals = [
  { name: 'Ελένη Μπούρου', rating: 4.5, reviews: 16, age: 36, area: 'Αμπελόκηποι', exp: 1 },
  { name: 'Βίκυ Ρούσση', rating: 4.0, reviews: 27, age: 41, area: 'Νέα Ιωνία', exp: 5 },
  { name: 'Αθηνά Καλομοίρα', rating: 3.5, reviews: 6, age: 22, area: 'Ζωγράφου', exp: 1 },
  { name: 'Ιωάννα Μακρή', rating: 5.0, reviews: 116, age: 39, area: 'Χαλάνδρι', exp: 6 },
  { name: 'Δώρα Τσουμαλίδου', rating: 4.0, reviews: 12, age: 64, area: 'Κορωπί', exp: 20 },
  { name: 'Άλεξ Στάθης', rating: 4.0, reviews: 9, age: 29, area: 'Γλυκά Νερά', exp: 2 },
  { name: 'Νίκος Θεοδώρου', rating: 3.5, reviews: 2, age: 55, area: 'Καλλιθέα', exp: 7 },
  { name: 'Μαρία Καλού', rating: 4.5, reviews: 20, age: 45, area: 'Περιστέρι', exp: 8 },
  { name: 'Γιώργος Παπαδόπουλος', rating: 4.0, reviews: 15, age: 35, area: 'Μαρούσι', exp: 4 },
  { name: 'Άννα Τσακίρη', rating: 5.0, reviews: 45, age: 40, area: 'Βριλήσσια', exp: 10 },
];

// --------- PAGINATION LOGIC (from second snippet) ---------
const totalPages = Math.ceil(professionals.length / professionalsPerPage);
const currentProfessionals = professionals.slice(
  (currentPage - 1) * professionalsPerPage,
  currentPage * professionalsPerPage
);
const handlePageChange = (event, value) => {
  setCurrentPage(value);
};


const [openModal, setOpenModal] = useState(false);
const [selectedProfessional, setSelectedProfessional] = useState(null);

const handleOpenModal = (professional) => {
  setSelectedProfessional(professional);
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
  setSelectedProfessional(null);
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      setIsKeeper(false);
    } else {
      setUser(firebaseUser);

      try {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setIsKeeper(!!data.isKeeper);
        } else {
          setIsKeeper(false);
        }
      } catch (error) {
        console.error("Error checking if user is keeper:", error);
        setIsKeeper(false);
      }
    }
  });

  return () => unsubscribe();
}, []);

// --------- BUTTON USE COMPONENT ---------
const ButtonUse = ({ action, children }) => {
  if (!user) {
    return (
      <Button
        variant="outlined"
        onClick={() => navigate('/login')}
        sx={{
          backgroundColor: '#fff',
          color: '#013372',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        {children}
      </Button>
    );
  }

  if (isKeeper) {
    return (
      <Button
        variant="outlined"
        disabled
        sx={{
          backgroundColor: '#fff',
          color: '#d3d3d3',
        }}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant="outlined"
      onClick={action}
      sx={{
        backgroundColor: '#fff',
        color: '#013372',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      {children}
    </Button>
  );
};

return (

  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

    {/* Main Content */}
    <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
      {/* Title */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ
      </Typography>

      {/* --------- FILTERS SECTION (from first snippet) --------- */}
      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: 2,
          p: 2,
          mb: 4,
        }}
      >
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Φίλτρα
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
        <TextField label="Περιοχή" size="small" sx={{ width: '200px' }} />
        <TextField label="Ηλικία Από" type="number" size="small" sx={{ width: '150px' }} />
        <TextField label="Ηλικία Έως" type="number" size="small" sx={{ width: '150px' }} />
        <TextField label="Έτη Εμπειρίας" size="small" sx={{ width: '150px' }} />

        {/* Dropdown for Languages */}
        <FormControl sx={{ width: '200px' }} size="small">
          <InputLabel id="language-label">Ξένη Γλώσσα</InputLabel>
          <Select
            labelId="language-label"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            label="Ξένη Γλώσσα"
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            {languages.map((lang, index) => (
              <MenuItem key={index} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Γνώση Νηπιακής Ψυχολογίας"
        />
        <FormControlLabel control={<Checkbox size="small" />} label="Γνώση Νοηματικής" />
      </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <RadioGroup row sx={{ flexGrow: 1 }}>
            <FormControlLabel value="full" control={<Radio size="small" />} label="Πλήρης Απασχόληση" />
            <FormControlLabel value="partial" control={<Radio size="small" />} label="Μερική Απασχόληση" />
          </RadioGroup>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004080',
              color: 'white',
              '&:hover': { backgroundColor: '#003366' },
            }}
          >
            ΑΝΑΖΗΤΗΣΗ
          </Button>
        </Box>
      </Box>

      {/* --------- PROFESSIONALS GRID (merged: using pagination & 'currentProfessionals') --------- */}
      <Grid container spacing={2}>
      {currentProfessionals.map((pro, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            sx={{
              p: 2,
              border: '1px solid #ddd',
              borderRadius: 2,
              position: 'relative',
              backgroundColor: '#013372', // Set the gray background color
              color: 'white', // Ensure text is readable
              display: 'flex',
              flexDirection: 'column'
            }}
          >
        

            {/* Card Content */}
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {pro.name}
            </Typography>
            
            <Typography variant="body2">
              ⭐ {pro.rating} ({pro.reviews} αξιολογήσεις)
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2"
              sx={
                {
                alignSelf: 'center',
                fontSize: 18,
                marginBottom: 1,
                marginTop: 5,
                } 
              }
            >
              <img src={cake} alt="age" style={{ width: '20px', height: 'auto', marginRight: 8 }} />
              Ηλικία: {pro.age}
            </Typography>
            <Typography variant="body2"
              sx={
                {
                alignSelf: 'center',
                fontSize: 18,
                marginBottom: 1
                } 
              }
            >
              <img src={location} alt="location" style={{ width: '20px', height: 'auto', marginRight: 8  }} />
              Περιοχή: {pro.area}</Typography>
            <Typography variant="body2"
            sx={
              {
                alignSelf: 'center',
                fontSize: 18,
                marginBottom: 1
              } 
              }
            >
              <img src={experience} alt="experience" style={{ width: '20px', height: 'auto', marginRight: 8  }} />
              Εμπειρία: {pro.exp} χρόνια</Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#737373', // Match your existing button color
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#d3d3d3',
                },
                margin: 6,
                marginBottom: 4,
              }}
              // onClick={() => handleOpenModal(pro)}
              onClick={() => navigate('/professional-details', { state: pro })}
            >
              ΠΛΗΡΟΦΟΡΙΕΣ
            </Button>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 , alignContent: 'center', justifyContent: 'center'}}>
              <ButtonUse action={() => navigate('/ParentAppointment')}>ΡΑΝΤΕΒΟΥ</ButtonUse>
              <ButtonUse action={() => navigate('/ParentContractRenew')}>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ</ButtonUse>
            </Box>
          </Paper>
        </Grid>
      ))}
      </Grid>


      {/* --------- PAGINATION (from second snippet) --------- */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
      />

    </Container>

    {/* Footer */}
    <Footer />

  </Box>
);
};

export default FindProfessionalUnconnected;
