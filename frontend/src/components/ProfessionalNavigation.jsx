import React from 'react'
import './NavigationBar.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
import arrow from '../assets/arrow_white.png'


function ProfessionalNavigation({currentNavPage})
{
    const userPfp = ""; //user's Pfp src

    return 	(
       <div>
            <div className="navBar">
                <img className="logo" alt="logo" src={govgr}/>
                <div className="navOptions">
                    <button className={currentNavPage==='profHome' ? 'currentNavPage' : 'profHome'}><a href="../pages/ProfessionalHome/ProfessionalHome">ΑΡΧΙΚΗ</a></button>
                    <button className={currentNavPage==='profAds' ? 'currentNavPage' : 'profAds'}><a href="../pages/ProfessionalMyAds/ProfessionalMyAds">ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</a></button>
                    <div class="dropdown">
                        <button className={(currentNavPage==='profRequests' || currentNavPage==='profAppointments') ? 'currentNavPage' : 'profRequests'}><a href="../pages/ProfessionalCoOpRequests/ProfessionalCoOpRequests" >ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='profAppointments' ? 'currentNavPage' : 'profAppointments'} href="./pages/ProfessionalAppointments/ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='profRequests' ? 'currentNavPage' : 'profRequests'} href="./pages/ProfessionalCoOpRequests/ProfessionalCoOpRequests">ΑΙΤΗΜΑΤΑ</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className={(currentNavPage==='profHiReq' || currentNavPage==='profHiCon' || currentNavPage==='profHiPay') ? 'currentNavPage' : 'profHistory'}><a href="../pages/ProfessionalHistory/RequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='profHiReq' ? 'currentNavPage' : 'profHiReq'} href="./pages/ProfessionalHistory/RequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profHiCon' ? 'currentNavPage' : 'profHiCon'} href="./pages/ProfessionalHistory/ContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a className={currentNavPage==='profHiPay' ? 'currentNavPage' : 'profHiPay'} href="./pages/ProfessionalHistory/PaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div class="dropdown-content">
                            <a className={currentNavPage==='profProfile' ? 'currentNavPage' : 'profProfile'} href="./pages/ProfessionalProfile/ProfessionalProfile">ΠΡΟΦΙΛ</a>
                            <a className={currentNavPage==='profMes' ? 'currentNavPage' : 'profMes'} href="./pages/ProfessionalProfile/ProfessionalMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a className={currentNavPage==='profNot' ? 'currentNavPage' : 'profNot'} href="./pages/ProfessionalProfile/ProfessionalNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profAp' ? 'currentNavPage' : 'profAp'} href="./pages/ProfessionalProfile/ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='profReq' ? 'currentNavPage' : 'profReq'} href="./pages/ProfessionalProfile/ProfessionalRequests">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profRate' ? 'currentNavPage' : 'profRate'} href="./pages/ProfessionalProfile/ProfessionalReviews">ΑΞΙΟΛΟΓΗΣΕΙΣ</a>
                            <a href="./pages/Home/Home">ΑΠΟΣΥΝΔΕΣΗ</a>
                        </div>
                </div>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
                <button><a href="../pages/profentHome/profentHome" >Σύνδεση ως Γονέας/Κηδεμόνας</a></button>
            </div>
        </div>
    );
}

export default ProfessionalNavigation;