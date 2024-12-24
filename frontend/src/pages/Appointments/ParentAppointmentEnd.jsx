import React from 'react'
import './ParentAppointmentEnd.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function ParentAppointmentEnd() {

    const breadcrumbPages = [
        { name: 'ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ'}  //ΙΣΩΣ ΘΕΛΕΙ ΕΞΤΡΑ "ΒΗΜΑΤΑ" ΕΔΩ
    ];

    return (
    <>

    <ParentNavigation currentNavPage={'parHire'}/>

        <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

        <div class="personInfoApEnd">
            <div className='paragraphApEnd'>
                <p>Η πρόσκληση για Ραντεβού στάλθηκε στην/στον Επαγγελματία.</p>
                <p>Παρακαλώ αναμένετε απάντηση.</p>
                <button className='myButtonApEnd'>Μεταφορά στην σελίδα "Ραντεβού"</button>
            </div>
            
        </div>
        
        <Footer />

    </>
    )
}

export default ParentAppointmentEnd