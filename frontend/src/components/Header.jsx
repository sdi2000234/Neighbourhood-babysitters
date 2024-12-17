import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#004080' }}> {/* Custom Blue Color */}
      <Toolbar>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: 'white' }} // White Text
          >
            govgr
          </Typography>
          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', opacity: 0.8 }} // Slightly Faded White
          >
            Υπηρεσία Φροντίδας Βρεφών και Νηπίων
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
