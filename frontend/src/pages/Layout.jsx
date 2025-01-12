// Layout.jsx
import React from 'react';
import HeaderStarter from './components/Header_starter';
import ProfessionalNavigation from './components/ProfessionalNavigation';
import ParentNavigation from './components/ParentNavigation';

function Layout({ user, isKeeper, children }) {
  let HeaderComponent = null;

  // Decide which header to show:
  if (!user) {
    // Not logged in:
    HeaderComponent = <HeaderStarter />;
  } else if (isKeeper) {
    // Logged in, isKeeper == true:
    HeaderComponent = <ProfessionalNavigation />;
  } else {
    // Logged in, isKeeper == false:
    HeaderComponent = <ParentNavigation />;
  }

  return (
    <>
      {HeaderComponent}
      {/* Page content here */}
      {children}
    </>
  );
}

export default Layout;
