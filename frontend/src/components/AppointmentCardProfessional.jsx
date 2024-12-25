import React from "react";
import './AppointmentCardProfessional.css'
import location from '../assets/location_black.png'
import dateIcon from '../assets/dateIcon.png'
import timeIcon from '../assets/timeIcon.png'
import linkIcon from '../assets/linkIcon.png'
import { Avatar} from "@mui/material";

//Κάρτες με επαγγελματίες που έχουν κλείσει ραντεβού οι γονείς και θα εμφανίζονται στα ραντεβου των γονέων 
function AppointmentCardProfessional({type , picLink, professionalName, date, loc , time })
{
    
    return (
        <div className="professionalPannel">
            <div className="professionalInfo">
                <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }}  className="professionalPfp"/>
                <p>{professionalName}</p>
            </div>
            <div className="professionalDetails">
            
                <div className="professionalpersonalinfo">

                <div className="appointmentLocation">
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


                    <div className="appointmentDate">
                        <img src={dateIcon} alt='date'/>
                        <p>Ημερομηνία Ραντεβού: {date}</p>
                    </div>
                    
                    <div className="appointmentTime">
                        <img src={timeIcon} alt='time'/>
                        <p>Ώρα Ραντεβού: {time} </p>
                    </div>
                </div>
                <div className="appointmentOptions">
                    <button className="moreButton">Δείτε Προφίλ Επαγγελματία</button> {/*ΝΑ ΠΕΤΑΓΕΤΑΙ ΤΟ ΠΡΟΦΙΛ ΤΟΥ ΕΠΑΓΓΕΛΜΑΤΙΑ ΣΕ ΑΥΤΗ ΤΗ ΣΕΛΙΔΑ*/}
                    <button className="buttons">Αλλαγή Στοιχείων Ραντεβού</button>
                    <button className="buttons">Κάντε Αίτηση Συνεργασίας</button>
                    <button className="cancelButton">Ακύρωση Ραντεβού</button>
                </div>
            </div>
        </div>
    );
}

export default AppointmentCardProfessional;