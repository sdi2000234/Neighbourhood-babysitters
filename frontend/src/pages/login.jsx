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

// Import Header and Footer
import Header from '../components/Header_unconnected'; // Header for Login Page
import Footer from '../components/Footer'; // Footer Component

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
    // Authentication logic here
    alert('Login Successful!');
    navigate('/'); // Redirect to homepage after login
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full height
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        sx={{
          flex: '1', // Pushes footer to the bottom
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

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#013372', // Yale Blue
                  color: 'white',
                  '&:hover': { backgroundColor: '#002855' }, // Darker Yale Blue
                }}
              >
                Σύνδεση
              </Button>
            </form>

            {/* Sign-up Link */}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Δεν είσαι μέλος?{' '}
              <Link href="#" sx={{ color: '#013372', fontWeight: 'bold' }}>
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
