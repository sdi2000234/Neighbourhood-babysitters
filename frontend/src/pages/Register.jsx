import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
// import Header from '../components/Header_starter';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isKeeper, setIsKeeper] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent any default form submission
    setError(''); // Clear previous errors
    setSuccess('');

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        isKeeper: isKeeper,
      });

      setSuccess('Επιτυχής εγγραφή! Μεταφέρεστε...');

      // Redirect based on whether the user is a keeper or not
      if (isKeeper) {
        navigate('/dashboard_professional');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Σφάλμα κατά την εγγραφή: ' + err.message);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* <Header /> */}

      <Container sx={{ mt: 6, mb: 6, maxWidth: '400px', textAlign: 'center', flex: 1 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Κάνε εγγραφή
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        {/* Wrap inputs and button in a form. Use onSubmit to handle registration */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleRegister} // This prevents a full page reload
        >
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
            control={
              <Checkbox
                checked={isKeeper}
                onChange={(e) => setIsKeeper(e.target.checked)}
              />
            }
            label="Θέλω να εγγραφώ ως επαγγελματίας"
          />

          {/* Button type="submit" triggers the onSubmit on the parent form */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#013372' }}
          >
            Εγγραφή
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Κάνοντας εγγραφή αποδέχομαι τους{' '}
          <Link href="#" underline="hover" color="#007bff">
            Όρους Χρήσης.
          </Link>
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
