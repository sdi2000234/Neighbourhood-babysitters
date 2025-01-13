import React from 'react';
import './FavouriteProfessional.css'
import { useNavigate } from 'react-router-dom';
import emptyProfile from '../assets/empty_profile.png'
import cake from '../assets/cake_black.png'
import location from '../assets/location_black.png'
import experience from '../assets/briefcase_black.png'
import star from '../assets/filled_star_black.png'
import heart from '../assets/filled_heart_white.png'


function FavouriteProfessional({id, unLike, showMore, appointment, request})
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


    //Για περιήγηση σε υπολοιπες σελίδες
    const navigate = useNavigate();

    const handleAppointment = () => { navigate('../ParentAppointment'); };
    const handleMakeRequest = () => { navigate('../ParentMakeRequest'); };
    const handleViewRequest = () => { navigate('../ParentViewRequest'); };


    return (
        <div className="candidatePannel">
            <div className="candidateInfo">
                <img className="candidatePfp" src={professionalPfp===null ? emptyProfile : professionalPfp} alt='profile'/>
                <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
                <button onClick={() => unLike(id)}><img className="heart" src={heart} alt='heart'/></button>
            </div>
            <div className="candidateDetails">
                <div className="avgRating">
                    <img src={star} alt='rating'/>
                    <p><b>{averageRating}</b>&ensp;({totalRatings} αξιολογήσεις)</p>
                </div>
                <div className="blurb">
                    <h3>Περιγραφή:</h3>
                    <p>{blurbText.length > 120 ? `${blurbText.substring(0, 120)}...` : blurbText}</p>
                    <button className="more" onClick={() => showMore()}>Περισσότερα</button>
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
                <div className="hireOptions">
                    {appointment===false ? <button onClick={handleAppointment}>ΡΑΝΤΕΒΟΥ</button> : <p className='appointmentPend'>Αναμένεται αποδοχή/απόρριψη του ραντεβού από την/τον επαγγελματία</p>}
                    {request===false ? <button onClick={handleMakeRequest}>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ</button> : <button onClick={handleViewRequest}>ΠΡΟΕΠΙΣΚΟΠΙΣΗ ΑΙΤΗΣΗΣ</button>}
                </div>
            </div>
        </div>
    );
}

export default FavouriteProfessional;