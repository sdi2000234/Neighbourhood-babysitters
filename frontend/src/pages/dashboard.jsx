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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Footer from '../components/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import elLocale from '@fullcalendar/core/locales/el'; // Import Greek locale
import './DashboardPage.css';

const DashboardPage = () => {
  const [events, setEvents] = useState([
    { title: 'Ραντεβού', date: '2025-01-06' },
    { title: 'Προθεσμία', date: '2025-01-08' },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const steps = [
    { icon: <PersonIcon fontSize="large" />, text: 'Συμπλήρωσε τα Στοιχεία σου' },
    { icon: <SearchIcon fontSize="large" />, text: 'Αναζήτησε Επαγγελματίες' },
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

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setDialogOpen(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, { title: newEventTitle, date: selectedDate }]);
    setDialogOpen(false);
    setNewEventTitle('');
  };

  return (
    <Box>
     

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

      <Container sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Ημερολόγιο:
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4, height: '500px' }} className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale={elLocale} // Set Greek locale
            selectable={true}
            editable={true}
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
          <Button onClick={handleAddEvent} color="primary">Προσθήκη</Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default DashboardPage;
