import React, { useState, useEffect } from 'react';
import './ParentAllAppointments.css';
import Footer from '../../components/Footer';
import AppointmentCardProfessional from '../../components/AppointmentCardProfessional';
import Grid from '@mui/material/Grid2'; // Correct import for Grid2
import Breadcrumbs from '../../components/Breadcrumbs';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig'; // Adjust the path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import { Button, Typography } from '@mui/material'; // Import Button and Typography
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ParentAllAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [connections, setConnections] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        await fetchAppointmentsAndConnections(firebaseUser.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAppointmentsAndConnections = async (userId) => {
    try {
      const appointmentsQuery = query(collection(db, 'appointments'), where('userId', '==', userId));
      const connectionsQuery = query(collection(db, 'connections'), where('parentId', '==', userId));
      
      const [appointmentsSnapshot, connectionsSnapshot] = await Promise.all([
        getDocs(appointmentsQuery),
        getDocs(connectionsQuery)
      ]);

      const appointmentsList = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const connectionsList = connectionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setAppointments(appointmentsList);
      setConnections(connectionsList);
    } catch (error) {
      console.error('Error fetching appointments and connections:', error);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const convertToDateObject = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day);
  };

  const findConnectionId = (appointmentId) => {
    const connection = connections.find(conn => conn.appointmentId === appointmentId);
    return connection ? connection.id : null;
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = convertToDateObject(a.date);
    const dateB = convertToDateObject(b.date);

    if (dateA.getTime() === dateB.getTime()) {
      return a.time.localeCompare(b.time);
    }
    return dateA - dateB;
  });

  return (
    <>
      <Breadcrumbs page1={"ΡΑΝΤΕΒΟΥ"} />

      {sortedAppointments.length === 0 ? (
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
                textTransform: 'none', // Ensures the text is not capitalized
                '&:hover': {
                backgroundColor: '#00264d', // Slightly darker shade for hover effect
                },
            }}
            >
            Βρείτε Επαγγελματία
            </Button>

        </div>
      ) : (
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start" className="appointments">
          {sortedAppointments.map((appointment) => {
            const connectionId = findConnectionId(appointment.id);

            return (
              <Grid item xs={12} sm={6} md={4} key={appointment.id}>
                <AppointmentCardProfessional 
                  id={appointment.id}
                  connectionId={connectionId}
                  picLink={appointment.link || appointment.location} 
                  professionalName={appointment.ProfessionalName} 
                  date={formatDate(appointment.date)}  
                  loc={appointment.link || appointment.location} 
                  time={appointment.time} 
                  type={appointment.meetingType} 
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
