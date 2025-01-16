import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// == Firebase imports (Add these if they are not already in your code) ==
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig'; // Make sure this file exports 'auth' and 'db'

// == Import your 3 possible headers ==
import Header_starter from './components/Header_starter';
import ProfessionalNavigation from './components/ProfessionalNavigation';
import ParentNavigation from './components/ParentNavigation';

// == Import Parent Pages ==
import ParentContractPayment from './pages/ParentContractPayment/ParentContractPayment';
import ParentContractEnd from './pages/ParentContractEnd/ParentContractEnd';
import ParentContractRenew from './pages/ParentContractEnd/ParentContractRenew';
// import ParentHireProfessional from './pages/ParentHireProfessional/ParentHireProfessional';

// == Import Professional Pages ==
import ProfessionalMyAds from './pages/ProfessionalMyAds/ProfessionalMyAds';
import ProfessionalCreateAd1 from './pages/ProfessionalMyAds/ProfessionalCreateAd1';
import ProfessionalCreateAd2 from './pages/ProfessionalMyAds/ProfessionalCreateAd2';
import ProfessionalCreateAd3 from './pages/ProfessionalMyAds/ProfessionalCreateAd3';
import ProfessionalCreateAd4 from './pages/ProfessionalMyAds/ProfessionalCreateAd4';

// == Import General Pages ==
import Page1 from './pages/WelcomePage.jsx';
import LoginPage from './pages/Login.jsx';
import DashboardPageParent from './pages/dashboard';
import DashboardPageProfessional from './pages/dashboard_professional.jsx';
import RegisterPage from './pages/Register';
import Page4 from './pages/FindProfessional.jsx';
import Page5 from './pages/EditProfileParent.jsx';
import ProfilePersonal from './pages/make_profile_parent.jsx'; 
import DimiourgiaProfileProfessional1 from './pages/make_profile_professional_1.jsx';
import DimiourgiaProfileProfessional2 from './pages/make_profile_professional_2.jsx';
import DimiourgiaProfileProfessional3 from './pages/make_profile_professional_3.jsx';
import FindProfessionalUnconnected from './pages/FindProfessional_unconnected.jsx'; 
import ProfessionalDetails from './pages/ProfessionalDetails';
import WhoWeAre from './pages/WhoWeAre.jsx'; 
import TermsForVoucher from './pages/TermsForVoucher';
import FindEmployment from './pages/FindEmployment.jsx'

// == Import Additional Pages ==
import RatingParents from './pages/RatingPage/RatingParents';
import RatingParentsEnd from './pages/RatingPage/RatingParentsEnd';
import RatingProfessional from './pages/RatingPage/RatingProfessional';

import ParentAppointment from './pages/Appointments/ParentAppointment.jsx';
import ParentAppointmentEnd from './pages/Appointments/ParentAppointmentEnd.jsx';
import ParentAllAppointments from './pages/Appointments/ParentAllAppointments.jsx';
import ProfessionalAllAppointments from './pages/Appointments/ProfessionalAllAppointments.jsx';
import ParentChangeAppointment from './pages/Appointments/ParentChangeAppointment.jsx';
import ParentChangeAppointmentEnd from './pages/Appointments/ParentChangeAppointmentEnd.jsx';

import ParentProfile from './pages/Profiles/ParentProfile.jsx';
import ProfessionalProfile from './pages/Profiles/ProfessionalProfile.jsx';

import HistoryParent1 from './pages/HistoryPage/HistoryParent1';
import HistoryParent2 from './pages/HistoryPage/HistoryParent2';
import HistoryParent3 from './pages/HistoryPage/HistoryParent3';

import HistoryProfessional1 from './pages/HistoryPage/HistoryProfessional1';
import HistoryProfessional2 from './pages/HistoryPage/HistoryProfessional2';
import HistoryProfessional3 from './pages/HistoryPage/HistoryProfessional3';

import MessageParent from './pages/MessagePage/MessageParent';
import MessageProfessional from './pages/MessagePage/MessageProfessional';

