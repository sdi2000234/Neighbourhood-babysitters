import React from 'react';
import govgr from '../assets/govgr_logo_white.png';

const Header = ({ currentNavPage }) => {
  // Inline CSS Styles
  const styles = {
    global: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
    },
    navBar: {
      backgroundColor: '#013372',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    },
    navOptions: {
      flex: 1,
      justifyContent: 'right',
      fontSize: '17px',
      display: 'flex',
      listStyle: 'none',
      margin: '0 20px',
    },
    navButton: {
      padding: '15px',
      backgroundColor: 'transparent',
      border: 'none',
      alignSelf: 'flex-end',
      color: '#fff',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    dropdownContent: {
      display: 'none',
      position: 'absolute',
      backgroundColor: '#013372',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      minWidth: '165px',
    },
    dropdownLink: {
      float: 'none',
      color: '#fff',
      textDecoration: 'none',
      padding: '12px 16px',
      display: 'block',
      textAlign: 'left',
    },
    dropdownHover: {
      backgroundColor: '#00aeef',
      color: '#000',
    },
    profilePic: {
      height: '60px',
      width: '60px',
      marginLeft: '20px',
      marginRight: '5px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    switchRole: {
      display: 'flex',
      color: '#000',
      backgroundColor: '#00aeef',
      fontWeight: 'bold',
      fontSize: '18px',
      padding: '8px',
    },
    switchButton: {
      margin: '5px',
      fontSize: '18px',
      padding: '5px',
      backgroundColor: '#013372',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    currentNavPage: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.global}>
      {/* Navigation Bar */}
      <div style={styles.navBar}>
        {/* Logo */}
        <img
          className="logo"
          alt="logo"
          src={govgr}
          style={{
            height: '50px',
            cursor: 'pointer',
            padding: '10px',
          }}
        />

        {/* Buttons */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF9800',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Σύνδεση
          </button>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#00aeef',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Εγγραφή
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
