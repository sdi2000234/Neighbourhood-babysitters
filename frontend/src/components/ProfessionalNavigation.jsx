import React from 'react'
import './NavigationBar.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
import arrow from '../assets/arrow_white.png'


function ProfessionalNavigation()
{
    const userPfp = ""; //user's Pfp src

    return 	(
       <div>
            <div className="navBar">
                <img className="logo" alt="logo" src={govgr}/>
                <div className="navOptions">
                    <button className='profHome'><a href="../pages/ProfessionalHome/ProfessionalHome">ΑΡΧΙΚΗ</a></button>
                    <button className='profAds'><a href="../pages/ProfessionalMyAds/ProfessionalMyAds">ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</a></button>
                    <div class="dropdown">
                        <button className='profRequests'><a href="../pages/ProfessionalCoOpRequests/ProfessionalCoOpRequests" >ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a href="./pages/ProfessionalAppointments/ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a href="./pages/ProfessionalCoOpRequests/ProfessionalCoOpRequests">ΑΙΤΗΜΑΤΑ</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className='profHistory'><a href="../pages/ProfessionalHistory/RequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a href="./pages/ProfessionalHistory/RequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a href="./pages/ProfessionalHistory/ContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a href="./pages/ProfessionalHistory/PaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div class="dropdown-content">
                            <a href="./pages/ProfessionalProfile/ProfessionalProfile">ΠΡΟΦΙΛ</a>
                            <a href="./pages/ProfessionalProfile/ProfessionalMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a href="./pages/ProfessionalProfile/ProfessionalNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a href="./pages/ProfessionalProfile/ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a href="./pages/ProfessionalProfile/ProfessionalReviews">ΑΙΤΗΣΕΙΣ</a>
                            <a href="./pages/ProfessionalProfile/ProfessionalRequests">ΑΞΙΟΛΟΓΗΣΕΙΣ</a>
                            <a href="./pages/Home/Home">ΑΠΟΣΥΝΔΕΣΗ</a>
                        </div>
                </div>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
                <button><a href="../pages/ParentHome/ParentHome" >Σύνδεση ως Γονέας/Κηδεμόνας</a></button>
            </div>
        </div>
    );
}

export default ProfessionalNavigation;