import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Checkbox, FormControlLabel, Button, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import Firebase auth
import Header from '../components/Header_unconnected';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isKeeper, setIsKeeper] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validate fields
    if (!email || !password || !confirmPassword) {
      setError('Συμπληρώστε όλα τα πεδία.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Τα συνθηματικά δεν ταιριάζουν.');
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Επιτυχής εγγραφή! Μεταφέρεστε...');
      setTimeout(() => {
        navigate('/dashboard'); // Redirect to dashboard after registration
      }, 2000);
    } catch (err) {
      setError('Σφάλμα κατά την εγγραφή: ' + err.message);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container sx={{ mt: 6, mb: 6, maxWidth: '400px', textAlign: 'center', flex: '1' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Κάνε εγγραφή
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            placeholder="π.χ myemail@myemail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Συνθηματικό"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Επιβεβαίωση Συνθηματικού"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox checked={isKeeper} onChange={(e) => setIsKeeper(e.target.checked)} />}
            label="Θέλω να εγγραφώ ως επαγγελματίας"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#013372' }}
            onClick={handleRegister}
          >
            Εγγραφή
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Κάνοντας εγγραφή αποδέχομαι τους{' '}
          <Link href="#" underline="hover" color="#007bff">
            Όρους Χρήσης.
          </Link>{' '}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Είσαι ήδη μέλος?{' '}
          <Link href="/login" underline="hover" color="#007bff">
            Συνδέσου!
          </Link>
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};

export default RegisterPage;
