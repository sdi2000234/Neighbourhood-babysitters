import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Εισάγουμε το Firebase Auth
import Footer from '../components/Footer'; // Footer Component

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // "Μείνε συνδεδεμένος"
  const [errorMessage, setErrorMessage] = useState('');

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ακυρώνουμε την προεπιλεγμένη συμπεριφορά φόρμας

    try {
      // Set persistence mode (local or session)
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

      // Attempt to log in the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful!');
      navigate('/dashboard'); // Ανακατεύθυνση στη σελίδα Dashboard
    } catch (error) {
      // Διαχείριση σφαλμάτων
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('Ο χρήστης δεν βρέθηκε. Παρακαλώ εγγραφείτε.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Λάθος συνθηματικό.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Μη έγκυρο email.');
      } else {
        setErrorMessage('Παρουσιάστηκε σφάλμα. Παρακαλώ δοκιμάστε ξανά.');
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
              Συνδέσου!
            </Typography>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
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
                  label="Συνθηματικό"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Box>

              {/* Remember Me & Forgot Password */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Μείνε συνδεδεμένος"
                />
                <Link href="#" variant="body2" sx={{ color: '#013372' }}>
                  Ξέχασες τον κωδικό σου;
                </Link>
              </Box>

              {/* Error Message */}
              {errorMessage && (
                <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                  {errorMessage}
                </Typography>
              )}

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
                Σύνδεση
              </Button>
            </form>

            {/* Sign-up Link */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Δεν είσαι μέλος?{' '}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register'); // Ανακατεύθυνση στη σελίδα εγγραφής
                }}
                sx={{ color: '#013372', fontWeight: 'bold' }}
              >
                Κάνε εγγραφή!
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

export default LoginPage;
