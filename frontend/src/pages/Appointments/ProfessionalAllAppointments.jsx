import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentCardParent from '../../components/AppointmentCardParent';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import Grid from '@mui/material/Grid2';
import './ProfessionalAllAppointments.css';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function ProfessionalAllAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [parentsData, setParentsData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        fetchAppointments(firebaseUser.uid);
      } else {
        setUser(null);
        setAppointments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchAppointments = async (professionalId) => {
    try {
      const q = query(
        collection(db, 'connections'),
        where('type', '==', 'appointment'),
        where('professionalId', '==', professionalId)
      );
      const querySnapshot = await getDocs(q);
      const fetchedAppointments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Fetch parent details for each appointment
      const parentsMap = {};
      await Promise.all(
        fetchedAppointments.map(async (appointment) => {
          const parentId = appointment.parentId;
          if (!parentsMap[parentId]) {
            const parentDoc = await getDoc(doc(db, 'users', parentId));
            if (parentDoc.exists()) {
              parentsMap[parentId] = parentDoc.data();
            }
          }
        })
      );
      setParentsData(parentsMap);
      setAppointments(fetchedAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const convertToDateObject = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  const convertTo24HourFormat = (timeString) => {
    const [time, period] = timeString.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);

    if (period === 'μμ' && hours !== 12) {
      hours += 12;
    } else if (period === 'πμ' && hours === 12) {
      hours = 0;
    }

    return new Date(2000, 0, 1, hours, minutes);
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = convertToDateObject(a.details.date);
    const dateB = convertToDateObject(b.details.date);

    if (dateA.getTime() === dateB.getTime()) {
      const timeA = convertTo24HourFormat(a.details.time);
      const timeB = convertTo24HourFormat(b.details.time);
      return timeA - timeB;
    }

    return dateA - dateB;
  });

  const handle1 = () => {
    navigate('../ProfessionalAllAppointments');
  };

  const handle2 = () => {
    navigate('../ProfessionalContract');
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Breadcrumbs page1={"ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ"} link1={"../ProfessionalContract"} page2={"ΡΑΝΤΕΒΟΥ"} />

      <div className='ProfessionalAllAppointments'>
        <div className='card1 text-center'>
          <div className='card-header1'>
            <ul className='nav1 nav-tabs1 card-header-tabs'>
              <li className='nav-item1'>
                <button className='nav-link1 active' onClick={handle1}>ΡΑΝΤΕΒΟΥ</button>
              </li>
              <li className='nav-item1'>
                <button className='nav-link1 ' onClick={handle2}>ΑΙΤΗΣΕΙΣ ΣΥΝΕΡΓΑΣΙΑΣ</button>
              </li>
            </ul>
          </div>

          <Grid container spacing={4} justifyContent="center" alignItems="flex-start" className="appointmentsProfessionals">
            {sortedAppointments.map((appointment) => {
              const parentDetails = parentsData[appointment.parentId] || {};
              const parentName = `${parentDetails.firstName || ''} ${parentDetails.lastName || ''}`.trim();
              return (
                <Grid item xs={12} sm={6} md={4} key={appointment.id}>
                  <AppointmentCardParent 
                    id={appointment.id}
                    picLink={appointment.details.picLink || ''} 
                    parentName={parentName} 
                    date={formatDate(appointment.details.date) || ''} 
                    time={appointment.details.time || ''} 
                    loc={appointment.details.location || ''} 
                    loc2={parentDetails.careArea ||parentDetails.area || ''}
                    childAge={parentDetails.kidsAge || ''}
                    type={appointment.details.type || ''} 
                    state={appointment.details.status || ''}
                    comments={appointment.details.message || ''}
                    email={parentDetails.email || ''}
                    phone={parentDetails.phone || ''}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default ProfessionalAllAppointments;
