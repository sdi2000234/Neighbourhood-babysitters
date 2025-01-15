import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import the signOut function
import { auth, db } from '../../firebaseConfig'; // Firebase config with Firestore
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions
import './ParentProfile.css';
import Footer from '../../components/Footer';
import { Avatar } from '@mui/material';
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentProfile() {
  const [userData, setUserData] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    picLink: '',
  });

  const navigate = useNavigate();

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth.currentUser?.uid; // Get the current user's ID
        if (!userId) {
          console.error('No user is logged in.');
          return;
        }

        const userDoc = doc(db, 'users', userId); // Reference to the user's document
        const userSnapshot = await getDoc(userDoc); // Fetch the document

        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data()); // Update state with user data
        } else {
          console.error('No user data found for the current user.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Function to log out the user
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      console.log('User successfully signed out.');
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const handleMore = () => {
    navigate('/new-page');
  };
  const handleChange = () => {
    navigate('/profile-epeksergasia-parent');
  };
  const handleMoreAds = () => {
    navigate('/ParentHireProfessional');
  };

  return (
    <>
      <Breadcrumbs page1="ΠΡΟΦΙΛ" />

      <div className="PersonInfoParentProfile">
        <h1>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h1>

        <Avatar
          alt="Profile"
          src={userData.picLink || ''}
          sx={{ width: 56, height: 56 }}
          className="PfpParentProfile"
        />

        <div>
          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{userData.firstName || 'Όνομα'}</p>
          <br />
          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{userData.lastName || 'Επώνυμο'}</p>
          <br />
          <p className="infoType">Τηλέφωνο:</p>
          <p className="infoBox">{userData.phone || 'Τηλέφωνο'}</p>
          <br />
          <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
          <p className="infoBox">{userData.email || 'Ηλεκτρονικό Ταχυδρομίο'}</p>
          <br />

          <div className="buttonsParentProfile">
            <div style={{ flexGrow: 1 }}>
              <button onClick={handleMore}>Περισσότερα</button>
              <button onClick={handleChange}>Επεξεργασία</button>
            </div>
            <div style={{ flexGrow: 1 }}>
              <button onClick={handleMoreAds}>Αγαπημένες Αγγελίες</button>
              <button className="logoutParentProfile" onClick={handleLogout}>
                Αποσύνδεση
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ParentProfile;
