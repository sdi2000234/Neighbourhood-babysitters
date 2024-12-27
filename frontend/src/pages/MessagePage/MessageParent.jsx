import React from 'react'
import './MessageParent.css';
import Message from '../../components/Message';
// import ParentNavigation from '../../components/MessagePage';
// import Footer from '../../components/Footer';
// import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function MessageParent() {
    return (
        <>  
            <Message
                picLink="Pfp"
                name="Αγγελική Χριστοπούλου"
                content="Lorem ipsum dolor sit amet et delectus accommodare his consul copio..."
                date="30/11/2024"
            />
        </>
    )
}

export default MessageParent