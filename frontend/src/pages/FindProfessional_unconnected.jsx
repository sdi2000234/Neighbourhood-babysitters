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
  Modal,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import ProfessionalDetails from './ProfessionalDetails';
import Pagination from '@mui/material/Pagination';
import CloseIcon from '@mui/icons-material/Close';

import cake from '../assets/cake_black.png';
import location from '../assets/location_black.png';
import experience from '../assets/briefcase_black.png';

const FindProfessionalUnconnected = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const professionalsPerPage = 9;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isKeeper, setIsKeeper] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [ads, setAds] = useState([]);
  const [professionalsData, setProfessionalsData] = useState({});

  const languages = [
    'Αγγλικά', 'Γερμανικά', 'Ολλανδικά', 'Φλαμανδικά', 'Αφρικάανς', 'Δανικά',
    'Σουηδικά', 'Νορβηγικά', 'Ισλανδικά', 'Φεροϊκά', 'Ισπανικά', 'Πορτογαλικά',
    'Γαλλικά', 'Ιταλικά', 'Ρουμανικά', 'Καταλανικά', 'Γαλικιανά', 'Οξιτανικά',
    'Σαρδηνιακά', 'Ρωσικά', 'Πολωνικά', 'Τσέχικα', 'Σλοβάκικα', 'Ουκρανικά',
    'Λευκορωσικά', 'Σερβικά', 'Κροατικά', 'Βοσνιακά', 'Σλοβενικά', 'Βουλγαρικά',
    'Μακεδονικά', 'Λετονικά', 'Λιθουανικά', 'Φινλανδικά', 'Εσθονικά', 'Ουγγρικά',
    'Ελληνικά', 'Ουαλικά', 'Αλβανικά', 'Αρμενικά', 'Γεωργιανά',
  ];

  // Fetch ads from Firestore and load linked professional details
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'ads'));
        const adsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(adsList);

        // For each ad, fetch the corresponding professional details
        const professionalsMap = {};
        await Promise.all(
          adsList.map(async (ad) => {
            if (ad.userId) {
              const userDoc = await getDoc(doc(db, 'users', ad.userId));
              if (userDoc.exists()) {
                professionalsMap[ad.userId] = userDoc.data();
              }
            }
          })
        );
        setProfessionalsData(professionalsMap);
      } catch (error) {
        console.error('Error fetching ads or professionals:', error);
      }
    };

    fetchAds();
  }, []);

  // Listen for auth state to determine logged-in user and whether they’re a keeper (child care provider)
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
          console.error('Error checking if user is keeper:', error);
          setIsKeeper(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const totalPages = Math.ceil(ads.length / professionalsPerPage);
  const currentProfessionals = ads.slice(
    (currentPage - 1) * professionalsPerPage,
    currentPage * professionalsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleOpenModal = (professional) => {
    setSelectedProfessional(professional);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProfessional(null);
  };

  // A reusable component for buttons that may require login or different styling based on user role
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

  // When a parent clicks the "ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ" button,
  // create a notification document in Firestore for the professional.
  const handleSendCollaborationRequest = async (ad, proDetails) => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      const notificationData = {
        from: user.uid, // Parent's ID
        to: ad.userId, // Professional's ID (owner of the ad)
        adId: ad.id, // The advertisement ID
        type: 'collaborationRequest',
        timestamp: serverTimestamp(),
        status: 'pending',
        parentEmail: user.email,
        professionalName: `${proDetails.firstName} ${proDetails.lastName}`,
      };

      await addDoc(collection(db, 'notifications'), notificationData);
      alert('Η αίτηση συνεργασίας εστάλη!');
    } catch (error) {
      console.error('Error sending collaboration request:', error);
      alert('Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά αργότερα.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ
        </Typography>

        {/* Filters and search section */}
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

        {/* Professionals display section */}
        <Grid container spacing={2}>
          {currentProfessionals.map((pro) => {
            const professionalDetails = professionalsData[pro.userId] || {};
            return (
              <Grid item xs={12} sm={6} md={4} key={pro.id}>
                <Paper
                  sx={{
                    p: 2,
                    border: '1px solid #ddd',
                    borderRadius: 2,
                    position: 'relative',
                    backgroundColor: '#013372',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {professionalDetails.firstName} {professionalDetails.lastName}
                  </Typography>
                  <Typography variant="body2">
                    ⭐ {pro.rating} ({pro.reviews} αξιολογήσεις)
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{
                      alignSelf: 'center',
                      fontSize: 18,
                      marginBottom: 1,
                      marginTop: 3,
                    }}
                  >
                    <img
                      src={cake}
                      alt="age"
                      style={{ width: '20px', height: 'auto', marginRight: 8 }}
                    />
                    Ηλικία: {professionalDetails.yearOfBirth}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ alignSelf: 'center', fontSize: 18, marginBottom: 1 }}
                  >
                    <img
                      src={location}
                      alt="location"
                      style={{ width: '20px', height: 'auto', marginRight: 8 }}
                    />
                    Περιοχή: {professionalDetails.area}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      alignSelf: 'center',
                      fontSize: 18,
                      marginBottom: 1,
                      marginTop: 2,
                    }}
                  >
                    <img
                      src={experience}
                      alt="experience"
                      style={{ width: '20px', height: 'auto', marginRight: 8 }}
                    />
                    Εμπειρία: {professionalDetails.experience || 0} χρόνια
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#737373',
                      color: '#fff',
                      '&:hover': { backgroundColor: '#d3d3d3' },
                    }}
                    onClick={() => handleOpenModal(pro)}
                  >
                    ΠΛΗΡΟΦΟΡΙΕΣ
                  </Button>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      mt: 4,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ButtonUse
                      action={() =>
                        navigate('/ParentAppointment', {
                          state: {
                            ProfadId: pro.userId,
                            babysitterName: `${professionalDetails.firstName} ${professionalDetails.lastName}`,
                          },
                        })
                      }
                    >
                      ΡΑΝΤΕΒΟΥ
                    </ButtonUse>
                    <ButtonUse
                      action={() =>
                        handleSendCollaborationRequest(pro, professionalDetails)
                      }
                    >
                      ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ
                    </ButtonUse>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
        />
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 4,
            boxShadow: 24,
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <Button
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 12,
              right: 10,
              minWidth: 'auto',
              padding: 1,
              color: '#013372',
              '&:hover': { color: 'red' },
            }}
          >
            <CloseIcon />
          </Button>
          {selectedProfessional && (
            <ProfessionalDetails professional={selectedProfessional} />
          )}
        </Box>
      </Modal>

      <Footer />
    </Box>
  );
};

export default FindProfessionalUnconnected;
