import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import './MyBreadcrumbs.css'; // Εισαγωγή του CSS

const MyBreadcrumbs = ({ breadcrumbPages }) => {
  return (
    <Box m={2} className="breadcrumbs">
      <Breadcrumbs separator=">" >
        {breadcrumbPages.map((item, index) => {
          if (index === breadcrumbPages.length - 1) {
            return (
              <Typography
                key={index}
                className="active"
                sx={{ fontWeight: 'bold' , color: 'black', fontSize: 28}}
              >
                {item.name}
              </Typography>
            );
          } else {
            return (
              <Link
                key={index}
                href={item.link}
                className="link"
              >
                {item.name}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default MyBreadcrumbs;


/* Για χρηση σε άλλο αρχείο πχ στο App.jsx:

import MyBreadcrumbs from './components/MyBreadcrumbs';

function App() {

  const breadcrumbPages = [
    { name: 'Home', link: '/' },
    { name: 'Profile', link: '/profile' },
    { name: 'History', link: '/history' },
    { name: 'Here'}  // Η σελίδα που είμαι ήδη (χωρίς σύνδεσμο) 
  ];

  return (
    <>
    <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>
    </>
  );
}

export default App;
 */