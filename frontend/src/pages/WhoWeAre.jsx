import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
} from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PaymentIcon from '@mui/icons-material/Payment';
import HandshakeIcon from '@mui/icons-material/Handshake';
import babyPlaying from '../assets/baby_playing.png';

// Import your Header and Footer components
import Footer from '../components/Footer';

const infoItems = [
  {
    icon: <WorkOutlineIcon fontSize="large" />,
    title: 'Φεύγεις για τη δουλειά; Τέλεια!',
    description:
      'Δε χρειάζεται πια να ανησυχείς για το μωρό σου όσο λείπεις! Βρες, μέσα από τη βάση μας, την ιδανική νταντά που θα το φροντίζει στο δικό της ή το δικό σου σπίτι, με αγάπη κι ευθύνη. Έτσι, το μωρό σου θα νιώθει άνετα και ασφαλές.',
  },
  {
    icon: <SearchIcon fontSize="large" />,
    title: 'Κάνε αναζήτηση τώρα',
    description:
      'Βρες μια νταντά κοντά σου, κάνε κράτηση φύλαξης και πλήρωσε online. Μπορείς να βάλεις πολλά κριτήρια αναζήτησης, όπως πόσο κοντά σου μένει, αν έχει επιπλέον εμπειρία με βρέφη ή παιδιά προσχολικής ηλικίας κ.ά.',
  },
  {
    icon: <NewspaperIcon fontSize="large" />,
    title: 'Κάθε μέρα θα μαθαίνεις νέα',
    description:
      'Η νταντά σου θα επικοινωνεί μαζί σου καθημερινά, θα σου στέλνει φωτογραφίες του μωρού σου, θα μπορείτε ακόμα και να κάνετε βιντεοκλήση. Θα ξέρεις ακριβώς πώς είναι το μωρό, αν έφαγε, αν κοιμήθηκε, ενώ θα υπάρχει 24ωρη υποστήριξη.',
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: 'Ποιοι είναι οι Νταντάδες;',
    description:
      'Είναι ιδιώτες φροντιστές που θέλουν να προσφέρουν αγάπη και φροντίδα στο μωρό σου όσες ώρες εσύ λείπεις. Η υπηρεσία μας έρχεται σε επαφή μαζί τους έχοντας διασταυρώσει τα στοιχεία τους με συνεχείς ελέγχους.',
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: 'Νταντάδες με καρδιά',
    description:
      'Πολλοί φροντιστές μας δίνουν ένα μέρος της αμοιβής τους σε οργανισμούς που βοηθούν παιδιά και οικογένειες σε ανάγκη. Έτσι ξέρεις πως, κάθε φορά που κάνεις ηλεκτρονική πληρωμή, υποστηρίζεις κάτι καλό!',
  },
  {
    icon: <MedicalServicesIcon fontSize="large" />,
    title: 'Επείγουσα βοήθεια 24/7',
    description:
      'Είναι αυτονόητο πως η νταντά σου έχει ως απόλυτη προτεραιότητα την ασφάλεια του μωρού σου. Αν όμως συμβεί κάτι απρόοπτο, συνεργαζόμαστε με παιδίατρους τηλεϊατρικής, που λειτουργούν 24/7. Ένα ακόμα προνόμιο των υπηρεσιών μας.',
  },
  {
    icon: <PaymentIcon fontSize="large" />,
    title: 'Πληρωμές με ασφάλεια',
    description:
      'Οι συναλλαγές σου γίνονται εύκολα και με ασφάλεια online, με χρεωστική ή πιστωτική κάρτα. Η ηλεκτρονική πληρωμή διασφαλίζει και τη δυνατότητα επιστροφής χρημάτων*. (* με βάση την πολιτική ακύρωσης του κάθε φροντιστή)',
  },
  {
    icon: <HandshakeIcon fontSize="large" />,
    title: 'Είμαστε δίπλα σου 24/7, 365 μέρες!',
    description:
      'Είμαστε εδώ για να σου λύσουμε οποιαδήποτε απορία ή πρόβλημα, ανά πάσα στιγμή. Στείλε απλώς email, κι εμείς θα έρθουμε αμέσως σε επαφή μαζί σου για να σε βοηθήσουμε.',
  },
];

const BabyNannyPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Include the Header */}

      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: 250, sm: 400 },
          backgroundImage: `url(${babyPlaying})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay with headline */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            py: 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Πώς δουλεύει το BabySitting;
          </Typography>
        </Box>
      </Box>

      {/* Information Section */}
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Μάθε πώς μπορείς να βρεις την ιδανική νταντά για το μωρό σου
        </Typography>
        {infoItems.map((item, index) => (
          <Grid
            container
            spacing={2}
            sx={{ mb: 3 }}
            key={index}
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={2} textAlign="center">
              <Avatar
                sx={{
                  bgcolor: '#013372',
                  width: 70,
                  height: 70,
                  margin: '0 auto',
                }}
              >
                {item.icon}
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9} md={10}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Container>

      {/* Include the Footer */}
      <Footer />
    </Box>
  );
};

export default BabyNannyPage;
