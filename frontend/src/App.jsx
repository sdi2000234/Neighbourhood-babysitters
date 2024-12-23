import './App.css';

// React router :)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import RatingParents from './pages/RatingPage/RatingParents';
import RatingBabySitters from './pages/RatingPage/RatingBabySitters';
import ParentContractRenew from './pages/ParentContractEnd/ParentContractRenew';
import ParentContractEnd from './pages/ParentContractEnd/ParentContractEnd';
import ParentContractPayment from './pages/ParentContractPayment/ParentContractPayment.jsx';
import ProfessionalCreateAd1 from './pages/ProfessionalMyAds/ProfessionalCreateAd1.jsx';
import ProfessionalCreateAd2 from './pages/ProfessionalMyAds/ProfessionalCreateAd2.jsx';
import ProfessionalCreateAd3 from './pages/ProfessionalMyAds/ProfessionalCreateAd3.jsx';
import ProfessionalCreateAd4 from './pages/ProfessionalMyAds/ProfessionalCreateAd4.jsx';
import ParentAppointment from './pages/Appointments/ParentAppointment.jsx';

function App() {
  const babysitterName = "Μαρία"; 
  const userName = "ΙΩΑΝΝΑ";
  const userLastName = "ΚΥΡΙΑΚΟΥ";
  const userPhone = "6957264837";
  const userEmail = "test@test.com";
  const date = "12/2/25";
  const time = "12:30";

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/RatingParents' element={<RatingParents />} />
        <Route path='/RatingBabySitters' element={<RatingBabySitters />} />
        <Route path='/ParentContractRenew' element={<ParentContractRenew />} />
        <Route path='/ParentContractEnd' element={<ParentContractEnd />} />
        <Route path='/ParentContractPayment' element={<ParentContractPayment />} />
        <Route path='/ProfessionalCreateAd1' element={<ProfessionalCreateAd1 />} />
        <Route path='/ProfessionalCreateAd2' element={<ProfessionalCreateAd2 />} />
        <Route path='/ProfessionalCreateAd3' element={<ProfessionalCreateAd3 />} />
        <Route path='/ProfessionalCreateAd4' element={<ProfessionalCreateAd4 />} />
        <Route path='/ParentAppointment' element={<ParentAppointment babysitterName={babysitterName} userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} date={date} time={time}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
