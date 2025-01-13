import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ParentAppointmentEnd.css'
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentAppointmentEnd() {

    const navigate = useNavigate();

    const handleContinue = (event) => { // Για button Αποστολή
        event.preventDefault(); // Αποτρέπει την προεπιλεγμένη υποβολή
        navigate('/ParentAllAppointments'); 
    };

    return (
    <>


        {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
        <Breadcrumbs page1={"ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"} link1={"../FindProfessional_unconnected"} page2={"ΕΠΕΞΕΡΓΑΣΙΑ ΡΑΝΤΕΒΟΥ"}/>

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