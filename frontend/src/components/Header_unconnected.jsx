import React from 'react';
import { useNavigate } from 'react-router-dom';
import govgr from '../assets/govgr_logo_white.png';

const Header = () => {
  const navigate = useNavigate();

  const styles = {
    navBar: {
      backgroundColor: '#013372',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    },
    navButton: {
      padding: '15px',
      backgroundColor: '#013372', // Updated button color to match header
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    footer: {
      backgroundColor: '#013372',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed', // Fix footer to the bottom
      width: '100%',
      bottom: 0,
    }
  };

  return (
    <div>
      <div style={styles.navBar}>
        <img
          alt="logo"
          src={govgr}
          style={{ height: '50px', cursor: 'pointer', padding: '10px' }}
          onClick={() => navigate('/')} // Navigate to home on logo click
        />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <button
            style={styles.navButton}
            onClick={() => navigate('/login')}
          >
            Σύνδεση
          </button>
          <button
            style={styles.navButton}
            onClick={() => navigate('/register')}
          >
            Εγγραφή
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>&copy; 2024 - Υποστήριξη από το ΕΔΥΤΕ</p>
      </div>
    </div>
  );
};

export default Header;
