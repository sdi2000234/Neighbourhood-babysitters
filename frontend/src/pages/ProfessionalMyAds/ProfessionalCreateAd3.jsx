import React from "react";
import './ProfessionalCreateAd3.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Schedule from '../../components/Schedule';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';


function ProfessionalCreateAd3()
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
                <h1>ΑΓΓΕΛΙΑ - ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h1>
                <div>
                    <p className="infoType">Επίπεδο Εκπαίδευσης:</p>
                    <p className="infoBox">{userEducationLvl==="" ? "Αυτό το στοιχείο λείπει" : userEducationLvl}</p>
                    <br/>
                    <p className="infoType">Πιστοποιητικό Εκπαίδευσης:</p>
                    <p className="infoBox">{userEduVerification===null ? "Αυτό το στοιχείο λείπει" : userEduVerification}</p>
                    <br/>
                    <p className="infoType">Πιστοποιητικό Πρώτων Βοηθειών:</p>
                    <p className="infoBox">{userFirstaidVerification===null ? "Αυτό το στοιχείο λείπει" : userFirstaidVerification}</p>
                    <p className="message">Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                    <h3>Πιστοποιητικά Υγείας:</h3>
                    <p className="message">Ενημερώνονται αυτόματα από τα συστήματα της ΗΔΙΚΑ. Αν κάποιο πιστοποιητικό εμφανίζεται με κόκκινο χρώμα, παρακαλούμε επικοινωνήστε με τον γιατρό σας .</p>
                    <div className="healthVerifications">
                        <p className={userGenHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Παθολόγου / Γενικού Γιατρού</p>
                        <p className={userDermatologyVerification ? "valid" : "invalid"}>Πιστοποιητικό Δερματολόγου</p>
                        <p className={userMentalHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Ψυχικής Υγείας</p>
                    </div>
                </div>
                <Schedule/>
                <div className="options">
                    <button><b><a href='./ProfessionalCreateAd1'>Προηγούμενο Βήμα</a></b></button>
                    <button><b>Προσωρινή Αποθήκευση</b></button>
                    <button><b><a href='./ProfessionalCreateAd3'>Επόμενο Βήμα</a></b></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfessionalCreateAd3;