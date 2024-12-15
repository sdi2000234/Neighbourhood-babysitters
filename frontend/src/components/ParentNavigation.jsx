import React from 'react'
import './ParentNavigation.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
/* import ParentHome from '../../pages/ParentHome'
import ParentFindProfessional from '../../pages/ParentFindProfessional'
import ParentHireProfessional from '../../pages/ParentHireProfessional'
import ParentContract from '../../pages/ParentContract'
import ParentHistory from '../../pages/ParentHistory'
import ParentProfile from '../../pages/ParentProfile' */


function ParentNavigation()
{
	const userPfp = ""; //user's Pfp src

	return 	(
        <div>
    		<div className="navBar">
                <nav>
                    <img className="logo" alt="logo" src={govgr}/>
                    <ul>
                        <li><a href="../pages/ParentHome">ΑΡΧΙΚΗ</a></li>
                        <li><a href="../pages/ParentFindProfessional">ΕΥΡΕΣΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></li>
                        <li><a href="../pages/ParentHireProfessional">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</a></li>
                        <li><a href="../pages/ParentContract" >ΣΥΜΦΩΝΗΤΙΚΟ</a></li>
                        <li><a href="../pages/ParentHistory" >ΙΣΤΟΡΙΚΟ</a></li>
                    </ul>
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                </nav>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Γονέας/Κηδεμόνας</p>
                <button>Σύνδεση ως Επαγγελματίας</button>
            </div>
        </div>
	);
}

export default ParentNavigation;