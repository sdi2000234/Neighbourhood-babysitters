import './App.css';

// React router :)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
// import RatingParents from './pages/RatingPage/RatingParents';
// import RatingBabySitters from './pages/RatingPage/RatingBabySitters';

import ParentAppointment from './pages/Appointments/ParentAppointment.jsx';
import ParentAppointmentEnd from './pages/Appointments/ParentAppointmentEnd.jsx';
import ParentAllAppointments from './pages/Appointments/ParentAllAppointments.jsx';


function App() {
  const babysitterName = "Εύη Κωστοπούλου"; 
  const userName = "ΙΩΑΝΝΑ";
  const userLastName = "ΚΥΡΙΑΚΟΥ";
  const userPhone = "6957264837";
  const userEmail = "test@test.com";
  const date = "12/2/25";
  const time = "12:30";

  return (
    <BrowserRouter>
      <Routes>
        {/* ΔΙΚΟ ΜΟΥ */}
        {/* <Route path='/RatingParents' element={<RatingParents />} />  */}
        {/* ΔΙΚΟ ΜΟΥ */}
        {/* <Route path='/RatingBabySitters' element={<RatingBabySitters />} /> */}
        
        {/* ΔΙΚΟ ΜΟΥ */}
        <Route path='/ParentAppointment' element={<ParentAppointment babysitterName={babysitterName} userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} date={date} time={time}/>} />
        {/* ΔΙΚΟ ΜΟΥ */}
        <Route path='/ParentAppointmentEnd' element={<ParentAppointmentEnd />} />
        {/* ΔΙΚΟ ΜΟΥ */}
        <Route path='/ParentAllAppointments' element={<ParentAllAppointments />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
