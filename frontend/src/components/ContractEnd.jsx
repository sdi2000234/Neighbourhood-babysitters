import React from 'react'
import './ContractEnd.css'
import emptyProfile from '../assets/empty_profile.png'
import emptyStar from '../assets/empty_star.png'

function ContractEnd()
{
	const professionalPfp = null;
	const professionalFirstName = null;
	const professionalLastName = null;
	const startWork = null;
	const finishWork = null;
    const isRated = false; // Has this professional been rated by this parent?

    return (
        <div className="contractPannel">
            <div className="userInfo">
                <img className="userPfp" src={professionalPfp===null ? emptyProfile : professionalPfp}/>
                <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
            </div>
            <div className="contractDetails">
                <p><b>ΕΝΑΡΞΗ: {startWork===null ? "ηη/μμ/εεεε" : startWork}</b></p>
                <p><b>ΛΗΞΗ: {finishWork===null ? "ηη/μμ/εεεε" : finishWork}</b></p>
                <div className="options">
                    <button>ΟΛΟΚΛΗΡΩΣΗ</button>
                    <button>ΑΝΑΝΕΩΣΗ</button>
                    <div className="rating">
                        <button>
                            <p className="ratingStatus">{isRated==false ? "ΑΞΙΟΛΟΓΗΣΗ" : "ΕΠΕΞΕΡΓΑΣΙΑ ΑΞΙΟΛΟΓΗΣΗΣ"}</p>
                            <div className="stars">
                                <img className="star1" src={emptyStar}/>
                                <img className="star2" src={emptyStar}/>
                                <img className="star3" src={emptyStar}/>
                                <img className="star4" src={emptyStar}/>
                                <img className="star5" src={emptyStar}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContractEnd;