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
  Paper,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
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
    event.preventDefault();
    setError('');
    setSuccess('');

    // Validate fields
    if (!email || !password || !confirmPassword) {
      setError('Συμπληρώστε όλα τα πεδία.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Οι κωδικοί δεν ταιριάζουν.');
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
      setTimeout(() => {
        if (isKeeper) {
          navigate('/profesionaleditstep1');
        } else {
          navigate('/profile-epeksergasia-parent');
        }
      }, 1500);
    } catch (err) {
      setError('Σφάλμα κατά την εγγραφή: ' + err.message);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        mt: 5,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            {/* Title */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Κάνε εγγραφή
            </Typography>

            {/* Error and Success Alerts */}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            {/* Registration Form */}
            <form onSubmit={handleRegister}>
              {/* Email Field */}
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Box>

              {/* Password Field */}
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Κωδικός"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Box>

              {/* Confirm Password Field */}
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Επιβεβαίωση Κωδικού"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Box>

              {/* Is Keeper Checkbox */}
              <Box sx={{ mb: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isKeeper}
                      onChange={(e) => setIsKeeper(e.target.checked)}
                    />
                  }
                  label="Θέλω να εγγραφώ ως επαγγελματίας"
                />
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#013372',
                  color: 'white',
                  '&:hover': { backgroundColor: '#002855' },
                }}
              >
                Εγγραφή
              </Button>
            </form>

            {/* Terms of Use */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Κάνοντας εγγραφή αποδέχομαι τους{' '}
              <Link href="#" underline="hover" color="#013372" fontWeight="bold">
                Όρους Χρήσης
              </Link>.
            </Typography>

            {/* Login Link */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Είσαι ήδη μέλος?{' '}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login'); // Navigate to login page
                }}
                sx={{ color: '#013372', fontWeight: 'bold' }}
              >
                Συνδέσου!
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default RegisterPage;
