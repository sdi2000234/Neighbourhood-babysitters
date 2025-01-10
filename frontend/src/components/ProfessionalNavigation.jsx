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
                    <button className={currentNavPage==='profHome' ? 'currentNavPage' : 'profHome'}><a href="./ProfessionalHome">ΑΡΧΙΚΗ</a></button>
                    <button className={currentNavPage==='profAds' ? 'currentNavPage' : 'profAds'}><a href="./ProfessionalMyAds">ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</a></button>
                    <div class="dropdown">
                        <button className={(currentNavPage==='profRequests' || currentNavPage==='profAppointments') ? 'currentNavPage' : 'profRequests'}><a href="./ProfessionalCoOpRequests" >ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='profAppointments' ? 'currentNavPage' : 'profAppointments'} href="./ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='profRequests' ? 'currentNavPage' : 'profRequests'} href="./ProfessionalCoOpRequests">ΑΙΤΗΜΑΤΑ</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className={(currentNavPage==='profHiReq' || currentNavPage==='profHiCon' || currentNavPage==='profHiPay') ? 'currentNavPage' : 'profHistory'}><a href="./ProfessionalRequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='profHiReq' ? 'currentNavPage' : 'profHiReq'} href="./ProfessionalRequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profHiCon' ? 'currentNavPage' : 'profHiCon'} href="./ProfessionalContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a className={currentNavPage==='profHiPay' ? 'currentNavPage' : 'profHiPay'} href="./ProfessionalPaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div class="dropdown-content">
                            <a className={currentNavPage==='profProfile' ? 'currentNavPage' : 'profProfile'} href="./ProfessionalProfile">ΠΡΟΦΙΛ</a>
                            <a className={currentNavPage==='profMes' ? 'currentNavPage' : 'profMes'} href="./ProfessionalMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a className={currentNavPage==='profNot' ? 'currentNavPage' : 'profNot'} href="./ProfessionalNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profAp' ? 'currentNavPage' : 'profAp'} href="./ProfessionalAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='profReq' ? 'currentNavPage' : 'profReq'} href="./ProfessionalRequests">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='profRate' ? 'currentNavPage' : 'profRate'} href="./ProfessionalReviews">ΑΞΙΟΛΟΓΗΣΕΙΣ</a>
                            <a href="./WelcomePage">ΑΠΟΣΥΝΔΕΣΗ</a>
                        </div>
                </div>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
                <button><a href="./parHome" >Σύνδεση ως Γονέας/Κηδεμόνας</a></button>
            </div>
        </div>
    );
}

export default ProfessionalNavigation;