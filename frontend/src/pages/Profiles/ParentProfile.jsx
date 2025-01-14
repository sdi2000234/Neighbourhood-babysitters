import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import της signOut
import { auth } from '../../firebaseConfig'; // Το αρχείο διαμόρφωσης Firebase
import './ParentProfile.css'
import Footer from '../../components/Footer';
import { Avatar} from "@mui/material";
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentProfile({userName , userLastName, userEmail , userPhone , picLink})
{
  // Συνάρτηση για την αποσύνδεση του χρήστη
  const handleLogout = async () => {
    try
    {
      await signOut(auth); // Αποσύνδεση από το Firebase
      console.log("Ο χρήστης αποσυνδέθηκε επιτυχώς.");
      window.location.href = './'; // Ανακατεύθυνση στην αρχική σελίδα
    }
    catch (error)
    {
      console.error("Σφάλμα κατά την αποσύνδεση:", error);
    }
  };

  const navigate = useNavigate();
  const handleMore = () => { navigate('/new-page'); };
  const handleChange = () => { navigate('/profile-epeksergasia-parent'); };
  const handleMoreAds = () => { navigate('../ParentHireProfessional'); };

  return (
    <>
    <Breadcrumbs page1={"ΠΡΟΦΙΛ"}/>

    <div className='PersonInfoParentProfile'>
      
      <h1>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h1>
      
      <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }}  className="PfpParentProfile"/>

      <div>
        <p className="infoType">Όνομα:</p>
        <p className="infoBox">{userName==="" ? "Όνομα" : userName}</p>
        <br/>
        <p className="infoType">Επώνυμο:</p>
        <p className="infoBox">{userLastName==="" ? "Επώνυμο" : userLastName}</p>

        <br/>
        <p className="infoType">Τηλέφωνο:</p>
        <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
        <br/>
        <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
        <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
        <br/>

        {/* <div className="phoneAndEmailParentProfile">
          <div style={{ flexGrow: 1 }}>
            <p className="infoType">Τηλέφωνο:</p>
            <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
            <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
          </div>
        </div> */}

        <div className="buttonsParentProfile">
          <div style={{ flexGrow: 1 }}>
            <button onClick={handleMore}>Περισσότερα</button>
            <button onClick={handleChange}>Επεξεργασία</button>
          </div>
          <div style={{ flexGrow: 1 }}>
            <button onClick={handleMoreAds}>Αγαπημένες Αγγελίες</button>
            <button className='logoutParentProfile' onClick={handleLogout}>Αποσύνδεση</button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default ParentProfile;