import NotificationsParent from './pages/NotificationsPage/NotificationsParent';
import NotificationsProfessional from './pages/NotificationsPage/NotificationsProfessional';

import WriteMessageParent from './pages/MessagePage/WriteMessageParent';
import WriteMessageProfessional from './pages/MessagePage/WriteMessageProfessional';

// == NEA ==
import ParentContractFinal from './pages/ParentContract/ParentContractFinal.jsx';
import ParentContractNotFinal from './pages/ParentContract/ParentContractNotFinal.jsx';
import ProfessionalContract from './pages/ProfessionalContract/ProfessionalContract.jsx';

const babysitterName = "Εύη Κωστοπούλου"; 
const userName = "ΙΩΑΝΝΑ";
const userLastName = "ΚΥΡΙΑΚΟΥ";
const userPhone = "6957264837";
const userEmail = "test@test.com";
const date = "24/02/25";
const time = "02:30";
const type = "Online";
const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla inventore iusto maiores harum, ipsa, mollitia, nam non maxime pariatur enim in alias quis obcaecati voluptate eligendi dolor omnis voluptatum recusandae.";
const address = "Αθηνα 2, 12478";
const link = "www.test.com";
const picLink = "";
const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloremque, dicta explicabo cupiditate, officiis repellat dignissimos ea tempora magni cumque facere eaque. Id non est quibusdam eius praesentium qui provident? Ea doloremque vero quis iste necessitatibus possimus temporibus nemo deserunt dolore, excepturi quaerat facere nulla et sapiente mollitia. Quas nihil asperiores necessitatibus mollitia, eos facere quidem excepturi magni sit ut. Aliquam debitis fugiat aspernatur excepturi in ea quis voluptates deserunt mollitia. Similique nam omnis assumenda nobis eligendi architecto accusantium ipsa, veniam aspernatur facere odit obcaecati consectetur commodi mollitia quos minus.';

// 1) Create a Layout that decides which Header & includes Footer
function Layout({ user, isKeeper, currentNavPage, children }) {
  let HeaderToShow;
  if (!user) {
    // Not logged in => show the starter header
    HeaderToShow = <Header_starter />;
  } else if (isKeeper) {
    // Logged in & isKeeper == true => show professional header
    HeaderToShow = <ProfessionalNavigation currentNavPage={currentNavPage} />;
  } else {
    // Logged in & isKeeper == false => show parent header
    HeaderToShow = <ParentNavigation currentNavPage={currentNavPage} />;
  }

  return (
    <>
      {HeaderToShow}
      {children}
    </>
  );
}

