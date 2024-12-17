import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page1 from './pages/arxiki';
import Page2 from './pages/dimiourgia_profile';
import Page3 from './pages/simfonitiko';
import Page4 from './pages/evresi_epaggelmatia';
import Page5 from './pages/epeksergasia_profile';
import Page6 from './pages/aitisi_sinergasias';
import Page7 from './pages/epeksergasia_aitisis_success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create-profile" element={<Page2 />} />
        <Route path="/current-agreement" element={<Page3 />} />
        <Route path="/search" element={<Page4 />} />
        <Route path="/edit-profile" element={<Page5 />} />
        <Route path="/request-collab" element={<Page6 />} />
        <Route path="/submitted" element={<Page7 />} />
      </Routes>
    </Router>
  );
};

export default App;
