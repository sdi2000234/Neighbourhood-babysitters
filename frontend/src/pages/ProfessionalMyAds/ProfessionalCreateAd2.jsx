import React from "react";
import './ProfessionalCreateAd2.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';


function ProfessionalCreateAd2()
{
    const userEducationLvl = "";
    const userEduVerification = null;
    const userFirstaidVerification = null;
    const userGenHealthVerification = true;
    const userDermatologyVerification = false;
    const userMentalHealthVerification = true;

    return (
        <div>
            <ProfessionalNavigation currentNavPage={"profAds"}/>
            <ProgressTracker currentStep={2}/>
            <div className="personInfo2">
                <h1>ΑΓΓΕΛΙΑ - ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h1>
                <div>
                    <p className="infoType">Επίπεδο Εκπαίδευσης:</p>
                    {userEducationLvl==="" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEducationLvl</p>}
                    <br/>
                    <p className="infoType">Πιστοποιητικό Εκπαίδευσης:</p>
                    {userEduVerification===null ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEduVerification</p>}
                    <br/>
                    <p className="infoType">Πιστοποιητικό Πρώτων Βοηθειών:</p>
                    {userFirstaidVerification===null ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userFirstaidVerification</p>}
                    <p className="message">Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                    <h3>Πιστοποιητικά Υγείας:</h3>
                    <p className="message">Ενημερώνονται αυτόματα από τα συστήματα της ΗΔΙΚΑ. Αν κάποιο πιστοποιητικό εμφανίζεται με κόκκινο χρώμα, παρακαλούμε επικοινωνήστε με τον γιατρό σας .</p>
                    <div className="healthVerifications">
                        <p className={userGenHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Παθολόγου / Γενικού Γιατρού</p>
                        <p className={userDermatologyVerification ? "valid" : "invalid"}>Πιστοποιητικό Δερματολόγου</p>
                        <p className={userMentalHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Ψυχικής Υγείας</p>
                    </div>
                </div>
                <div className="options2">
                    <a href='./ProfessionalCreateAd1'><button><b>Προηγούμενο Βήμα</b></button></a>
                    <a href="./ProfessionaMyAds"><button><b>Προσωρινή Αποθήκευση</b></button></a>
                    <a href='./ProfessionalCreateAd3'><button><b>Επόμενο Βήμα</b></button></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfessionalCreateAd2;