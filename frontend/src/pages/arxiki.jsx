import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page1 = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          {/* Main Title */}
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Δράση "Νταντάδες της γειτονιάς"
            </Typography>
            <Typography variant="h6">
              Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων από 2 μηνών έως 2,5 ετών.
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body1" textAlign="center" mb={4}>
            Για να χρησιμοποιήσετε την πλατφόρμα, θα πρέπει να συνδεθείτε και να δημιουργήσετε
            λογαριασμό είτε ως γονιός/κηδεμόνας, είτε ως επαγγελματίας/"νταντά". Αν σας ενδιαφέρουν
            και οι δύο ρόλοι, θα χρειαστεί να δημιουργήσετε δύο διαφορετικούς λογαριασμούς.
          </Typography>

          <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    gap: 4, // Adds spacing between buttons
    mb: 4, // Adds spacing below the buttons
  }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#004080',
      color: 'white',
      '&:hover': { backgroundColor: '#003366' },
      px: 4, // Horizontal padding for larger buttons
    }}
    size="large"
  >
    Σύνδεση ως Γονέας / Κηδεμόνας
  </Button>
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#004080',
      color: 'white',
      '&:hover': { backgroundColor: '#003366' },
      px: 4, // Horizontal padding for larger buttons
    }}
    size="large"
  >
    Σύνδεση ως Επαγγελματίας
  </Button>
</Box>


          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, border: '1px solid #e0e0e0', boxShadow: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                  Σύνδεση ως Γονέας / Κηδεμόνας
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1" gutterBottom>
                  Τα βήματα της διαδικασίας:
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Συμπλήρωση Στοιχείων</li>
                  <li>Αίτηση Επιχορήγησης</li>
                  <li>Ραντεβού Γνωριμίας</li>
                  <li>Αίτηση Συνεργασίας</li>
                  <li>Υπογραφή Συμφωνητικού</li>
                  <li>Πληρωμή μέσω Voucher</li>
                </ul>
                
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
  Ποιοι γονείς/κηδεμόνες έχουν δικαίωμα συμμετοχής:
</Typography>
<ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
  <li>
    Γονείς φυσικοί, θετοί ή ανάδοχοι, με βρέφος ή νήπιο, που εργάζονται είτε στο δημόσιο 
    είτε στον ιδιωτικό τομέα, με οποιαδήποτε μορφή απασχόλησης, συμπεριλαμβανομένων 
    και των αυτοαπασχολούμενων και ελεύθερων επαγγελματιών.
  </li>
  <li>
    Γονείς φυσικοί, θετοί ή ανάδοχοι, με βρέφος ή νήπιο, που είναι εγγεγραμμένοι στα 
    μητρώα της Δ.ΥΠ.Α. (πρώην ΟΑΕΔ) ως άνεργοι.
  </li>
  <li>
    Κάθε πρόσωπο στο οποίο έχει ανατεθεί, με δικαστική απόφαση ή εισαγγελική διάταξη, 
    η αποκλειστική επιμέλεια βρέφους ή νηπίου, που εργάζεται είτε στο δημόσιο είτε στον 
    ιδιωτικό τομέα, με οποιαδήποτε μορφή απασχόλησης, συμπεριλαμβανομένων και των 
    αυτοαπασχολούμενων και ελεύθερων επαγγελματιών.
  </li>
  <li>
    Το ετήσιο ατομικό εισόδημά σας να μην υπερβαίνει το ποσό των 24.000 €.
  </li>
  <li>
    Επισημαίνεται ότι, οι συνταξιούχοι δεν δύναται να είναι δικαιούχοι της δράσης καθώς 
    δεν εμπίπτουν στις παραπάνω κατηγορίες.
  </li>
</ul>

              </Paper>
            </Grid>

            {/* Professional Section */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, border: '1px solid #e0e0e0', boxShadow: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                  Σύνδεση ως Επαγγελματίας
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1" gutterBottom>
                  Τα βήματα της διαδικασίας:
                </Typography>
                <ul style={{ paddingLeft: '20px' }}>
                  <li>Συμπλήρωση Στοιχείων</li>
                  <li>Δημιουργία Αγγελίας</li>
                  <li>Ραντεβού Γνωριμίας</li>
                  <li>Αποδοχή Αίτησης Συνεργασίας</li>
                  <li>Υπογραφή Συμφωνητικού</li>
                  <li>Αποδοχή Πληρωμής</li>
                </ul>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Ποιοι επαγγελματίες έχουν δικαίωμα συμμετοχής:
                </Typography>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
  <li>
    Άτομα που έχουν συμπληρώσει το 18ο έτος της ηλικίας τους, διαμένουν νόμιμα στην 
    Ελλάδα και έχουν πρόσβαση στην αγορά εργασίας και έχουν:
    <ul style={{ paddingLeft: '20px' }}>
      <li>
        <strong>Για Έλληνες πολίτες:</strong>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Τίτλο σπουδών</li>
          <li>Πιστοποιητικό τριών βοηθειών</li>
          <li>
            Πιστοποιητικό υγείας τελευταίου τριμήνου από παθολόγο, δερματολόγο και ψυχίατρο 
            δημόσιας δομής. <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>Κλείστε ραντεβού</a>.
          </li>
          <li>Αντίγραφο ποινικού μητρώου γενικής χρήσης</li>
        </ul>
      </li>
      <li>
        <strong>Για αλλοδαπούς πολίτες, ισχύουν όλα τα παραπάνω και επιπλέον:</strong>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Δελτίο ταυτότητας Ε.Ε. ή διαβατήριο σε ισχύ</li>
          <li>
            Για την πιστοποίηση του επιπέδου γνώσης της ελληνικής γλώσσας, έγγραφο που 
            εκδίδεται από διαπιστευμένους μεταφραστές/φορείς ή πιστοποιητικό ελληνομάθειας επιπέδου Β1.
          </li>
          <li>
            Βεβαίωση νόμιμης διαμονής στη χώρα:
            <ul style={{ paddingLeft: '20px' }}>
              <li>Άδεια διαμονής σε ισχύ ή βεβαίωση κατάθεσης αίτησης (Νόμος 106/2007)</li>
              <li>Ειδικό δελτίο ομογενούς, άδεια παραμονής για πρόσφυγες ή για πολίτες άλλων χωρών εντός Ε.Ε.</li>
              <li>Προσωρινή άδεια διαμονής για ανθρωπιστικούς λόγους</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <strong>Προσοχή:</strong> Όλα τα ξενόγλωσσα έγγραφα απαιτείται να είναι μεταφρασμένα και επικυρωμένα σύμφωνα με τα όσα προβλέπει ο νόμος.
  </li>
</ul>

              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Page1;
