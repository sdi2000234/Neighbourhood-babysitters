import React, { useState, useEffect } from 'react';
import './ParentAllAppointments.css';
import Footer from '../../components/Footer';
import AppointmentCardProfessional from '../../components/AppointmentCardProfessional';
import Grid from '@mui/material/Grid2'; // Correct import for Grid2
import Breadcrumbs from '../../components/Breadcrumbs';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig'; // Adjust the path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import { Button, Typography } from '@mui/material'; // Import Button and Typography
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ParentAllAppointments() {
  const [connections, setConnections] = useState([]);
  const [professionalDetails, setProfessionalDetails] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await fetchConnections(firebaseUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchConnections = async (userId) => {
    try {
      // Query connections where the parentId matches the user's ID
      const connectionsQuery = query(collection(db, 'connections'), where('parentId', '==', userId));
      const connectionsSnapshot = await getDocs(connectionsQuery);

      const connectionsList = connectionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setConnections(connectionsList);

      // Fetch professional details for all connections
      const professionalIds = [...new Set(connectionsList.map((conn) => conn.professionalId))]; // Unique IDs
      const professionals = await fetchProfessionals(professionalIds);
      setProfessionalDetails(professionals);
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  const fetchProfessionals = async (professionalIds) => {
    const professionalData = {};

    // Fetch each professional's details from the users collection
    for (const id of professionalIds) {
      try {
        const professionalDoc = await getDoc(doc(db, 'users', id));
        if (professionalDoc.exists()) {
          professionalData[id] = professionalDoc.data(); // Store the professional's data in the dictionary
        }
      } catch (error) {
        console.error(`Error fetching professional (${id}):`, error);
      }
    }

    return professionalData;
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const convertToDateObject = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day);
  };

  const sortedConnections = [...connections].sort((a, b) => {
    const dateA = convertToDateObject(a.details.date);
    const dateB = convertToDateObject(b.details.date);

    if (dateA.getTime() === dateB.getTime()) {
      return a.details.time.localeCompare(b.details.time);
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
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start" className="appointments">
          {sortedConnections.map((connection) => {
            const details = connection.details;
            const professional = professionalDetails[connection.professionalId] || {};
            const { firstName, lastName, profileImage } = professional;

            return (
              <Grid item xs={12} sm={6} md={4} key={connection.id}>
                <AppointmentCardProfessional
                  connectionId={connection.id}
                  picLink={profileImage || ''} // Use profileImage if available
                  professionalName={`${firstName || ''} ${lastName || ''}`.trim()} // Combine firstName and lastName
                  date={formatDate(details.date)} // Format the date for display
                  loc={details.location} // Appointment location
                  time={details.time} // Appointment time
                  type={details.meetingType} // Meeting type (e.g., online or in-person)
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
