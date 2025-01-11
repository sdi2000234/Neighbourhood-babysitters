import React from "react";
import { useNavigate } from "react-router-dom"; // Import του useNavigate
import './ProfessionalCreateAd2.css';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';

function ProfessionalCreateAd2() {
    const userEducationLvl = "";
    const userEduVerification = null;
    const userFirstaidVerification = null;
    const userGenHealthVerification = true;
    const userDermatologyVerification = false;
    const userMentalHealthVerification = true;

    const navigate = useNavigate(); // Αρχικοποίηση του useNavigate

    // Handlers για τα κουμπιά
    const handlePreviousStep = () => {
        navigate('/ProfessionalCreateAd1'); // Πλοήγηση στο προηγούμενο βήμα
    };

    const handleSave = () => {
        // Εδώ μπορείς να προσθέσεις λειτουργία προσωρινής αποθήκευσης αν χρειαστεί
        console.log('Η αγγελία αποθηκεύτηκε προσωρινά.');
        navigate('/ProfessionalMyAds'); // Πλοήγηση στη σελίδα "Οι Αγγελίες Μου"
    };

    const handleNextStep = () => {
        navigate('/ProfessionalCreateAd3'); // Πλοήγηση στο επόμενο βήμα
    };

    return (
        <div>
            <ProgressTracker currentStep={2} />
            <div className="personInfo2">
                <h1>ΑΓΓΕΛΙΑ - ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h1>
                <div>
                    <p className="infoType">Επίπεδο Εκπαίδευσης:</p>
                    {userEducationLvl === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEducationLvl</p>}
                    <br />
                    <p className="infoType">Πιστοποιητικό Εκπαίδευσης:</p>
                    {userEduVerification === null ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEduVerification</p>}
                    <br />
                    <p className="infoType">Πιστοποιητικό Πρώτων Βοηθειών:</p>
                    {userFirstaidVerification === null ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userFirstaidVerification</p>}
                    <p className="message">
                        Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας.
                        Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας.
                        Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.
                    </p>
                    <h3>Πιστοποιητικά Υγείας:</h3>
                    <p className="message">
                        Ενημερώνονται αυτόματα από τα συστήματα της ΗΔΙΚΑ. Αν κάποιο πιστοποιητικό εμφανίζεται με κόκκινο χρώμα,
                        παρακαλούμε επικοινωνήστε με τον γιατρό σας.
                    </p>
                    <div className="healthVerifications">
                        <p className={userGenHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Παθολόγου / Γενικού Γιατρού</p>
                        <p className={userDermatologyVerification ? "valid" : "invalid"}>Πιστοποιητικό Δερματολόγου</p>
                        <p className={userMentalHealthVerification ? "valid" : "invalid"}>Πιστοποιητικό Ψυχικής Υγείας</p>
                    </div>
                </div>
                <div className="options2">
                    <button onClick={handlePreviousStep}><b>Προηγούμενο Βήμα</b></button>
                    <button onClick={handleSave}><b>Προσωρινή Αποθήκευση</b></button>
                    <button onClick={handleNextStep}><b>Επόμενο Βήμα</b></button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfessionalCreateAd2;
