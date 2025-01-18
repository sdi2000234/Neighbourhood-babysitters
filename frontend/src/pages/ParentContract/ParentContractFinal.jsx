// src/pages/ParentContractFinal.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContractFinalCard from '../../components/ContractFinalCard';
import './ParentContractFinal.css';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Menu, MenuItem, Button } from '@mui/material';
import arrow_white from '../../assets/arrow_white.png';
import { auth, db } from '../../firebaseConfig';
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function ParentContractFinal() {
  const breadcrumbPages = [
    { name: 'ΑΙΤΗΣΕΙΣ' },
    { name: 'ΟΡΙΣΤΙΚΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ' },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [contracts, setContracts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubAuth();
  }, []);

  // Show *all* statuses
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, 'notifications'),
      where('from', '==', currentUser.uid),
      orderBy('timestamp', 'desc')
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const arr = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      setContracts(arr);
    });
    return () => unsub();
  }, [currentUser]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Compute +1 month if no endContract
  const computeEndDate = (startStr) => {
    if (!startStr) return '';
    const d = new Date(startStr);
    if (isNaN(d)) return '';
    d.setMonth(d.getMonth() + 1);
    return d.toLocaleDateString('el-GR');
  };

  return (
    <>
      <Breadcrumbs
        page1="ΑΙΤΗΣΕΙΣ"
        link1="../ParentContractFinal"
        page2="ΟΡΙΣΤΙΚΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ"
      />

      <div className="ParentContractFinalContainer">
        <div className="card1 text-center">
          <div className="card-header1">
            <ul className="nav1 nav-tabs1 card-header-tabs">
              <li className="nav-item1">
                <button className="nav-link1 active">
                  ΟΡΙΣΤΙΚΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ
                </button>
              </li>
              <li className="nav-item1">
                <button
                  className="nav-link1"
                  onClick={() => navigate('../ParentContractNotFinal')}
                >
                  ΠΡΟΣΩΡΙΝΑ ΑΠΟΘΗΚΕΥΜΕΝΕΣ
                </button>
              </li>
            </ul>
          </div>

          {/* Sorting dropdown */}
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained"
              className="ButtonParentContractFinal"
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
            {contracts.length > 0 ? (
              contracts.map((data, index) => {
                let startDisp = 'N/A';
                if (data.startContract) {
                  const parsed = new Date(data.startContract);
                  if (!isNaN(parsed)) {
                    startDisp = parsed.toLocaleDateString('el-GR');
                  }
                }

                let finishDisp = 'N/A';
                if (data.endContract) {
                  const parsed2 = new Date(data.endContract);
                  if (!isNaN(parsed2)) {
                    finishDisp = parsed2.toLocaleDateString('el-GR');
                  }
                } else if (startDisp !== 'N/A') {
                  finishDisp = computeEndDate(data.startContract);
                }

                return (
                  <div key={data.id}>
                    <ContractFinalCard
                      // Show e.g. "Αίτηση #1"
                      number={`#${index + 1}`}
                      // name => professionalName
                      name={data.professionalName || 'N/A'}
                      start={startDisp}
                      finish={finishDisp}
                      status={data.status} 
                    />
                    <br />
                  </div>
                );
              })
            ) : (
              <p>Δεν υπάρχουν οριστικές αιτήσεις.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ParentContractFinal;
