import React from 'react'
import './WriteMessageParent.css';
import { useNavigate } from 'react-router-dom';
// import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import MessageField from '../../components/MessageField.jsx';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

function WriteMessageParent() {

    const breadcrumbPages = [
        { name: 'ΜΗΝΥΜΑΤΑ'}  
    ];

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/MessageParent');
    };

    return (

        <>  
            {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
            <Breadcrumbs page1={"ΜΗΝΥΜΑΤΑ"}/>

            <br />
            <br />
            <div className='containerWriteMesParent'>

                <MessageField className='MessageFParent' placeholder={"Αναζήτηση Επαγγελματία..."}/>
                <button className='buttonWriteMParent' onClick={handleButton}>Πίσω στα Μηνύματα μου</button>

            </div>

            <Footer/>
        </>

    )
}

export default WriteMessageParent