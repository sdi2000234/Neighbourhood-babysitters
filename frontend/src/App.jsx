import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import All Pages
import Page1 from './pages/arxiki'; // Home Page
import Page2 from './pages/dimiourgia_profile'; // Profile Creation Page
import Page3 from './pages/simfonitiko'; // Agreement Page
import Page4 from './pages/evresi_epaggelmatia'; // Find Professional Page
import Page5 from './pages/epeksergasia_profile'; // Edit Profile Page
import Page6 from './pages/aitisi_sinergasias'; // Collaboration Request Page
import Page7 from './pages/epeksergasia_aitisis_success'; // Application Success Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for All Pages */}
        <Route path="/" element={<Page1 />} /> {/* Home Page */}
        <Route path="/profile" element={<Page2 />} /> {/* Profile Creation Page */}
        <Route path="/agreement" element={<Page3 />} /> {/* Agreement Page */}
        <Route path="/find-professional" element={<Page4 />} /> {/* Find Professional */}
        <Route path="/edit-profile" element={<Page5 />} /> {/* Edit Profile */}
        <Route path="/collaboration-request" element={<Page6 />} /> {/* Collaboration Request */}
        <Route path="/application-success" element={<Page7 />} /> {/* Application Success */}
      </Routes>
    </Router>
  );
};

export default App;
