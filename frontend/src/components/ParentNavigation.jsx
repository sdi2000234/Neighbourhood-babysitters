import React from 'react'
import './NavigationBar.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
import arrow from '../assets/arrow_white.png'


function ParentNavigation()
{
	const userPfp = ""; //user's Pfp src

	return 	(
        <div>
    		<div className="navBar">
                <img className="logo" alt="logo" src={govgr}/>
                <div className="navOptions">
                    <button><a href="../pages/ParentHome/ParentHome">ΑΡΧΙΚΗ</a></button>
                    <button><a href="../pages/ParentFindProfessional/ParentFindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <button><a href="../pages/ParentHireProfessional/ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></button>
                    <div class="dropdown">
                        <button><a href="../pages/ParentContractPayment/ParentContractPayment" >ΣΥΜΦΩΝΗΤΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a href="./pages/ParentContractPayment/ParentContractPayment">ΠΛΗΡΩΜΗ</a>
                            <a href="./pages/ParentContractEnd/ParentContractEnd">ΛΗΞΗ</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button><a href="../pages/ParentHistory/RequestHistory" >ΙΣΤΟΡΙΚΟ<img className="arrow" alt="arrow" src={arrow}/></a></button>
                        <div class="dropdown-content">
                            <a href="./pages/ParentHistory/RequestHistory">ΑΙΤΗΣΕΙΣ</a>
                            <a href="./pages/ParentHistory/ContractHistory">ΣΥΜΦΩΝΗΤΙΚΑ</a>
                            <a href="./pages/ParentHistory/PaymentHistory">ΠΛΗΡΩΜΕΣ</a>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                    <img className="arrow" alt="arrow" src={arrow}/>
                    <div class="dropdown-content">
                            <a href="./pages/ParentProfile/ParentProfile">ΠΡΟΦΙΛ</a>
                            <a href="./pages/ParentProfile/ParentMessages">ΜΗΝΥΜΑΤΑ</a>
                            <a href="./pages/ParentProfile/ParentNotifications">ΕΙΔΟΠΟΙΗΣΕΙΣ</a>
                            <a href="./pages/ParentProfile/ParentAppointments">ΡΑΝΤΕΒΟΥ</a>
                            <a href="./pages/ParentProfile/ParentRequests">ΑΙΤΗΣΕΙΣ</a>
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