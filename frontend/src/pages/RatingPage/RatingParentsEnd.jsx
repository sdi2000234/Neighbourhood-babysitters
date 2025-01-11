import React from 'react'
import './RatingParentsEnd.css'
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import { useNavigate } from 'react-router-dom';

function RatingParentsEnd() {

    const breadcrumbPages = [
        { name: 'ΣΥΜΦΩΝΗΤΙΚΑ'},
        { name: 'ΛΗΞΗ'},
        { name: 'ΑΞΙΟΛΟΓΗΣΗ'}
    ];

    const navigate = useNavigate();

    const handleSubmit = () => { //ΝΑ ΑΛΛΑΧΘΕΙ  
      navigate('../ParentContractEnd');
    };

    return (
    <>


        <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

        <div class="personInfoApEnd">
            <div className='paragraphApEnd'>
                <p>Η αξιολόγησης σας καταγράφηκε.</p>
                <button className='myButtonApEnd' onClick={handleSubmit}>
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