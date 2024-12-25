import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ParentContractPayment from './pages/ParentContractPayment/ParentContractPayment';
import ParentContractEnd from './pages/ParentContractEnd/ParentContractEnd';
import ParentContractRenew from './pages/ParentContractEnd/ParentContractRenew';
import ParentHireProfessional from './pages/ParentHireProfessional/ParentHireProfessional';
import ProfessionalMyAds from './pages/ProfessionalMyAds/ProfessionalMyAds';
import ProfessionalCreateAd1 from './pages/ProfessionalMyAds/ProfessionalCreateAd1';
import ProfessionalCreateAd2 from './pages/ProfessionalMyAds/ProfessionalCreateAd2';
import ProfessionalCreateAd3 from './pages/ProfessionalMyAds/ProfessionalCreateAd3';
import ProfessionalCreateAd4 from './pages/ProfessionalMyAds/ProfessionalCreateAd4';



function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ParentContractPayment' element={<ParentContractPayment/>}/>
        <Route path='/ParentContractEnd' element={<ParentContractEnd/>}/>
        <Route path='/ParentContractRenew' element={<ParentContractRenew/>}/>
        <Route path='/ParentHireProfessional' element={<ParentHireProfessional/>}/>
        <Route path='/ProfessionalMyAds' element={<ProfessionalMyAds/>}/>
        <Route path='/ProfessionalCreateAd1' element={<ProfessionalCreateAd1/>}/>
        <Route path='/ProfessionalCreateAd2' element={<ProfessionalCreateAd2/>}/>
        <Route path='/ProfessionalCreateAd3' element={<ProfessionalCreateAd3/>}/>
        <Route path='/ProfessionalCreateAd4' element={<ProfessionalCreateAd4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;