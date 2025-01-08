import React from 'react'
import './MessageProfessional.css';
import { useNavigate } from 'react-router-dom';
import Message from '../../components/Message';
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import SearchBar from "../../components/SearchBar";

function MessageProfessional() {

    const breadcrumbPages = [
        { name: 'ΜΗΝΥΜΑΤΑ' }
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

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/WriteMessageProfessional');
    };

    return (
        <>  

        <ProfessionalNavigation currentNavPage={'profMes'}/>
        <MyBreadcrumbs breadcrumbPages={breadcrumbPages} />

        <div className='MessageProfessionalContainer'>

            <div className='firstRowMesProf'>
                <div style={{ paddingBottom: 20, maxWidth: 400 }}>
                    <SearchBar placeholder="Αναζήτηση Συνομιλίας..." onSearch={handleSearch} />
                </div>
                <button className='customButtonProfMes' onClick={handleButton}>Στείλτε Μήνυμα</button>
            </div>

            <div className='MessagesProfessional'>
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

export default MessageProfessional