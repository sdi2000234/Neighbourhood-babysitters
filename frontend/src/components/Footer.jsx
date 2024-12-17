import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#004080',
        color: 'white',
        py: 2,
        textAlign: 'center',
        mt: 'auto', // Pushes footer to bottom
      }}
    >
      <Container>
        <Typography variant="body1">Επικοινωνία:</Typography>
        <Typography variant="body2">
          📞 2103258080 | 📞 2103258090 | ✉️ <a href="mailto:ntantades@yeka.gr" style={{ color: 'white' }}>ntantades@yeka.gr</a>
        </Typography>
        <Typography variant="caption">
          © Copyright 2022 - Υλοποίηση από το ΕΔΥΤΕ με χρήση <a href="#" style={{ color: 'white' }}>Ανοικτού Λογισμικού</a>. - <a href="#" style={{ color: 'white' }}>Όροι Χρήσης</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
