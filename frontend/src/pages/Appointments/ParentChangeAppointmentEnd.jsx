import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ParentChangeAppointmentEnd.css'
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentChangeAppointmentEnd() {
    
    const navigate = useNavigate();

    const breadcrumbPages = [
        { name: 'ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ'}  //ΙΣΩΣ ΘΕΛΕΙ ΕΞΤΡΑ "ΒΗΜΑΤΑ" ΕΔΩ
    ];

    const handleSubmit = () => {
        navigate('/ParentAllAppointments'); //ΠΡΕΠΕΙ ΝΑ ΑΛΛΑΖΟΥΝ ΚΑΙ ΤΑ ΣΤΟΙΧΕΙΑ ΣΤΗΝ ΣΕΛΙΔΑ
      };

    return (
    <>


        {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
        <Breadcrumbs page1={"ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"} link1={"../ParentHireProfessional"} page2={"ΕΠΕΞΕΡΓΑΣΙΑ ΡΑΝΤΕΒΟΥ"}/>

        <div class="personInfoApEnd">
            <div className='paragraphApEnd'>
                <p>Τα στοιχεία του Ραντεβού και ο/η Επαγγελματία ενημερώθηκαν.</p>
                <p>Παρακαλώ αναμένετε απάντηση.</p>
                <button className='myButtonApEnd' onClick={handleSubmit}>Μεταφορά στην σελίδα "Ραντεβού"</button>
            </div>
            
        </div>
        
        <Footer />

    </>
    )
}

export default ParentChangeAppointmentEnd