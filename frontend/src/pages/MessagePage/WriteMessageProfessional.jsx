import React from 'react'
import './WriteMessageProfessional.css';
import { useNavigate } from 'react-router-dom';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import MessageField from '../../components/MessageField.jsx';
import Footer from '../../components/Footer';

function WriteMessageProfessional() {

    const breadcrumbPages = [
        { name: 'ΜΗΝΥΜΑΤΑ'}  
    ];

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/MessageProfessional');
    };

    return (

        <>  
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

            <br />
            <br />
            <div className='containerWriteMesProfessional'>

                <MessageField className='MessageFProfessional' placeholder={"Αναζήτηση Επαγγελματία..."}/>
                <button className='buttonWriteMProfessional' onClick={handleButton}>Πίσω στα Μηνύματα μου</button>

            </div>

            <Footer/>
        </>

    )
}

export default WriteMessageProfessional