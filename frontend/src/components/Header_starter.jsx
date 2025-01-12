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
      padding: '10px 15px',
      backgroundColor: 'transparent', // Transparent to blend with header
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    linkContainer: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    logo: {
      height: '50px',
      cursor: 'pointer',
      padding: '10px',
    },
  };

  return (
    <div>
      <div style={styles.navBar}>
        {/* Logo */}
        <img
          alt="logo"
          src={govgr}
          style={styles.logo}
          onClick={() => navigate('/')} // Navigate to home on logo click
        />

        {/* Right-Side Links and Buttons */}
        <div style={{ marginLeft: 'auto', ...styles.linkContainer }}>
          {/* New Links */}
          <button
            style={styles.navButton}
            onClick={() => navigate('/whoweare')}
          >
            Σχετικά με την υπηρεσία
          </button>
          <button
            style={styles.navButton}
            onClick={() => navigate('/FindProfessional_unconnected')}
          >
            Βρείτε Εργασία
          </button>
          <button
            style={styles.navButton}
            onClick={() => navigate('/TermsForVoucher')}
          >
            Προϋποθέσεις για Voucher
          </button>

          {/* Existing Buttons */}
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
    </div>
  );
};

export default Header;
