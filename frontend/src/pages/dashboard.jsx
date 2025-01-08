import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Grid, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Header from '../components/Header_connected';
import Footer from '../components/Footer';



const DashboardPage = () => {
  const steps = [
    { icon: <PersonIcon fontSize="large" />, text: 'Συμπλήρωσε τα Στοιχεία σου' },
    { icon: <SearchIcon fontSize="large" />, text: 'Αναζήτησε Επαγγελματίες' },
    { icon: <GroupAddIcon fontSize="large" />, text: 'Αποθήκευσε Επαγγελματίες' },
    { icon: <CalendarTodayIcon fontSize="large" />, text: 'Κλείσε Ραντεβού Γνωριμίας' },
    { icon: <AssignmentIcon fontSize="large" />, text: 'Κάνε Αίτηση Συνεργασίας' },
    { icon: <CheckCircleIcon fontSize="large" />, text: 'Υπέγραψε Συμφωνητικό' },
    { icon: <CreditCardIcon fontSize="large" />, text: 'Πληρωμή' },
  ];

  const faqItems = [
    { question: 'Ποιοι έχουν δικαίωμα συμμετοχής προκειμένου να λάβουν «Αξία Τοποθέτησης» (voucher);', answer: 'Οποιοσδήποτε γονιός μπορεί να συμμετέχει αν πληροί τα κριτήρια επιλεξιμότητας.' },
    { question: 'Ποιες είναι οι προϋποθέσεις συμμετοχής για τη λήψη «voucher»;', answer: 'Πρέπει να πληρούνται οικονομικά και κοινωνικά κριτήρια όπως περιγράφονται αναλυτικά στην προκήρυξη.' },
    { question: 'Πώς και πότε μπορώ να υποβάλλω αίτηση;', answer: 'Οι αιτήσεις υποβάλλονται ηλεκτρονικά μέσω της πλατφόρμας κατά τις ανακοινωμένες ημερομηνίες.' },
    { question: 'Ποιο είναι το ποσό του «voucher» που καλύπτει το πρόγραμμα;', answer: 'Το ποσό εξαρτάται από το πρόγραμμα και αναφέρεται στις λεπτομέρειες της δράσης.' },
    { question: 'Εάν η αίτηση μου απορριφθεί, μπορώ να υποβάλλω νέα αίτηση;', answer: 'Ναι, εφόσον πληρούνται τα κριτήρια, μπορείτε να υποβάλλετε νέα αίτηση κατά τον επόμενο κύκλο υποβολών.' },
  ];

  return (
    <Box>
      <Header />

      {/* New Section (Steps) */}
      <Box sx={{ backgroundColor: '#f0f0f0', py: 2, borderBottom: '1px solid #ddd' }}>
        <Container>
          <Grid container spacing={1} alignItems="center" justifyContent="center" wrap="nowrap">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Grid item sx={{ textAlign: 'center' }}>
                  {step.icon}
                  <Typography variant="body2" sx={{ mt: 1 }}>{step.text}</Typography>
                </Grid>
                {index < steps.length - 1 && (
                  <Grid item>
                    <ArrowForwardIcon fontSize="large" />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Container */}
      <Container sx={{ mt: 4, mb: 6 }}>
        {/* Agreement Section */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Τρέχον Συμφωνητικό:
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="subtitle1">👤 Αγγελική Χριστοπούλου</Typography>
          <Typography>Έναρξη: 01/01/2024</Typography>
          <Typography>Λήξη: 01/02/2024</Typography>
          <Typography>Ποσό Πληρωμής: 500.00€</Typography>
          <Typography>Επόμενη Πληρωμή: 01/02/2024</Typography>
          <Box mt={2}>
            <Button variant="contained" sx={{ mr: 2, backgroundColor: '#013372' }}>
              Διαχείριση
            </Button>
            <Button variant="contained" color="success">
              Πληρωμή
            </Button>
          </Box>
        </Paper>

        {/* Calendar Section */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Ημερολόγιο:
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Box sx={{ textAlign: 'center', backgroundColor: '#013372', color: 'white', p: 1, mb: 1, borderRadius: '5px' }}>
          <Typography variant="subtitle1">&lt; Νοέμβριος &gt;</Typography>
        </Box>
        <Grid container spacing={1} columns={7}>
          {["Δε", "Τρ", "Τε", "Πε", "Πα", "Σα", "Κυ"].map((day) => (
            <Grid item xs={1} key={day}>
              <Typography textAlign="center" fontWeight="bold" color="#013372">{day}</Typography>
            </Grid>
          ))}
          {[...Array(30)].map((_, i) => (
            <Grid item xs={1} key={i}>
              <Typography textAlign="center" sx={{ color: i === 8 || i === 25 ? 'red' : '#013372' }}>
                {i + 1}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

       {/* FAQ Section */}
      <Container sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Συχνές Ερωτήσεις:
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          {faqItems.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
        </Container>

      </Container>

      <Footer />
    </Box>
  );
};

export default DashboardPage;
