import React from "react";
import './FavouriteProfessional.css'
import emptyProfile from '../assets/empty_profile.png'
import cake from '../assets/cake_black.png'
import location from '../assets/location_black.png'
import experience from '../assets/briefcase_black.png'
import star from '../assets/filled_star_black.png'
import heart from '../assets/filled_heart_white.png'


function FavouriteProfessional()
{
    const professionalPfp = null;
    const professionalFirstName = null;
    const professionalLastName = null;
    const averageRating = 0;
    const totalRatings = 0;
    const blurbText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const age = 0;
    const loc = "περιοχή";
    const xp = 0;
    const appointment = false;
    const request = false;

    return (
        <div className="candidatePannel">
            <div className="candidateInfo">
                <img className="candidatePfp" src={professionalPfp===null ? emptyProfile : professionalPfp} alt='profile'/>
                <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
                <img className="heart" src={heart} alt='heart'/>
            </div>
            <div className="candidateDetails">
                <div className="avgRating">
                    <img src={star} alt='rating'/>
                    <p><b>{averageRating}</b>&ensp;({totalRatings} αξιολογήσεις)</p>
                </div>
                <div className="blurb">
                    <h3>Περιγραφή:</h3>
                    <p>{blurbText.length > 120 ? `${blurbText.substring(0, 120)}...` : blurbText}</p>
                    <button className="more">Περισσότερα</button>
                </div>
                <div className="personalInfo">
                    <div className="age">
                        <img src={cake} alt='age'/>
                        <p>Ηλικία: {age}</p>
                    </div>
                    <div className="location">
                        <img src={location} alt='location'/>
                        <p>Περιοχή: {loc}</p>
                    </div>
                    <div className="experience">
                        <img src={experience} alt='experience'/>
                        <p>Εμπειρία: {xp} χρόνια</p>
                    </div>
                </div>
                <div className="options">
                    {appointment===false ? <button>ΡΑΝΤΕΒΟΥ</button> : <p>Αναμένεται αποδοχή/απόρριψη του ραντεβού από την/τον επαγγελματία</p>}
                    <button>{request===false ? "ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ" : "ΠΡΟΕΠΙΣΚΟΠΙΣΗ ΑΙΤΗΣΗΣ"}</button>
                </div>
            </div>
        </div>
    );
}

export default FavouriteProfessional;