import React, { useState } from 'react';
import Babysitter_intro from '../assets/babysitter_intro.png';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Header from '../components/Header_starter';
import Footer from '../components/Footer';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import eva from '../assets/keepers/eva.jpg';
import evaProfile from '../assets/keepers/eva_profile.jpg';
import monika from '../assets/keepers/monika.jpg';
import monikaProfile from '../assets/keepers/monika_profile.jpg';
import antonia from '../assets/keepers/antonia.jpg';
import antoniaProfile from '../assets/keepers/antonia_profile.jpg';
import hara from '../assets/keepers/hara.jpg';
import haraProfile from '../assets/keepers/hara_profile.jpg';
import amilia from '../assets/keepers/amilia.jpg';
import amiliaProfile from '../assets/keepers/amilia_profile.jpg';
import maria from '../assets/keepers/maria.jpg';
import mariaProfile from '../assets/keepers/maria_profile.jpg';
import ksenia from '../assets/keepers/ksenia.jpg';
import kseniaProfile from '../assets/keepers/ksenia_profile.jpg';
import eftihia from '../assets/keepers/eftihia.jpg';
import eftihiaProfile from '../assets/keepers/eftihia_profile.jpg';
import konstantina from '../assets/keepers/konstantina.jpg';
import konstantinaProfile from '../assets/keepers/konstantina_profile.jpg';

const Page1 = () => {
  const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

  const [hostingOption, setHostingOption] = useState('');

  const steps = [
    {
      title: 'Βήμα 1',
      description: 'Βρες τον ιδιώτη Babysitter που θα προσέχει το παιδί σου όπως εσύ επιθυμείς. Δες ποιος είναι κοντά σου, τι εμπειρία έχει, τι υπηρεσίες προσφέρει και επίλεξε τον καλύτερο!',
    },
    {
      title: 'Βήμα 2',
      description: 'Επίλεξε τον ιδανικό Babysitter με βάση το ωρολόγιο πρόγραμμα που εσύ επιλέγεις. Μπορείς να ακυρώσεις και να πάρεις πίσω τα χρήματά σου έως και 2 μέρες πριν ξεκινήσει η κράτηση.',
    },
    {
      title: 'Βήμα 3',
      description: 'Κλείσε το ραντεβού σου και γνωρισε τον Babysitter! Είναι καθημερινά σε επικοινωνία μαζί σου και σου στέλνει φωτογραφίες.',
    },
  ];

  const topKeepers = [
    { id: 1, name: 'Εύα', rating: 10, img: eva, profileImg: evaProfile },
    { id: 2, name: 'Μόνικα', rating: 10, img: monika, profileImg: monikaProfile },
    { id: 3, name: 'Aντωνία', rating: 10, img: antonia, profileImg: antoniaProfile },
    { id: 4, name: 'Χαρά', rating: 10, img: hara, profileImg: haraProfile },
    { id: 5, name: 'Αμίλια', rating: 10, img: amilia, profileImg: amiliaProfile },
    { id: 6, name: 'Μαρία', rating: 9.9, img: maria, profileImg: mariaProfile },
    { id: 7, name: 'Ξένια', rating: 10, img: ksenia, profileImg: kseniaProfile },
    { id: 8, name: 'Ευτυχία', rating: 10, img: eftihia, profileImg: eftihiaProfile },
    { id: 9, name: 'Κωνταντίνα', rating: 10, img: konstantina, profileImg: konstantinaProfile },
  ];

  return (
    <Box>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${Babysitter_intro})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(100vw * 9 / 16)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
      
        

      </Box>

      {/* How It Works Section */}
      <Container sx={{ mt: 6, mb: 6 }}>
  <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
    Πώς Δουλεύει
  </Typography>
  <Grid
    container
    spacing={4}
    justifyContent="center" // Centers the grid horizontally
    alignItems="center" // Centers items vertically
    textAlign="center" // Ensures text alignment is centered
  >
    {steps.map((step, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#013372',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              margin: '0 auto', // Centers the circle horizontally
            }}
          >
            {index + 1}
          </Box>
          <Typography variant="h6" mt={2}>
            {step.title}
          </Typography>
          <Typography variant="body1" mt={1}>
            {step.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>


      {/* Top Keepers Section */}
      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
           Top νταντάδες τελευταίου μήνα 
        </Typography>
        <Grid container spacing={3}>
          {topKeepers.map((keeper, index) => (
            <Grid item xs={12} sm={6} md={4} key={keeper.id}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', position: 'relative' }}>
              <Box
  sx={{
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#013372',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  }}
>

                  #{index + 1}
                </Box>
                <img
                  src={keeper.img}
                  alt={keeper.name}
                  style={{ width: '100%', height: '200px', borderRadius: '8px' }}
                />
                <Typography variant="h6" mt={2}>
                  {keeper.name}
                </Typography>
                <Avatar src={keeper.profileImg} sx={{ width: 80, height: 80, margin: '10px auto' }} />
                <Typography variant="body1"> {keeper.rating}</Typography>
                <Button
  variant="contained"
  sx={{ mt: 2, backgroundColor: '#013372', color: '#fff', fontWeight: 'bold' }}
  fullWidth
>
  Προφίλ
</Button>

              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Safety Section */}
      <Box
  sx={{
    backgroundColor: '#013372',
    color: 'white',
    py: 6,
    display: 'flex', // Added flex display
    flexDirection: 'column', // Align items vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    textAlign: 'center', // Center text
  }}
>
  <Container>
    <Typography variant="h4" fontWeight="bold" mb={4}>
      Ασφάλεια Για Όλους
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" fontWeight="bold">
          Γνωρίζεις τους επαγγελματίες
        </Typography>
        <Typography variant="body1" mt={1}>
          Αναλυτική περιγραφή για το πώς οι νταντάδες προβάλλουν τα προφίλ τους
          και εξασφαλίζεται η ασφάλεια.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>

      <Footer />
    </Box>
  );
};

export default Page1;
