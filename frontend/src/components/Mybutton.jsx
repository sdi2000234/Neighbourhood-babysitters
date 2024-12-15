import React from 'react';

const Mybutton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#007BFF', // Μπλε χρώμα για το κουμπί
        color: '#FFFFFF',           // Λευκό χρώμα για το κείμενο
        border: 'none',             // Χωρίς περίγραμμα
        borderRadius: '8px',        // Στρογγυλεμένες γωνίες
        padding: '10px 20px',       // Εσωτερικά κενά
        fontSize: '16px',           // Μέγεθος γραμματοσειράς
        fontWeight: 'bold',         // Έντονη γραμματοσειρά
        cursor: 'pointer',          // Δείκτης για το hover
      }}
    >
      {text}
    </button>
  );
};

export default Mybutton;
