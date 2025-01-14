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
  Tooltip,
  InputAdornment,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
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
    if (password.length < 6) {
      setError('Ο κωδικός πρέπει να περιέχει τουλάχιστον 6 χαρακτήρες.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Οι κωδικοί δεν ταιριάζουν.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        isKeeper: isKeeper,
      });

      setSuccess('Επιτυχής εγγραφή! Μεταφέρεστε...');

      setTimeout(() => {
        if (isKeeper) {
          navigate('/profesionaleditstep1');
        } else {
          navigate('/profile-epeksergasia-parent');
        }
      }, 1500);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Αυτό το email χρησιμοποιείται ήδη.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Παρακαλώ εισάγετε έγκυρο email.');
      } else {
        setError('Σφάλμα κατά την εγγραφή: ' + err.message);
      }
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
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Κάνε εγγραφή
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            <form onSubmit={handleRegister}>
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
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Κωδικός"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="Ο κωδικός πρέπει να περιέχει τουλάχιστον 6 χαρακτήρες.">
                          <InfoIcon sx={{ color: '#013372', cursor: 'pointer' }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
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
                ΕΓΓΡΑΦΗ
              </Button>
            </form>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Κάνοντας εγγραφή αποδέχομαι τους{' '}
              <Link href="#" underline="hover" color="#013372" fontWeight="bold">
                Όρους Χρήσης
              </Link>.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Είσαι ήδη μέλος?{' '}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                sx={{ color: '#013372', fontWeight: 'bold' }}
              >
                Συνδέσου!
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default RegisterPage;
