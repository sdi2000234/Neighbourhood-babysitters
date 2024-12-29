import React from 'react'
import './RatingParentsEnd.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function RatingParentsEnd() {

    const breadcrumbPages = [
        { name: 'ΣΥΜΦΩΝΗΤΙΚΑ'},
        { name: 'ΛΗΞΗ'},
        { name: 'ΑΞΙΟΛΟΓΗΣΗ'}
    ];

    return (
    <>

    <ParentNavigation currentNavPage={'parEnd'}/>

        <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

        <div class="personInfoApEnd">
            <div className='paragraphApEnd'>
                <p>Η αξιολόγησης σας καταγράφηκε.</p>
                <button className='myButtonApEnd'>
                    <p>Μεταφορά στην σελίδα</p>
                    <p>"Λήξη Συμφωνητικών"</p>
                </button>
            </div>
            
        </div>
        
        <Footer />

    </>
    )
}

export default RatingParentsEnd