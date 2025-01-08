import React from "react";
import './HireProfessionalMore.css'
import emptyProfile from '../assets/empty_profile.png'
import cake from '../assets/cake_black.png'
import location from '../assets/location_black.png'
import experience from '../assets/briefcase_black.png'


function HireProfessionalMore({visible,  onClose})
{
    const professionalPfp = null;
    const professionalFirstName = null;
    const professionalLastName = null;
    const blurbText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const age = 0;
    const loc = "περιοχή";
    const xp = 0;


    if (visible===false) return null;
  
    return (
        <div className="hireMoreBG">
            <div className="hireMorePannel">
                <div className="hireMoreInfo">
                    <img className="hireMorePfp" src={professionalPfp===null ? emptyProfile : professionalPfp} alt='profile'/>
                    <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
                </div>
                <div className="hireMoreDetails">
                    <div className="blurbMore">
                        <h3>Περιγραφή:</h3>
                        <p>{blurbText}</p>
                    </div>
                    <div className="personalInfoMore">
                        <div className="age">
                            <img src={cake} alt='age'/>
                            <p>Ηλικία: {age}</p>
                        </div>
                        <div className="locationMore">
                            <img src={location} alt='location'/>
                            <p>Περιοχή: {loc}</p>
                        </div>
                        <div className="experienceMore">
                            <img src={experience} alt='experience'/>
                            <p>Εμπειρία: {xp} χρόνια</p>
                        </div>
                    </div>
                    <div className="hireMoreOptions">
                        <button onClick={onClose}>Επιστροφή</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireProfessionalMore;