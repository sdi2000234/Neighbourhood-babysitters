// File: src/pages/ParentAllAppointments.jsx

import React, { useState, useEffect } from 'react';
import './ParentAllAppointments.css';
import Footer from '../../components/Footer';
import AppointmentCardProfessional from '../../components/AppointmentCardProfessional';
import Grid from '@mui/material/Grid2'; // Correct import for Grid2
import Breadcrumbs from '../../components/Breadcrumbs';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ParentAllAppointments() {
  const [connections, setConnections] = useState([]);
  const [professionalDetails, setProfessionalDetails] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // On mount, listen for auth changes & fetch connections
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await fetchConnections(firebaseUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch connections from Firestore
  const fetchConnections = async (userId) => {
    try {
      // Query connections where parentId == userId
      const connectionsQuery = query(collection(db, 'connections'), where('parentId', '==', userId));
      const connectionsSnapshot = await getDocs(connectionsQuery);

      const connectionsList = connectionsSnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      setConnections(connectionsList);

      // Also fetch professional details for each connection
      const professionalIds = [...new Set(connectionsList.map((conn) => conn.professionalId))];
      const professionals = await fetchProfessionals(professionalIds);
      setProfessionalDetails(professionals);

    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  // Fetch multiple professionals from 'users'
  const fetchProfessionals = async (professionalIds) => {
    const professionalData = {};
    for (const id of professionalIds) {
      try {
        const professionalDoc = await getDoc(doc(db, 'users', id));
        if (professionalDoc.exists()) {
          professionalData[id] = professionalDoc.data();
        }
      } catch (error) {
        console.error(`Error fetching professional (${id}):`, error);
      }
    }
    return professionalData;
  };

  // Helper: If dateString is missing, return some fallback
  const safeDateString = (dateString) => {
    if (!dateString) return '1970-01-01'; // fallback
    return dateString;
  };

  // For display in UI
  const formatDate = (dateString) => {
    const safeStr = safeDateString(dateString);
    const [year, month, day] = safeStr.split('-');
    return `${day}/${month}/${year}`;
  };

  // For sorting
  const convertToDateObject = (dateString) => {
    const safeStr = safeDateString(dateString);
    const [year, month, day] = safeStr.split('-');
    return new Date(+year, +month - 1, +day);
  };

  // Sort connections by date/time
  const sortedConnections = [...connections].sort((a, b) => {
    const dateA = convertToDateObject(a.details?.date);
    const dateB = convertToDateObject(b.details?.date);

    // If same date, compare times
    if (dateA.getTime() === dateB.getTime()) {
      const timeA = a.details?.time || '';
      const timeB = b.details?.time || '';
      return timeA.localeCompare(timeB);
    }
    return dateA - dateB;
  });

  return (
    <>
      <Breadcrumbs page1="ΡΑΝΤΕΒΟΥ" />

      {sortedConnections.length === 0 ? (
        <div className="no-appointments">
          <Typography variant="h6" gutterBottom mb={2}>
            Δεν υπάρχουν προγραμματισμένα Ραντεβού
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/FindProfessional_unconnected')}
            sx={{
              backgroundColor: '#013372',
              color: '#fff',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00264d',
              },
            }}
          >
            Βρείτε Επαγγελματία
          </Button>
        </div>
      ) : (
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          className="appointments"
        >
          {sortedConnections.map((connection) => {
            const details = connection.details || {};
            const professional = professionalDetails[connection.professionalId] || {};
            const { firstName, lastName, profileImage } = professional;

            // Make sure date/time exist
            const finalDate = details.date ? formatDate(details.date) : '—';
            const finalTime = details.time || '—';

            return (
              <Grid item xs={12} sm={6} md={4} key={connection.id}>
                <AppointmentCardProfessional
                  connectionId={connection.id}
                  picLink={profileImage || ''}
                  professionalName={`${firstName || ''} ${lastName || ''}`.trim()}
                  date={finalDate}
                  loc={details.location || '—'}
                  time={finalTime}
                  type={details.meetingType || '—'}
                  profId={connection.professionalId}
                />
              </Grid>
            );
          })}
        </Grid>
      )}

      <Footer />
    </>
  );
}

export default ParentAllAppointments;
