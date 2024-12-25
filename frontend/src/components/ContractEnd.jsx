import React from 'react'
import './ContractEnd.css'
import emptyProfile from '../assets/empty_profile.png'
import emptyStar from '../assets/empty_star.png'
import fullStar from '../assets/filled_star.png'

function ContractEnd()
{
	const professionalPfp = null;
	const professionalFirstName = null;
	const professionalLastName = null;
	const startWork = null;
	const finishWork = null;
    const complete = false; // Έχει γίνει επιβεβαίωση ολοκλήρωσης εργασίας?
    const rating = 0;

    return (
        <div className="contractEnd">
            <div className="userInfo">
                <img className="userPfp" alt='profile' src={professionalPfp===null ? emptyProfile : professionalPfp}/>
                <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
            </div>
            <div className="contractDetails">
                <p><b>ΕΝΑΡΞΗ: {startWork===null ? "ηη/μμ/εεεε" : startWork}</b></p>
                <p><b>ΛΗΞΗ: {finishWork===null ? "ηη/μμ/εεεε" : finishWork}</b></p>
                <div className="options">
                    {complete===false ?  <button>ΟΛΟΚΛΗΡΩΣΗ</button> : <button className="completed">ΟΛΟΚΛΗΡΩΜΕΝΟ</button>}
                    <button>ΑΝΑΝΕΩΣΗ</button>
                    <div className="rating">
                        <button>
                            <p className="ratingStatus">{rating>0 ? "ΕΠΕΞΕΡΓΑΣΙΑ ΑΞΙΟΛΟΓΗΣΗΣ" : "ΑΞΙΟΛΟΓΗΣΗ"}</p>
                            <div className="stars">
                                <img className="star1" alt='star' src={rating>0 ? fullStar : emptyStar}/>
                                <img className="star2" alt='star' src={rating>1 ? fullStar : emptyStar}/>
                                <img className="star3" alt='star' src={rating>2 ? fullStar : emptyStar}/>
                                <img className="star4" alt='star' src={rating>3 ? fullStar : emptyStar}/>
                                <img className="star5" alt='star' src={rating>4 ? fullStar : emptyStar}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContractEnd;