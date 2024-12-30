import React from 'react';
import { Box, Container, Typography, TextField, Button, FormControlLabel, Checkbox, RadioGroup, Radio, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Header from '../components/Header_unconnected';
import Footer from '../components/Footer';

const Page6 = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="body2" gutterBottom>
          Έχετε συνδεθεί ως Γονέας/Κηδεμόνας. | <a href="#/">Σύνδεση ως Επαγγελματίας</a>
        </Typography>
        <Typography variant="h6" gutterBottom>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ ΜΕ: Εύη Κωστοπούλου</Typography>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
          <TextField label="Όνομα" defaultValue="ΙΩΑΝΝΑ" />
          <TextField label="Επώνυμο" defaultValue="ΚΥΡΙΑΚΟΥ" />
          <TextField label="Τηλέφωνο" defaultValue="698753965" />
          <TextField label="Ηλεκτρονικό Ταχυδρομείο" defaultValue="example@example.com" />
          <TextField label="Ηλικία Παιδιού (σε μήνες)" type="number" defaultValue="12" />
          <TextField label="Έναρξη Συνεργασίας" type="date" defaultValue="2025-05-01" InputLabelProps={{ shrink: true }}/>
          <TextField label="Λήξη Συνεργασίας" type="date" defaultValue="2025-07-05" InputLabelProps={{ shrink: true }}/>
          
          <Typography variant="subtitle1">Διαθεσιμότητα</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ώρες</TableCell>
                <TableCell>ΔΕΥ</TableCell>
                <TableCell>ΤΡΙ</TableCell>
                <TableCell>ΤΕΤ</TableCell>
                <TableCell>ΠΕΜ</TableCell>
                <TableCell>ΠΑΡ</TableCell>
                <TableCell>ΣΑΒ</TableCell>
                <TableCell>ΚΥΡ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>8:00</TableCell>
                <TableCell><Checkbox defaultChecked/></TableCell>
                <TableCell><Checkbox defaultChecked/></TableCell>
                <TableCell><Checkbox defaultChecked/></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography variant="subtitle1">Περιοχή Φύλαξης</Typography>
          <RadioGroup row defaultValue="homeParent">
            <FormControlLabel value="homeParent" control={<Radio />} label="Φύλαξη στο σπίτι του Γονέα" />
            <FormControlLabel value="homeProfessional" control={<Radio />} label="Φύλαξη στο σπίτι του Επαγγελματία" />
          </RadioGroup>

          <TextField label="Διεύθυνση, Περιοχή, ΤΚ" defaultValue="Αγίου Στυλιανού 12, Αθήνα 114 74" />
          <TextField
            label="Μήνυμα προς επαγγελματία (προαιρετικό)"
            multiline
            rows={4}
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Δηλώνω Επιθυμία Συνεργασίας και Υπογραφή Ιδιωτικού Συμφωνητικού"
          />

          <Typography variant="body2">
            ΠΡΟΣΟΧΗ: Εάν πατήσετε "Οριστική Υποβολή" ...
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined">Ακύρωση</Button>
            <Button variant="outlined">Προσωρινή Αποθήκευση</Button>
            <Button variant="contained" type="submit">Οριστική Υποβολή</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Page6;
