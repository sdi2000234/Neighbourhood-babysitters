import React from 'react'
import './NavigationBar.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
import arrow from '../assets/arrow_white.png'


function ParentNavigation({currentNavPage})
{
	const userPfp = ""; //user's Pfp src

	return 	(
        <div>
    		<div className="navBar">
                <img className="logo" alt="logo" src={govgr}/>
                <div className="navOptions">
                    <button className={currentNavPage==='parHome' ? 'currentNavPage' : 'parHome'}><a href="../pages/ParentHome/ParentHome">ΑΡΧΙΚΗ</a></button>
                    <button className={currentNavPage==='parFind' ? 'currentNavPage' : 'parFind'}><a href="../pages/ParentFindProfessional/ParentFindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <button className={currentNavPage==='parHire' ? 'currentNavPage' : 'parHire'}><a href="../pages/ParentHireProfessional/ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <div class="dropdown">
                        <button className={(currentNavPage==='parPay' || currentNavPage==='parEnd') ? 'currentNavPage' : 'parContract'}><a href="../pages/ParentContractPayment/ParentContractPayment" >ΣΥΜΦΩΝΗΤΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='parPay' ? 'currentNavPage' : 'parPay'} href="./pages/ParentContractPayment/ParentContractPayment">ΠΛΗΡΩΜΗ</a>
                            <a className={currentNavPage==='parEnd' ? 'currentNavPage' : 'parEnd'} href="./pages/ParentContractEnd/ParentContractEnd">ΛΗΞΗ</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button className={(currentNavPage==='parHiReq' || currentNavPage==='parHiCon' || currentNavPage==='parHiPay') ? 'currentNavPage' : 'parHistory'}><a href="../pages/ParentHistory/RequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a className={currentNavPage==='parHiReq' ? 'currentNavPage' : 'parHiReq'} href="./pages/ParentHistory/RequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a className={currentNavPage==='parHiCon' ? 'currentNavPage' : 'parHiCon'} href="./pages/ParentHistory/ContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a className={currentNavPage==='parHiPay' ? 'currentNavPage' : 'parHiPay'} href="./pages/ParentHistory/PaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div class="dropdown-content">
                            <a className={currentNavPage==='parProfile' ? 'currentNavPage' : 'parProfile'} href="./pages/ParentProfile/ParentProfile">ΠΡΟΦΙΛ</a>
                            <a className={currentNavPage==='parMes' ? 'currentNavPage' : 'parMes'} href="./pages/ParentProfile/ParentMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a className={currentNavPage==='parNot' ? 'currentNavPage' : 'parNot'} href="./pages/ParentProfile/ParentNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a className={currentNavPage==='parAp' ? 'currentNavPage' : 'parAp'} href="./pages/ParentProfile/ParentAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a className={currentNavPage==='parReq' ? 'currentNavPage' : 'parReq'} href="./pages/ParentProfile/ParentRequests">ΑΙΤΗΣΕΙΣ</a>
                            <a href="./pages/Home/Home">ΑΠΟΣΥΝΔΕΣΗ</a>
                        </div>
                </div>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
                <button><a href="../pages/ProfessionalHome/Professional/Home" >Σύνδεση ως Επαγγελματίας</a></button>
            </div>
        </div>
	);
}

export default ParentNavigation;