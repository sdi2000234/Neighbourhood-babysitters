import React, { useState } from 'react';
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
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import ParentNavigation from '../components/ParentNavigation';
import Footer from '../components/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Pagination from '@mui/material/Pagination'; // (NEW) Pagination import
import Header from '../components/Header_starter';
import { useNavigate } from 'react-router-dom';

const FindProfessionalUnconnected = () => {
  // --------- STATE ---------
  const [favorites, setFavorites] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // (NEW) For pagination
  const professionalsPerPage = 9; // (NEW) Ads per page
  const navigate = useNavigate();

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

  // --------- FAVORITE TOGGLE (same approach as first snippet) ---------
  const handleFavoriteToggle = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header/>

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
              Αναζήτηση
            </Button>
          </Box>
        </Box>

        {/* --------- INFORMATION SECTION (from first snippet) --------- */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          1. Χρησιμοποιήστε τα φίλτρα για πιο εξατομικευμένα αποτελέσματα. 2. Πατήστε την καρδιά για
          να αποθηκεύσετε επαγγελματίες που σας ενδιαφέρουν. (Εμφανίζονται στη σελίδα "Πρόσληψη
          Επαγγελματία")
        </Typography>

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
        }}
      >
        {/* Heart Icon */}
        <IconButton
  onClick={() => handleFavoriteToggle(index)}
  sx={{
    position: 'absolute',
    top: 8,
    right: 8,
    color: favorites[index] ? 'red' : 'rgba(0, 0, 0, 0.5)', // Transparent or slightly visible
    transition: 'transform 0.2s, color 0.2s', // Smooth transition for hover effect
    '&:hover': {
      transform: 'scale(1.2)', // Slightly enlarge the icon on hover
    },
  }}
>
  {favorites[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
</IconButton>


        {/* Card Content */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {pro.name}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#737373', // Match your existing button color
            color: '#fff',
            '&:hover': {
              backgroundColor: '#d3d3d3',
            },
          }}
          onClick={() => navigate('/professional-details', { state: pro })}
        >
          Πληροφορίες
        </Button>
        <Typography variant="body2">
          ⭐ {pro.rating} ({pro.reviews} αξιολογήσεις)
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">Ηλικία: {pro.age}</Typography>
        <Typography variant="body2">Περιοχή: {pro.area}</Typography>
        <Typography variant="body2">Εμπειρία: {pro.exp} χρόνια</Typography>
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
