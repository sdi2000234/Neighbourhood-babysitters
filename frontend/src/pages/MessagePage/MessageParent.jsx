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
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="30/11/2024"
            />
            <br />
            <Message
                picLink="Pfp"
                name="Αγγελική Χριστοπούλου"
                content="Γεια"
                date="30/11/2024"
            />
        </>
    )
}

export default MessageParent