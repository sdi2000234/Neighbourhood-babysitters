import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ParentChangeAppointmentEnd.css'
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

function ParentChangeAppointmentEnd() {
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/ParentAllAppointments'); //ΠΡΕΠΕΙ ΝΑ ΑΛΛΑΖΟΥΝ ΚΑΙ ΤΑ ΣΤΟΙΧΕΙΑ ΣΤΗΝ ΣΕΛΙΔΑ
      };

    return (
    <>


        {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
        <Breadcrumbs page1={"ΡΑΝΤΕΒΟΥ"} link1={"../ParentAllAppointments"} page2={"ΕΠΕΞΕΡΓΑΣΙΑ ΡΑΝΤΕΒΟΥ"}/>

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