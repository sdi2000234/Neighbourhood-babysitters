import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ParentProfile.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Avatar} from "@mui/material";

function ParentProfile({userName , userLastName, userEmail , userPhone , picLink}) {

  const breadcrumbPages = [
    { name: 'ΠΡΟΦΙΛ'}  
  ];

  const navigate = useNavigate();

  const handleMore = () => {
    navigate('/new-page'); 
  };

  const handleChange = () => {
    navigate('/new-page'); 
  };

  const handleMoreAds = () => {
    navigate('/../ParentHireProfessional'); 
  };

  const handleLogOut = () => {
    navigate('/new-page'); 
  };

  return (
    <>
    <ParentNavigation currentNavPage={'parProfile'}/>
    <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

    <div className='PersonInfoParentProfile'>
      
      <h1>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h1>
      
      <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }}  className="PfpParentProfile"/>

      <div>

          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{userName==="" ? "Όνομα" : userName}</p>
          <br/>
          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{userLastName==="" ? "Επώνυμο" : userLastName}</p>

          <div className="phoneAndEmailParentProfile">
              <div style={{ flexGrow: 1 }}>
                  <p className="infoType">Τηλέφωνο:</p>
                  <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
              </div>
              <div style={{ flexGrow: 1 }}>
                  <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                  <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
              </div>
          </div>

          <div className="buttonsParentProfile">
              <div style={{ flexGrow: 1 }}>
                  <button onClick={handleMore}>Περισσότερα</button>
                  <button onClick={handleChange}>Επεξεργασία</button>
                  
              </div>
              <div style={{ flexGrow: 1 }}>
                <button onClick={handleMoreAds}>Αγαπημένες Αγγελίες</button>
                <button className='logoutParentProfile' onClick={handleLogOut}>Αποσύνδεση</button>
              </div>
          </div>

      </div>
  </div>

    <Footer/>
    </>
  )
}

export default ParentProfile