function App() {
  // Χρησιμοποιούμε το useLocation για να πάρουμε την τρέχουσα τοποθεσία μέσα στο Router
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation(); // Χρησιμοποιούμε το useLocation μέσα σε αυτό το component

  const [user, setUser] = useState(null);
  const [isKeeper, setIsKeeper] = useState(false);
  const [loading, setLoading] = useState(true);

  // Παίρνουμε την τρέχουσα διαδρομή και το τελευταίο κομμάτι του URL
  const currentNavPage = location.pathname.split('/').pop();

  // Έλεγχος της κατάστασης σύνδεσης του χρήστη και απόκτηση των στοιχείων του από το Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setIsKeeper(false);
        setLoading(false);
      } else {
        setUser(firebaseUser);

        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setIsKeeper(!!data.isKeeper);
          } else {
            setIsKeeper(false);
          }
        } catch (error) {
          console.error("Error checking if user is keeper:", error);
          setIsKeeper(false);
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout user={user} isKeeper={isKeeper} currentNavPage={currentNavPage}>
      <Routes>
        {/* General Routes */}
        <Route path='/' element={<Page1 />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPageParent />} />
        <Route path='/dashboard_professional' element={<DashboardPageProfessional />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/evresi_epaggelmatia' element={<Page4 />} />
        <Route path="/settings" element={<Page5 />} />
        <Route path="/profile-epeksergasia-parent" element={<ProfilePersonal />} />
        <Route path="/profesionaleditstep1" element={<DimiourgiaProfileProfessional1 />} />
        <Route path="/profesionaleditstep2" element={<DimiourgiaProfileProfessional2 />} />
        <Route path="/profesionaleditstep3" element={<DimiourgiaProfileProfessional3 />} />  
        <Route path="/FindProfessional_unconnected" element={<FindProfessionalUnconnected />} />
        <Route path="/professional-details" element={<ProfessionalDetails />} />
        <Route path="/WhoWeAre" element={<WhoWeAre />} />
        <Route path="/TermsForVoucher" element={<TermsForVoucher />} />
        <Route path="/FindEmployment" element={<FindEmployment />} />

        {/* Parent Routes */}
        <Route path='/ParentContractPayment' element={<ParentContractPayment />} />
        <Route path='/ParentContractEnd' element={<ParentContractEnd />} />
        <Route path='/ParentContractRenew' element={<ParentContractRenew />} />
        {/* <Route path='/ParentHireProfessional' element={<ParentHireProfessional />} /> */}
        <Route path='/ParentAppointment' element={<ParentAppointment />} />
        <Route path='/ParentAppointmentEnd' element={<ParentAppointmentEnd />} />
        <Route path='/ParentAllAppointments' element={<ParentAllAppointments />} />
        <Route path='/ParentProfile' element={<ParentProfile />} />
        <Route path='/RatingParents' element={<RatingParents />} />
        <Route path='/RatingParentsEnd' element={<RatingParentsEnd />} />
        <Route path='/HistoryParent1' element={<HistoryParent1 />} />
        <Route path='/HistoryParent2' element={<HistoryParent2 />} />
        <Route path='/HistoryParent3' element={<HistoryParent3 />} />
        <Route path='/MessageParent' element={<MessageParent />} />
        <Route path='/NotificationsParent' element={<NotificationsParent />} />
        <Route path='/WriteMessageParent' element={<WriteMessageParent />} />
        <Route path='/ParentContractFinal' element={<ParentContractFinal />} />
        <Route path='/ParentContractNotFinal' element={<ParentContractNotFinal/>} />

        {/* Professional Routes */}
        <Route path='/ProfessionalMyAds' element={<ProfessionalMyAds />} />
        <Route path='/ProfessionalCreateAd1' element={<ProfessionalCreateAd1 />} />
        <Route path='/ProfessionalCreateAd2' element={<ProfessionalCreateAd2 />} />
        <Route path='/ProfessionalCreateAd3' element={<ProfessionalCreateAd3 />} />
        <Route path='/ProfessionalCreateAd4' element={<ProfessionalCreateAd4 />} />
        <Route path='/ProfessionalContract' element={<ProfessionalContract />} />
        <Route path='/ProfessionalProfile' element={<ProfessionalProfile />} />
        <Route path='/HistoryProfessional1' element={<HistoryProfessional1 />} />
        <Route path='/HistoryProfessional2' element={<HistoryProfessional2 />} />
        <Route path='/HistoryProfessional3' element={<HistoryProfessional3 />} />
        <Route path='/MessageProfessional' element={<MessageProfessional />} />
        <Route path='/NotificationsProfessional' element={<NotificationsProfessional />} />
        <Route path='/WriteMessageProfessional' element={<WriteMessageProfessional />} />
        <Route path='/RatingProfessional' element={<RatingProfessional />} />
        <Route path='/ProfessionalAllAppointments' element={<ProfessionalAllAppointments />} />
        <Route path='/ParentChangeAppointmentEnd' element={<ParentChangeAppointmentEnd />} />
        <Route
            path='/ParentChangeAppointment'
            element={
              <ParentChangeAppointment
                babysitterName={babysitterName}
                userName={userName}
                userLastName={userLastName}
                userPhone={userPhone}
                userEmail={userEmail}
                prevDate={date}
                prevTime={time}
                initialMeetingType={type}
                initialMessage={message}
                initialAddress={address}
                initialLink={link}
              />
            }
          />
      </Routes>
    </Layout>
  );
}

export default App;
