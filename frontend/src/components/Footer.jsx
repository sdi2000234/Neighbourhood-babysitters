import React from 'react';
import phone from '../assets/white_phone.png';
import email from '../assets/white_email.png';

function Footer() {
  // Inline styles
  const styles = {
    footer: {
      backgroundColor: '#013372',
      color: '#fff',
      bottom: 0,
      width: '100%',
      marginTop: '100px',
      padding: '40px 40px 20px 40px',
      fontFamily: 'arial',
    },
    contact: {
      display: 'flex',
      marginTop: '10px',
      alignItems: 'center',
    },
    contactText: {
      marginRight: '30px',
    },
    contactIcon: {
      height: '20px',
      marginRight: '5px',
    },
    links: {
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
      color: '#00AEEF',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.footer}>
      {/* Contact Section */}
      <p><b>Επικοινωνία:</b></p>
      <div style={styles.contact}>
        <img src={phone} alt='phone' style={styles.contactIcon} />
        <p style={styles.contactText}>2103258080</p>
        <img src={phone} alt='phone' style={styles.contactIcon} />
        <p style={styles.contactText}>2103258090</p>
        <img src={email} alt='email' style={styles.contactIcon} />
        <p>ntantades@yeka.gr</p>
      </div>

      {/* Links Section */}
      <p style={styles.links}>
        © Copyright 2022 - Υλοποίηση από το&ensp;
        <a href="https://grnet.gr/" style={styles.link}>ΕΔΥΤΕ</a>&ensp;με χρήση&ensp;
        <a href="https://mathe.ellak.gr/" style={styles.link}>Ανοικτού Λογισμικού</a>. &emsp; - &emsp; 
        <a href="https://www.gov.gr/info/oroi-xrisis" style={styles.link}>Όροι Χρήσης</a>
      </p>
    </div>
  );
}

export default Footer;
