import React from 'react'
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import MessageField from '../../components/MessageField.jsx';
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';

function WriteMessageProfessional() {

    const breadcrumbPages = [
        { name: 'ΜΗΝΥΜΑΤΑ'}  
    ];

    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
    };

    return (

        <>  
            <ProfessionalNavigation currentNavPage={'profMes'}/>
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

            <br />
            <br />
            <div style={pageStyle}>
            <MessageField placeholder={"Αναζήτηση Γονέα/Κηδεμόνα..."}/>
            </div>

            <Footer/>
        </>

    )
}

export default WriteMessageProfessional