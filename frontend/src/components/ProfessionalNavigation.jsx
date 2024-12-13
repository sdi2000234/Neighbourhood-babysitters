import React from 'react'
import './ProfessionalNavigation.css'
import govgr from '../assets/govgr_logo_white.png'
import emptyProfile from '../assets/empty_profile.png'
/* import ProfessionalHome from '../../pages/ProfessionalHome'
import ProfessionalMyAds from '../../pages/ProfessionalMyAds'
import ProfessionalCoOpRequests from '../../pages/ProfessionalCoOpRequests'
import ProfessionalHistory from '../../pages/ProfessionalHistory'
import ProfessionalProfile from '../../pages/ProfessionalProfile' */


function ProfessionalNavigation()
{
    const userPfp = ""; //user's Pfp src

    return 	(
        <div>
            <div className="navBar">
                <nav>
                    <img className="logo" alt="logo" src={govgr}/>
                    <ul>
                        <li><a href="../pages/ProfessionalHome">ΑΡΧΙΚΗ</a></li>
                        <li><a href="../pages/ProfessionalMyAds">ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</a></li>
                        <li><a href="../pages/ProfessionalCoOpRequests">ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ</a></li>
                        <li><a href="../pages/ProfessionalHistory" >ΙΣΤΟΡΙΚΟ</a></li>
                    </ul>
                    <img className="pfp" alt="profile" src={userPfp==="" ? emptyProfile : userPfp}/>
                </nav>
            </div>
            <div className="switchRole">
                <p>Έχετε συνδεθεί ως Επαγγελματίας</p>
                <button>Σύνδεση ως Γονέας/Κηδεμόνας</button>
            </div>
        </div>
    );
}

export default ProfessionalNavigation;