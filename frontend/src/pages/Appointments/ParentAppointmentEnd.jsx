import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ParentAppointmentEnd.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function ParentAppointmentEnd() {

    const navigate = useNavigate();

    const breadcrumbPages = [
        { name: 'ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ'}  //ΙΣΩΣ ΘΕΛΕΙ ΕΞΤΡΑ "ΒΗΜΑΤΑ" ΕΔΩ
    ];

    const handleContinue = (event) => { // Για button Αποστολή
        event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή
        navigate('/ParentAllAppointments'); 
    };

    return (
    <>

    <ParentNavigation currentNavPage={'parHire'}/>

        <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

        <div class="personInfoApEnd">
            <div className='paragraphApEnd'>
                <p>Η πρόσκληση για Ραντεβού στάλθηκε στην/στον Επαγγελματία.</p>
                <p>Παρακαλώ αναμένετε απάντηση.</p>
                <button className='myButtonApEnd' onClick={handleContinue}>Μεταφορά στην σελίδα "Ραντεβού"</button>
            </div>
            
        </div>
        
        <Footer />

    </>
    )
}

export default ParentAppointmentEnd