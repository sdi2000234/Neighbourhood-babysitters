import React from 'react'
import './HomePage.css'
import Header from '../../components/Header';
// import Mybutton from '../../components/Mybutton';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const HomePage = () => {
  // const handleClick = () => {
  //   alert('Welcome to the Home Page!');
  // };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Home Page</h1>
      {/* <Mybutton text="Go to About Page" onClick={handleClick} /> */}
      <Button sx={{background: red[500]}} variant="contained" color="primary">
        My Button
      </Button>
      <Header></Header>
    </div>
  );
};

export default HomePage;



