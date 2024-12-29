import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryLine from '../../components/HistoryLine';
import './HistoryParent2.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Menu, MenuItem, Button } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';

function HistoryParent2() {
  const breadcrumbPages = [
    { name: 'ΙΣΤΟΡΙΚΟ' },
    { name: 'ΣΥΜΦΩΝΗΤΙΚΟ' },
  ];

  // Ορίστε το array με τα δεδομένα που θέλεις να εμφανίσεις για κάθε HistoryLine
  const historyData = [
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
    },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
      },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
    },
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
  
  //Για περιήγηση σε υπολοιπες σελίδες
  const navigate = useNavigate();

  const handle1 = () => {
    navigate('../HistoryParent1');
  };

  const handle2 = () => {
    navigate('../HistoryParent2');
  };

  const handle3 = () => {
    navigate('../HistoryParent3');
  };

  return (
    <>
      <ParentNavigation currentNavPage={'parHiCon'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='HistoryParent2Container'>

        <div className='card2 text-center'>

          <div className='card-header2'>

            <ul className='nav2 nav-tabs2 card-header-tabs'>
              <li className='nav-item2'>
                <button className='nav-link2' onClick={handle1}>ΑΙΤΗΣΕΙΣ</button>
              </li>
              <li className='nav-item2'>
                <button className='nav-link2 active' onClick={handle2}>ΣΥΜΦΩΝΗΤΙΚΑ</button>
              </li>
              <li className='nav-item2'>
                <button className='nav-link2' onClick={handle3}>ΠΛΗΡΩΜΕΣ</button>
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
                className='ButtonHistoryParent2'
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

          <div className='card-body2'>
            <div className='HistoryParent2LineContainer'>
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

export default HistoryParent2;
