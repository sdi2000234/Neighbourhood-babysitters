import React from 'react'
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import MessageField from '../../components/MessageField.jsx';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';

function WriteMessageParent() {

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
            <ParentNavigation currentNavPage={'parMes'}/>
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

            <br />
            <br />
            <div style={pageStyle}>
            <MessageField placeholder={"Αναζήτηση Επαγγελματία..."}/>
            </div>

            <Footer/>
        </>

    )
}

export default WriteMessageParent