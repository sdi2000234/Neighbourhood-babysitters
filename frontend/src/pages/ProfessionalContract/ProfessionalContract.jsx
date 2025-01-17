import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContractProfessionalCard from '../../components/ContractProfessionalCard';
import './ProfessionalContract.css';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Menu, MenuItem, Button, Typography } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';
import { auth, db } from '../../firebaseConfig';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function ProfessionalContract() {
  // Breadcrumbs for navigation display
  const breadcrumbPages = [
    { name: 'ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ' },
    { name: 'ΑΙΤΗΣΕΙΣ' },
  ];

  // State for dropdown and notifications
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  const navigate = useNavigate();

  // Listen for authentication state changes and store current user
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribeAuth();
  }, []);

  // Dropdown menu handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Navigation functions for switching between sections
  const handle1 = () => {
    navigate('../ProfessionalAllAppointments');
  };
  const handle2 = () => {
    navigate('../ProfessionalContract');
  };

  // Listen for notifications directed to the logged-in professional.
  // The query orders by 'timestamp', so we filter out any documents that are missing the timestamp.
  useEffect(() => {
    if (!currentUser) return; // Do not run query until currentUser is available

    const q = query(
      collection(db, 'notifications'),
      where('to', '==', currentUser.uid),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const notifList = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          // Filter out documents that are missing the timestamp (to avoid ordering issues)
          .filter((notif) => notif.timestamp);
        setNotifications(notifList);
      } catch (error) {
        console.error("Error processing snapshot: ", error);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <>
      <Breadcrumbs
        page1={'ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ'}
        link1={'../ProfessionalContract'}
        page2={'ΑΙΤΗΣΕΙΣ'}
      />

      <div className="ProfessionalContractContainer">
        <div className="card1 text-center">
          <div className="card-header1">
            <ul className="nav1 nav-tabs1 card-header-tabs">
              <li className="nav-item1">
                <button className="nav-link1" onClick={handle1}>
                  ΡΑΝΤΕΒΟΥ
                </button>
              </li>
              <li className="nav-item1">
                <button className="nav-link1 active" onClick={handle2}>
                  ΑΙΤΗΣΕΙΣ ΣΥΝΕΡΓΑΣΙΑΣ
                </button>
              </li>
            </ul>
          </div>

          {/* Dropdown menu for sorting by date */}
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained"
              className="ButtonProfessionalContract"
              endIcon={
                <img
                  src={arrow_white}
                  alt="arrow"
                  style={{ width: '13px', height: '13px', marginLeft: '8px' }}
                />
              }
            >
              Ταξινόμηση ανά Ημερομηνίας
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Αύξουσα</MenuItem>
              <MenuItem onClick={handleClose}>Φθίνουσα</MenuItem>
            </Menu>
          </div>

          <div className="card-body1">
            <div>
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div key={notif.id}>
                    <ContractProfessionalCard
                      type={notif.type}      // e.g., collaborationRequest
                      number={notif.adId}     // Advertisement ID
                      name={notif.parentEmail}  // Display parent's email (or other info)
                      start={
                        notif.timestamp
                          ? new Date(notif.timestamp.seconds * 1000).toLocaleDateString()
                          : ''
                      }
                      finish={''}
                      age={''}
                    />
                    <br />
                  </div>
                ))
              ) : (
                <Typography variant="body2">
                  Δεν υπάρχουν αιτήματα συνεργασίας.
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfessionalContract;
