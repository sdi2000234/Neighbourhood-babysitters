import React, { useState } from 'react';
import HistoryLine from '../../components/HistoryLine';
import './HistoryProfessional1.css';
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Menu, MenuItem, Button } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';

function HistoryProfessional1() {
  const breadcrumbPages = [
    { name: 'ΙΣΤΟΡΙΚΟ' },
    { name: 'ΑΙΤΗΣΕΙΣ' },
  ];

  // Ορίστε το array με τα δεδομένα που θέλεις να εμφανίσεις για κάθε HistoryLine
  const historyData = [
    {
    pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
    text1: 'Αίτηση',
    text2: '#014',
    text3: 'Ημερομηνία:',
    text4: '26/10/2024',
    text5: 'Αποδοχή:',
    text6: 'ΝΑΙ',
    text7: 'Γονέας/Κηδεμόνας:',
    text8: 'Δώρα Τσουφλίδη'
    },
    {
    pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
    text1: 'Αίτηση',
    text2: '#014',
    text3: 'Ημερομηνία:',
    text4: '26/10/2024',
    text5: 'Αποδοχή:',
    text6: 'ΝΑΙ',
    text7: 'Γονέας/Κηδεμόνας:',
    text8: 'Δώρα Τσουφλίδη'
      },
    {
    pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
    text1: 'Αίτηση',
    text2: '#014',
    text3: 'Ημερομηνία:',
    text4: '26/10/2024',
    text5: 'Αποδοχή:',
    text6: 'ΝΑΙ',
    text7: 'Γονέας/Κηδεμόνας:',
    text8: 'Δώρα Τσουφλίδη'
    }
  ];

  // Κατάσταση για το ανοίγμα και το κλείσιμο του dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Λειτουργία για το άνοιγμα του dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Λειτουργία για το κλείσιμο του dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ProfessionalNavigation currentNavPage={'profHiReq'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='HistoryProfessional1Container'>
        
        <div className='card1 text-center'>
          
            <div className='card-header1'>
            <ul className='nav1 nav-tabs1 card-header-tabs'>
                <li className='nav-item1'>
                <a className='nav-link1 active' href='http://localhost:3000/HistoryProfessional1'>ΑΙΤΗΣΕΙΣ</a>
                </li>
                <li className='nav-item1'>
                <a className='nav-link1' href='http://localhost:3000/HistoryProfessional2'>ΣΥΜΦΩΝΗΤΙΚΑ</a>
                </li>
                <li className='nav-item1'>
                <a className='nav-link1' href='http://localhost:3000/HistoryProfessional3'>ΠΛΗΡΩΜΕΣ</a>
                </li>
            </ul>
            </div>

            {/* dropdown menu για ταξινόμηση το Material UI  */}
            <div>
              <Button 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                variant="contained" 
                className='ButtonHistoryProfessional1'
                endIcon={<img src={arrow_white} alt="arrow" style={{ width: '13px', height: '13px', marginLeft: '8px' }} />}
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

            <div className='card-body1'>
            <div className='HistoryProfessional1LineContainer'>
                {historyData.map((data, index) => (
                <div key={index}>
                    <HistoryLine
                    pic={data.pic}
                    text1={data.text1}
                    text2={data.text2}
                    text3={data.text3}
                    text4={data.text4}
                    text5={data.text5}
                    text6={data.text6}
                    text7={data.text7}
                    text8={data.text8}
                    />
                    <br />
                </div>
                ))}
            </div>
            </div>

        </div>
        
      </div>

      <Footer />
    </>
  );
}

export default HistoryProfessional1;
