import React from 'react'
import './NotificationsParent.css';
import Message from '../../components/Message';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import SearchBar from "../../components/SearchBar";

function NotificationsParent() {

    const breadcrumbPages = [
        { name: 'ΕΙΔΟΠΟΙΗΣΕΙΣ' }
    ];

    // Ορισμός του array με τα δεδομένα 
    const historyData = [
    {
        picLink: "Pfp",
        name: "Αγγελική Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    },
    {
        picLink: "Pfp",
        name: "Αγγελική Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    },
    {
        picLink: "Pfp",
        name: "Ελένη Χριστοπούλου",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: "30/11/2024"
    }

    ];

    const handleSearch = (query) => {
        alert("Αναζήτηση για:", query);
    };


    return (
        <>  

        <ParentNavigation currentNavPage={'parNot'}/>
        <MyBreadcrumbs breadcrumbPages={breadcrumbPages} />

        <div className='NotificationsParentContainer'>

            <div style={{ paddingBottom: 20, maxWidth: 400 }}>
                <SearchBar placeholder="Αναζήτηση Συνομιλίας..." onSearch={handleSearch} />
            </div>

            <div className='NotificationssParent'>
            {historyData.map((data, index) => (
                <div key={index}>
                <Message
                    picLink={data.picLink}
                    name={data.name}
                    content={data.content}
                    date={data.date}
                />
                <br />
                </div>
            ))}
            </div>


      </div>

            <Footer/>
        </>
    )
}

export default NotificationsParent