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
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
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
import Footer from '../components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import elLocale from '@fullcalendar/core/locales/el'; // Greek locale
import './DashboardPage.css';

const DashboardPageParent = () => {
  // State for calendar events
  const [events, setEvents] = useState([
    { title: 'Ραντεβού', date: '2025-01-06' },
    { title: 'Προθεσμία', date: '2025-01-08' },
  ]);
  // State for dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Steps in top bar
  const steps = [
    { icon: <PersonIcon fontSize="large" />, text: 'Συμπλήρωσε τα Στοιχεία σου' },
    { icon: <SearchIcon fontSize="large" />, text: 'Δημοσίευσε Αγγελία' },
    { icon: <GroupAddIcon fontSize="large" />, text: 'Αποδέξου Ραντεβού Γνωριμίας' },
    { icon: <CalendarTodayIcon fontSize="large" />, text: 'Αποδέξου Αίτηση Συνεργασίας' },
    { icon: <AssignmentIcon fontSize="large" />, text: 'Υπέγραψε Συμφωνητικό' },
    { icon: <CreditCardIcon fontSize="large" />, text: 'Πληρωμή' },
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'Ποιοι έχουν δικαίωμα εγγραφής στο Μητρώο Επιμελητών/τριών;',
      answer:
        '1.Έχουν συμπληρώσει το 18ο έτος της ηλικίας τους 2. Είναι Έλληνες ή αλλοδαποί πολίτες που διαμένουν νόμιμα στην Ελλάδα και έχουν πρόσβαση στην αγορά εργασίας. 3. Πληρούν τις προϋποθέσεις της υπ’ αριθμ: 41866/24-04-2023 Τροποποίησης της Πρόσκλησης...'
    },
    {
      question: 'Πώς μπορώ να εγγραφώ στο Μητρώο Επιμελητών/τριών;',
      answer:
        'Για την εγγραφή σας στο Μητρώο, μεταβείτε στην ηλεκτρονική διεύθυνση ntantades.gov.gr «Εγγραφή στο μητρώο επιμελητών» και με τη χρήση των κωδικών σας taxisnet...'
    },
    {
      question: 'Μέχρι πότε μπορώ να υποβάλλω αίτηση για το Μητρώο;',
      answer:
        'Η εφαρμογή είναι ενεργή από 29/3/2022 έως 30/09/2024.'
    },
    {
      question: 'Ο τόπος διαμονής μου αποτελεί προϋπόθεση;',
      answer:
        'Όχι, όμως η πιλοτική εφαρμογή της Δράσης θα εφαρμοστεί σε συγκεκριμένους Δήμους...'
    },
    {
      question: 'Εάν η αίτησή μου απορριφθεί, μπορώ να υποβάλλω νέα;',
      answer:
        'Ναι, εφόσον εκλείψουν οι λόγοι απόρριψης...'
    },
  ];

  // Handle date click in calendar
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setDialogOpen(true);
  };

  // Add new event to calendar
  const handleAddEvent = () => {
    setEvents([...events, { title: newEventTitle, date: selectedDate }]);
    setDialogOpen(false);
    setNewEventTitle('');
  };

  return (
    <Box>

      {/* Steps Bar */}
      <Box sx={{ backgroundColor: '#f0f0f0', py: 2, borderBottom: '1px solid #ddd' }}>
        <Container>
          <Grid container spacing={1} alignItems="center" justifyContent="center" wrap="nowrap">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Grid item sx={{ textAlign: 'center' }}>
                  {step.icon}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {step.text}
                  </Typography>
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

      {/* Current Agreement Box */}
      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Τρέχον Συμφωνητικό:
          </Typography>

          {/* Person's info row */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {/* Avatar-like circle */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#9e9e9e',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
                fontWeight: 'bold',
              }}
            >
              PtP
            </Box>
            <Typography variant="body1" fontWeight="bold">
              Ηρώ Στάικου
            </Typography>
          </Box>

          {/* Agreement details */}
          <Typography variant="body2">ΕΝΑΡΞΗ: 28/10/2024</Typography>
          <Typography variant="body2">ΛΗΞΗ: 25/3/20245</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            ΠΟΣΟ ΠΛΗΡΩΜΗΣ: 46,67 €
          </Typography>
          <Typography variant="body2">ΤΡΕΧΟΥΣΑ ΠΛΗΡΩΜΗ: Ολοκληρωμένη</Typography>
          <Typography variant="body2">ΕΠΟΜΕΝΗ ΠΛΗΡΩΜΗ: 09/01/2025</Typography>

          {/* Button (disabled for now) */}
          <Button variant="outlined" disabled sx={{ mt: 2 }}>
            Αίτημα Λήξης
          </Button>
        </Paper>
      </Container>

      {/* Calendar & FAQ */}
      <Container sx={{ mb: 6 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Ημερολόγιο:
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4, height: '500px' }}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale={elLocale}
            selectable
            editable
            events={events}
            dateClick={handleDateClick}
          />
        </Paper>

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

      {/* Dialog for adding new event */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Προσθήκη Εκδήλωσης</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Τίτλος Εκδήλωσης"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Άκυρο</Button>
          <Button onClick={handleAddEvent} color="primary">
            Προσθήκη
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default DashboardPageParent;
