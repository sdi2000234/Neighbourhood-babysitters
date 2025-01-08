import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProfessionalProfile.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Avatar} from "@mui/material";

import { Card, CardContent, Typography } from '@mui/material';

function ProfessionalProfile({userName , userLastName, userEmail , userPhone , picLink , desc}) {

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

  const handleMyAds = () => {
    navigate('/ProfessionalMyAds'); 
  };

  const handleLogOut = () => {
    navigate('/new-page'); 
  };

  return (
    <>
    <ProfessionalNavigation currentNavPage={'profProfile'}/>
    <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

    <div className='PersonInfoProfessionalProfile'>
      
      <h1>ΤΟ ΠΡΟΦΙΛ ΜΟΥ</h1>
      
      <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }}  className="PfpProfessionalProfile"/>

      <div>

          <p className="infoType">Όνομα:</p>
          <p className="infoBox">{userName==="" ? "Όνομα" : userName}</p>
          <br/>
          <p className="infoType">Επώνυμο:</p>
          <p className="infoBox">{userLastName==="" ? "Επώνυμο" : userLastName}</p>

          <div className="phoneAndEmailProfessionalProfile">
              <div style={{ flexGrow: 1 }}>
                  <p className="infoType">Τηλέφωνο:</p>
                  <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
              </div>
              <div style={{ flexGrow: 1 }}>
                  <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                  <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
              </div>
          </div>

          <div>
            <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>

            <Card sx={{ maxWidth: 400, margin: '20px auto', padding: '10px', marginBottom: '40px' }}>
              <CardContent sx={{ maxHeight: 150, overflow: 'auto' }}>
                  <Typography variant="body2" color="text.primary">
                      {desc}
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
                <button className='logoutProfessionalProfile' onClick={handleLogOut}>Αποσύνδεση</button>
              </div>
          </div>

      </div>
  </div>

    <Footer/>
    </>
  )
}

export default ProfessionalProfile