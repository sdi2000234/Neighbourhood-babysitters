import React, { useState } from 'react'; 
import './ParentAppointment.css'
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import RequiredField from '../../components/RequiredField';  // Εισάγουμε το RequiredField

function ParentAppointment({ babysitterName , userName , userLastName , userPhone, userEmail , date , time}) {
    
    
    return (
        <>
            <ParentNavigation />
            <div className='personInfo'>
                <h1>ΚΛΕΙΣΙΜΟ ΡΑΝΤΕΒΟΥ ΜΕ: {babysitterName}</h1>

                <form action="">

                    <p className="infoType">Όνομα:</p>
                    <p className="infoBox">{userName==="" ? "Όνομα" : userName}</p>
                    <br/>
                    <p className="infoType">Επώνυμο:</p>
                    <p className="infoBox">{userLastName==="" ? "Επώνυμο" : userLastName}</p>

                    <div className="phoneAndEmail">
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoType">Τηλέφωνο:</p>
                            <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                            <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
                        </div>
                    </div>

                    <div className="dateAndtime">
                        <div>
                            <label htmlFor="date" className="infoType"> <RequiredField label="Ημερομηνία Ραντεβού" /> </label>
                            <input type="date" id="date" name="date" className="infoBox" placeholder="Ημερομηνία Ραντεβού" required />
                        </div>
                        <div>
                            <label htmlFor="time" className="infoType"> <RequiredField label="Ώρα Ραντεβού" /> </label>
                            <input type="time" id="time" name="time" className="infoBox" placeholder="Ώρα Ραντεβού" required />
                        </div>
                    </div>

                    <div className="meeting">
                        {/* ............ΝΑ ΣΥΝΕΧΙΣΩ ΑΠΟ ΕΔΩ................. */}
                    </div>
                    
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ParentAppointment;
