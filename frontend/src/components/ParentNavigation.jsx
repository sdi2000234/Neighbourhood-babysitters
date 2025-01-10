import React from 'react'
import './NavigationBar.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
import arrow from '../assets/arrow_white.png'
import arrowBlack from '../assets/arrow_black.png'


function ParentNavigation({currentNavPage})
{
	const userPfp = ""; //user's Pfp src

	return 	(
        <div>
    		<div className="navBar">
                <img className="logo" alt="logo" src={govgr}/>
                <div className="switchRole">
                    <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
                    <button><a href="./profHome" >Σύνδεση ως Επαγγελματίας</a></button>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div className="dropdown-content">
                            <a className={currentNavPage==='parProfile' ? 'currentNavPage' : 'parProfile'} href="./ParentProfile">ΠΡΟΦΙΛ</a>
                            <a className={currentNavPage==='parMes' ? 'currentNavPage' : 'parMes'} href="./ParentMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a className={currentNavPage==='parNot' ? 'currentNavPage' : 'parNot'} href="./ParentNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a className={currentNavPage==='parAp' ? 'currentNavPage' : 'parAp'} href="./ParentAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='parReq' ? 'currentNavPage' : 'parReq'} href="./ParentRequests">ΑΙΤΗΣΕΙΣ</a>
                            <a href="./Home">ΑΠΟΣΥΝΔΕΣΗ</a>
                        </div>
                </div>
            </div>
            <div className="parentBar">
                <div className="navOptions">
                    <button className={currentNavPage==='parHome' ? 'currentNavPage' : 'parHome'}><a href="./ParentHome">ΑΡΧΙΚΗ</a></button>
                    <button className={currentNavPage==='parFind' ? 'currentNavPage' : 'parFind'}><a href="./ParentFindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <button className={currentNavPage==='parHire' ? 'currentNavPage' : 'parHire'}><a href="./ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <div className="dropdown">
                        <button className={(currentNavPage==='parPay' || currentNavPage==='parEnd') ? 'currentNavPage' : 'parContract'}><a href="./ParentContractPayment" >ΣΥΜΦΩΝΗΤΙΚΟ<img className="arrow" alt="arrow" src={arrowBlack}/></a></button>
                        <div className="dropdown-content">
                            <a className={currentNavPage==='parPay' ? 'currentNavPage' : 'parPay'} href="./ParentContractPayment">ΠΛΗΡΩΜΗ</a>
                            <a className={currentNavPage==='parEnd' ? 'currentNavPage' : 'parEnd'} href="./ParentContractEnd">ΛΗΞΗ</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className={(currentNavPage==='parHiReq' || currentNavPage==='parHiCon' || currentNavPage==='parHiPay') ? 'currentNavPage' : 'parHistory'}><a href="./RequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrowBlack}/></a></button>
                        <div className="dropdown-content">
                            <a className={currentNavPage==='parHiReq' ? 'currentNavPage' : 'parHiReq'} href="./RequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='parHiCon' ? 'currentNavPage' : 'parHiCon'} href="./ContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a className={currentNavPage==='parHiPay' ? 'currentNavPage' : 'parHiPay'} href="./PaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default ParentNavigation;