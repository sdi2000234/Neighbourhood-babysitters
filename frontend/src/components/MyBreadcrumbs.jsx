import React from 'react'
import {Box , Breadcrumbs , Link , Typography} from "@mui/material"

const MyBreadcrumbs = ({ breadcrumbPages }) => {
  return (
    <Box m={2}>
        <Breadcrumbs separator='>'>    
            {breadcrumbPages.map((item, index) => {
            if (index === breadcrumbPages.length - 1) {
                return <Typography key={index} color='text.primary'> {item.name} </Typography>
            } else {
                return <Link key={index} underline='always' href={item.link}> {item.name}</Link>
            }
            })}
        </Breadcrumbs>
    </Box>
  )
}

export default MyBreadcrumbs


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