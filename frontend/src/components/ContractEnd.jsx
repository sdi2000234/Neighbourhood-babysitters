import React, { useState } from 'react'
import './ContractEnd.css'
import emptyProfile from '../assets/empty_profile.png'
import emptyStar from '../assets/empty_star.png'
import fullStar from '../assets/filled_star.png'

function ContractEnd({firstName, lastName, startDate, endDate})
{
	const professionalPfp = null;
	const professionalFirstName = firstName;
	const professionalLastName = lastName;
	const startWork = startDate;
	const finishWork = endDate;
    const [complete, setComplete] = useState(false); // Έχει γίνει επιβεβαίωση ολοκλήρωσης εργασίας?
    const rating = 0;

    const handleClick = () => { setComplete(true); };

    return (
        <div className="contractEnd">
            <div className="userInfo">
                <img className="userPfp" alt='profile' src={professionalPfp===null ? emptyProfile : professionalPfp}/>
                <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalLastName}</p>
            </div>
            <div className="contractDetails">
                <p><b>ΕΝΑΡΞΗ: {startWork===null ? "ηη/μμ/εεεε" : startWork}</b></p>
                <p><b>ΛΗΞΗ: {finishWork===null ? "ηη/μμ/εεεε" : finishWork}</b></p>
                <div className="options">
                    {/* TODO: change "complete" variable in database */}
                    {complete===false ?  <button onClick={handleClick}>ΟΛΟΚΛΗΡΩΣΗ</button> : <button className="completed">ΟΛΟΚΛΗΡΩΜΕΝΟ</button>}
                    <button><a href='./ParentContractRenew'>ΑΝΑΝΕΩΣΗ</a></button>
                    <div className="rating">
                        <button>
                            <a href='./RatingParents'>
                                <p className="ratingStatus">{rating>0 ? "ΕΠΕΞΕΡΓΑΣΙΑ ΑΞΙΟΛΟΓΗΣΗΣ" : "ΑΞΙΟΛΟΓΗΣΗ"}</p>
                                <div className="stars">
                                    <img className="star1" alt='star' src={rating>0 ? fullStar : emptyStar}/>
                                    <img className="star2" alt='star' src={rating>1 ? fullStar : emptyStar}/>
                                    <img className="star3" alt='star' src={rating>2 ? fullStar : emptyStar}/>
                                    <img className="star4" alt='star' src={rating>3 ? fullStar : emptyStar}/>
                                    <img className="star5" alt='star' src={rating>4 ? fullStar : emptyStar}/>
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContractEnd;