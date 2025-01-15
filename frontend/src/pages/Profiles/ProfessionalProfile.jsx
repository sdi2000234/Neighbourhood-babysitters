import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfessionalProfile.css';
import Footer from '../../components/Footer';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig'; // Firebase configuration
import { Avatar } from '@mui/material';
import Breadcrumbs from '../../components/Breadcrumbs';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { Card, CardContent, Typography } from '@mui/material';

function ProfessionalProfile() {
  const [userData, setUserData] = useState({
    userName: '',
    userLastName: '',
    userEmail: '',
    userPhone: '',
    picLink: '',
    desc: '',
  });

  const navigate = useNavigate();

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth.currentUser?.uid; // Get current user's ID
        if (!userId) return;

        const userDoc = doc(db, 'users', userId);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data());
        } else {
          console.log('No such user data found!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Sign out the user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User successfully signed out.');
      window.location.href = './'; // Redirect to the home page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleMore = () => {
    navigate('/new-page');
  };

  const handleChange = () => {
    navigate('/profesionaleditstep1');
  };

  const handleMyAds = () => {
    navigate('/ProfessionalMyAds');
  };

  return (
    <>
      <Breadcrumbs page1="ΠΡΟΦΙΛ" />

      <div className="PersonInfoProfessionalProfile">
        <h1>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h1>

        <Avatar
          alt="Profile"
          src={userData.picLink || ''}
          sx={{ width: 56, height: 56 }}
          className="PfpProfessionalProfile"
        />

        <div>
          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{userData.userName || 'Όνομα'}</p>
          <br />
          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{userData.userLastName || 'Επώνυμο'}</p>

          <div className="phoneAndEmailProfessionalProfile">
            <div style={{ flexGrow: 1 }}>
              <p className="infoType">Τηλέφωνο:</p>
              <p className="infoBox">{userData.userPhone || 'Τηλέφωνο'}</p>
            </div>
            <div style={{ flexGrow: 1 }}>
              <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
              <p className="infoBox">{userData.email || 'Ηλεκτρονικό Ταχυδρομίο'}</p>
            </div>
          </div>

          <div>
            <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>

            <Card sx={{ maxWidth: 400, margin: '20px auto', padding: '10px', marginBottom: '40px' }}>
              <CardContent sx={{ maxHeight: 150, overflow: 'auto' }}>
                <Typography variant="body2" color="text.primary">
                  {userData.desc || 'Σύντομη Αυτοπαρουσίαση'}
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="buttonsProfessionalProfile">
            <div style={{ flexGrow: 1 }}>
              <button onClick={handleMore}>Περισσότερα</button>
              <button onClick={handleChange}>Επεξεργασία</button>
            </div>
            <div style={{ flexGrow: 1 }}>
              <button onClick={handleMyAds}>Οι Αγγελίες μου</button>
              <button className="logoutProfessionalProfile" onClick={handleLogout}>
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

export default ProfessionalProfile;
