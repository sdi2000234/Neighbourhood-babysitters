import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';

const HeaderConnected = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#004080', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Section: Logo */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          govgr
        </Typography>

        {/* Center Section: Menu Items */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button sx={{ color: 'white', textTransform: 'uppercase' }}>Αρχική</Button>
          <Button sx={{ color: 'white', textTransform: 'uppercase' }}>Εύρεση Επαγγελματία</Button>
          <Button 
            sx={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}
          >
            Πρόσληψη Επαγγελματία
          </Button>
          <Button sx={{ color: 'white', textTransform: 'uppercase' }}>Συμφωνητικό</Button>
          <Button sx={{ color: 'white', textTransform: 'uppercase' }}>Ιστορικό</Button>
        </Box>

        {/* Right Section: Profile */}
        <Avatar sx={{ backgroundColor: '#ddd', color: '#333', fontWeight: 'bold', width: 40, height: 40 }}>
          Pfp
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderConnected;
