import React from "react";
import './AppointmentCardParent.css'
import location from '../assets/location_black.png'
import dateIcon from '../assets/dateIcon.png'
import timeIcon from '../assets/timeIcon.png'
import linkIcon from '../assets/linkIcon.png'
import cake from '../assets/cake_black.png'
import { Avatar} from "@mui/material";

//Κάρτες με επαγγελματίες που έχουν κλείσει ραντεβού οι γονείς και θα εμφανίζονται στα ραντεβου των γονέων 
function AppointmentCardParent({type , picLink, parentName, date, loc , time , childAge , loc2 })
{
    
    return (
        <div className="parentPannel">
            <div className="parentInfo">
                <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }}  className="parentPfp"/>
                <p>{parentName}</p>
            </div>
            <div className="parentDetails">
            
                <div className="parentpersonalinfo">

                    <div className="childAgeParent">
                        <img src={cake} alt='childAge'/>
                        <p>Ηλικία Παιδιού: {childAge}</p>
                    </div>

                    <div className="houselocationParent">
                        <img src={location} alt='location'/>
                        <p>Περιοχή Φύλαξης: {loc2}</p>
                    </div>

                    <div className="appointmentLocationParent">
                        {type === 'facetoface' ? (
                            <>
                            <img src={location} alt="location" />
                            <p>Διεύθυνση ραντεβού: {loc}</p>
                            </>
                        ) : (
                            <>
                            <img src={linkIcon} alt="link" />
                            <p>Link online συνάντησης: <a href={loc} target="_blank" rel="noopener noreferrer">{loc}</a></p>
                            </>
                        )}
                    </div>


                    <div className="appointmentDateParent">
                        <img src={dateIcon} alt='date'/>
                        <p>Ημερομηνία Ραντεβού: {date}</p>
                    </div>
                    
                    <div className="appointmentTimeParent">
                        <img src={timeIcon} alt='time'/>
                        <p>Ώρα Ραντεβού: {time} </p>
                    </div>
                </div>
                <div className="appointmentOptionsParent">
                    <button className="moreButtonParent">Περισσότερες Λεπτομέρειες</button> {/*ΝΑ ΠΕΤΑΓΕΤΑΙ ΤΟ ΚΕΙΜΕΝΟ ΤΟΥ ΓΟΝΕΑ ΣΕ ΑΥΤΗ ΤΗ ΣΕΛΙΔΑ*/}
                    <button className="profileButtonParent">Δείτε Προφίλ Γονέα</button> {/*ΝΑ ΠΕΤΑΓΕΤΑΙ ΤΟ ΠΡΟΦΙΛ ΤΟΥ ΕΠΑΓΓΕΛΜΑΤΙΑ ΣΕ ΑΥΤΗ ΤΗ ΣΕΛΙΔΑ*/}
                    <button className="buttonsParent">Αλλαγή Στοιχείων Ραντεβού</button>
                    <button className="cancelButtonParent">Ακύρωση Ραντεβού</button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentCardParent;