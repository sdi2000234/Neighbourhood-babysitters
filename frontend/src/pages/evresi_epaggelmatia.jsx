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
import HeaderConnected from '../components/Header_connected';
import Footer from '../components/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Page4 = () => {
  // State to manage favorites and selected language
  const [favorites, setFavorites] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Language options
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

  // Toggle the favorite state for each professional card
  const handleFavoriteToggle = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <HeaderConnected />

      {/* Main Content */}
      <Container sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
        {/* Connection Info */}
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Έχετε συνδεθεί ως Γονέας/Κηδεμόνας.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#004080',
              color: 'white',
              '&:hover': { backgroundColor: '#003366' },
            }}
          >
            Σύνδεση ως Επαγγελματίας
          </Button>
        </Box>

        {/* Title */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ
        </Typography>

        {/* Filters Section */}
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
              <FormControlLabel value="full" control={<Radio size="small" />} label="Όλική Απασχόληση" />
              <FormControlLabel
                value="partial"
                control={<Radio size="small" />}
                label="Μερική Απασχόληση"
              />
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

        {/* Information Section */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          1. Χρησιμοποιήστε τα φίλτρα για πιο εξατομικευμένα αποτελέσματα. 2. Πατήστε την καρδιά για
          να αποθηκεύσετε επαγγελματίες που σας ενδιαφέρουν. (Εμφανίζονται στη σελίδα "Πρόσληψη
          Επαγγελματία")
        </Typography>

        {/* Professionals Grid */}
        <Grid container spacing={2}>
          {[
            { name: 'Ελένη Μπούρου', rating: 4.5, reviews: 16, age: 36, area: 'Αμπελόκηποι', exp: 1 },
            { name: 'Βίκυ Ρούσση', rating: 4.0, reviews: 27, age: 41, area: 'Νέα Ιωνία', exp: 5 },
            { name: 'Αθηνά Καλομοίρα', rating: 3.5, reviews: 6, age: 22, area: 'Ζωγράφου', exp: 1 },
            { name: 'Ιωάννα Μακρή', rating: 5.0, reviews: 116, age: 39, area: 'Χαλάνδρι', exp: 6 },
            { name: 'Δώρα Τσουμαλίδου', rating: 4.0, reviews: 12, age: 64, area: 'Κορωπί', exp: 20 },
            { name: 'Άλεξ Στάθης', rating: 4.0, reviews: 9, age: 29, area: 'Γλυκά Νερά', exp: 2 },
            { name: 'Νίκος Θεοδώρου', rating: 3.5, reviews: 2, age: 55, area: 'Καλλιθέα', exp: 7 },
          ].map((pro, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 2,
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  position: 'relative',
                }}
              >
                {/* Heart Icon */}
                <IconButton
                  onClick={() => handleFavoriteToggle(index)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: favorites[index] ? 'red' : 'black',
                  }}
                >
                  <FavoriteIcon />
                </IconButton>

                {/* Card Content */}
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {pro.name}
                </Typography>
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

        {/* Pagination */}
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          &lt; 1 2 ... 8 9 &gt;
        </Typography>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Page4;
