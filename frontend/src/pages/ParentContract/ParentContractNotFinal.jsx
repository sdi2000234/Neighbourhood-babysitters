import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContractNotFinalCard from '../../components/ContractNotFinalCard';
import './ParentContractNotFinal.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Menu, MenuItem, Button } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';

function ParentContractNotFinal() {
  const breadcrumbPages = [
    { name: 'ΑΙΤΗΣΕΙΣ' },
    { name: 'ΠΡΟΣΩΡΙΝΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ' },
  ];

  // Ορισμός του array με τα δεδομένα 
  const ParentContractNotFinalData = [
    {
        number: "005",
        date: "12/2/25",
        pic: ""
    },
    {
        number: "004",
        date: "12/2/25",
        pic: ""
    },
    {
        number: "004",
        date: "12/2/25",
        pic: ""
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

  //Για περιήγηση σε υπολοιπες σελίδες
  const navigate = useNavigate();

  const handle1 = () => {
    navigate('../ParentContractFinal');
  };

  const handle2 = () => {
    navigate('../ParentContractNotNotFinal');
  };


  return (
    <>
      <ParentNavigation currentNavPage={'parHiReq'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='ParentContractNotFinalContainer'>

        <div className='card1 text-center'>

          <div className='card-header1'>

            <ul className='nav1 nav-tabs1 card-header-tabs'>
              <li className='nav-item1'>
                <button className='nav-link1 ' onClick={handle1}>ΟΡΙΣΤΙΚΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ</button>
              </li>
              <li className='nav-item1'>
                <button className='nav-link1 active' onClick={handle2}>ΠΡΟΣΩΡΙΝΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ</button>
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
                className='ButtonParentContractNotFinal'
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
            <div>
              {ParentContractNotFinalData.map((data, index) => (
                <div key={index}>
                  <ContractNotFinalCard
                    number={data.number}
                    date={data.date}
                    pic={data.pic}
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

export default ParentContractNotFinal;
