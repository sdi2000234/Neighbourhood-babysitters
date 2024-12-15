import React from "react";
import './ProfessionalCreateAd4.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';


function ProfessionalCreateAd4()
{
    const userEducationLvl = "";
    const userEduVerification = null;
    const userFirstaidVerification = null;
    const userGenHealthVerification = true;
    const userDermatologyVerification = false;
    const userMentalHealthVerification = true;

    return (
        <div>
            <ProfessionalNavigation/>
            <ProgressTracker/>
            <div className="personInfo">
                <h1>ΑΓΓΕΛΙΑ - ΥΠΟΒΟΛΗ</h1>
                <p className="message">ΠΡΟΣΟΧΗ: Εαν πατήσετε "Υποβολή" η παρούσα αγγελία θα δημοσιευθεί και δεν θα μπορεί να υποστεί μελλοντική επεξεργασία. Εάν δεν επιθυμείτε να κάνετε οριστική υποβολή, αλλά θέλετε να διατηρήσετε τα στοιχεία που έχετε συμπληρώσει, καθώς και την δυνατότητα μελλοντικής επεξεργασίας, πατήστε "Προσωρινή Αποθήκευση".</p>
                <div className="options">
                    <button><b><a href='./ProfessionalCreateAd3'>Προηγούμενο Βήμα</a></b></button>
                    <button><b>Προσωρινή Αποθήκευση</b></button>
                    <button><b>Υποβολή</b></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfessionalCreateAd4;