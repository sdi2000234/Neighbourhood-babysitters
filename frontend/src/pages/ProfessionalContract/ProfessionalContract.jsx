import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContractProfessionalCard from '../../components/ContractProfessionalCard';
import './ProfessionalContract.css';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { Menu, MenuItem, Button } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';
import Breadcrumbs from '../../components/Breadcrumbs';

function ProfessionalContract() {
  const breadcrumbPages = [
    { name: 'ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ' },
    { name: 'ΑΙΤΗΣΕΙΣ' },
  ];

  // Ορισμός του array με τα δεδομένα 
  const ProfessionalContractData = [
    {
        type: 1,
        number: "004",
        name: "Μαρία Παπαδοπούλου",
        start: "12/2/25",
        finish: "12/2/25",
        age: "2 μηνών"
    },
    {
        type: 1,
        number: "004",
        name: "Μαρία Παπαδοπούλου",
        start: "12/2/25",
        finish: "12/2/25",
        age: "2 μηνών"
    },
    {
        type: 1,
        number: "004",
        name: "Μαρία Παπαδοπούλου",
        start: "12/2/25",
        finish: "12/2/25",
        age: "2 μηνών"
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
    navigate('../ProfessionalAllAppointments');
  };

  const handle2 = () => {
    navigate('../ProfessionalContract');
  };


  return (
    <>
      {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
      <Breadcrumbs page1={"ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ"} link1={"../ProfessionalContract"} page2={"ΑΙΤΗΣΕΙΣ"}/>

      <div className='ProfessionalContractContainer'>

        <div className='card1 text-center'>

          <div className='card-header1'>

            <ul className='nav1 nav-tabs1 card-header-tabs'>
              <li className='nav-item1'>
                <button className='nav-link1 ' onClick={handle1}>ΡΑΝΤΕΒΟΥ</button>
              </li>
              <li className='nav-item1'>
                <button className='nav-link1 active' onClick={handle2}>ΑΙΤΗΣΕΙΣ ΣΥΝΕΡΓΑΣΙΑΣ</button>
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
                className='ButtonProfessionalContract'
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
              {ProfessionalContractData.map((data, index) => (
                <div key={index}>
                  <ContractProfessionalCard
                    type={data.type}
                    number={data.number}
                    name={data.name}
                    start={data.start}
                    finish={data.finish}
                    age={data.age}
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

export default ProfessionalContract;
