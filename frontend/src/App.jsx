import './App.css';

// React router :)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
// import RatingParents from './pages/RatingPage/RatingParents';
// import RatingProfessional from './pages/RatingPage/RatingProfessional';

// import ParentAppointment from './pages/Appointments/ParentAppointment.jsx';
// import ParentAppointmentEnd from './pages/Appointments/ParentAppointmentEnd.jsx';
// import ParentAllAppointments from './pages/Appointments/ParentAllAppointments.jsx';
// import ProfessionalAllAppointments from './pages/Appointments/ProfessionalAllAppointments.jsx';
import ParentChangeAppointment from './pages/Appointments/ParentChangeAppointment.jsx';

// import ParentProfile from './pages/Profiles/ParentProfile.jsx'
// import ProfessionalProfile from './pages/Profiles/ProfessionalProfile.jsx'

// import HistoryParent1 from './pages/HistoryPage/HistoryParent1';
// import HistoryParent2 from './pages/HistoryPage/HistoryParent2';
// import HistoryParent3 from './pages/HistoryPage/HistoryParent3';

// import HistoryProfessional1 from './pages/HistoryPage/HistoryProfessional1';
// import HistoryProfessional2 from './pages/HistoryPage/HistoryProfessional2';
// import HistoryProfessional3 from './pages/HistoryPage/HistoryProfessional3';

// import MessageParent from './pages/MessagePage/MessageParent';
// import MessageProfessional from './pages/MessagePage/MessageProfessional';

// import NotificationsParent from './pages/NotificationsPage/NotificationsParent';
// import NotificationsProfessional from './pages/NotificationsPage/NotificationsProfessional';

// import WriteMessageParent from './pages/MessagePage/WriteMessageParent';
// import WriteMessageProfessional from './pages/MessagePage/WriteMessageProfessional';


function App() {
  const babysitterName = "Εύη Κωστοπούλου"; 
  const userName = "ΙΩΑΝΝΑ";
  const userLastName = "ΚΥΡΙΑΚΟΥ";
  const userPhone = "6957264837";
  const userEmail = "test@test.com";
  const date = "12/02/25";
  const time = "12:30";
  const type = "Online";
  const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla inventore iusto maiores harum, ipsa, mollitia, nam non maxime pariatur enim in alias quis obcaecati voluptate eligendi dolor omnis voluptatum recusandae."
  const address = "Αθηνα 2, 12478"
  const link = "www.test.com"

  const picLink = ""
  const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, doloremque, dicta explicabo cupiditate, officiis repellat dignissimos ea tempora magni cumque facere eaque. Id non est quibusdam eius praesentium qui provident? Ea doloremque vero quis iste necessitatibus possimus temporibus nemo deserunt dolore, excepturi quaerat facere nulla et sapiente mollitia. Quas nihil asperiores necessitatibus mollitia, eos facere quidem excepturi magni sit ut. Aliquam debitis fugiat aspernatur excepturi in ea quis voluptates deserunt mollitia. Similique nam omnis assumenda nobis eligendi architecto accusantium ipsa, veniam aspernatur facere odit obcaecati consectetur commodi mollitia quos minus.'
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/RatingParents' element={<RatingParents />} /> 
        <Route path='/RatingProfessional' element={<RatingProfessional />} />
        
        <Route path='/ParentAppointment' element={<ParentAppointment babysitterName={babysitterName} userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} date={date} time={time}/>} />
        <Route path='/ParentAppointmentEnd' element={<ParentAppointmentEnd />} />
        <Route path='/ParentAllAppointments' element={<ParentAllAppointments />} />
        <Route path='/ProfessionalAllAppointments' element={<ProfessionalAllAppointments />} /> */}
        <Route path='/ParentChangeAppointment' element={<ParentChangeAppointment babysitterName={babysitterName} userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} prevDate={date} prevTime={time} initialMeetingType={type} initialMessage={message} initialAddress={address} initialLink={link}/>} />

        {/* <Route path='/ParentProfile' element={<ParentProfile userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} picLink={picLink}/>} />
        <Route path='/ProfessionalProfile' element={<ProfessionalProfile userName={userName} userLastName={userLastName} userPhone={userPhone} userEmail={userEmail} picLink={picLink} desc={desc}/>} />


        <Route path='/HistoryParent1' element={<HistoryParent1 />} /> 
        <Route path='/HistoryParent2' element={<HistoryParent2 />} /> 
        <Route path='/HistoryParent3' element={<HistoryParent3 />} /> 

        <Route path='/HistoryProfessional1' element={<HistoryProfessional1 />} /> 
        <Route path='/HistoryProfessional2' element={<HistoryProfessional2 />} /> 
        <Route path='/HistoryProfessional3' element={<HistoryProfessional3 />} /> 

        <Route path='/MessageParent' element={<MessageParent />} />
        <Route path='/MessageProfessional' element={<MessageProfessional />} />

        <Route path='/NotificationsParent' element={<NotificationsParent />} />
        <Route path='/NotificationsProfessional' element={<NotificationsProfessional />} />

        <Route path='/WriteMessageParent' element={<WriteMessageParent />} />
        <Route path='/WriteMessageProfessional' element={<WriteMessageProfessional />} /> */}


      </Routes>
    </BrowserRouter>

  );
}

export default App;
