import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import του useNavigate
import './ProfessionalCreateAd1.css';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';

function ProfessionalCreateAd1(canEdit) {
    const userName = "";
    const userLastName = "";
    const userBirthyear = 0;
    const userPhone = "";
    const userEmail = "";
    const userGender = "";
    const userCity = "";

    const navigate = useNavigate(); // Αρχικοποίηση του useNavigate

    // Handlers για τα κουμπιά
    const handleCancel = () => {
        navigate('/ProfessionalMyAds'); // Ανακατεύθυνση στη σελίδα "Οι Αγγελίες Μου"
    };

    const handleSave = () => {
        // Εδώ μπορείς να προσθέσεις λειτουργία προσωρινής αποθήκευσης αν χρειαστεί
        console.log('Η αγγελία αποθηκεύτηκε προσωρινά.');
        navigate('/ProfessionalMyAds'); // Ανακατεύθυνση στη σελίδα "Οι Αγγελίες Μου"
    };

    const handleNextStep = () => {
        navigate('/ProfessionalCreateAd2', { state: { canEdit } }); // Ανακατεύθυνση στο επόμενο βήμα
    };

    return (
        <div>
            <ProgressTracker currentStep={1} />
            <div className="personInfo1">
                <h1>ΑΓΓΕΛΙΑ - ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ</h1>
                <div>
                    <p className="infoType">Όνομα:</p>
                    {userName === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userName</p>}
                    <br />
                    <p className="infoType">Επώνυμο:</p>
                    {userLastName === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userLastName</p>}
                    <br />
                    <p className="infoType">Έτος Γέννησης:</p>
                    {userBirthyear === 0 ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userBirthyear</p>}
                    <br />
                    <p className="infoType">Τηλέφωνο:</p>
                    {userPhone === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userPhone</p>}
                    <br />
                    <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                    {userEmail === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEmail</p>}
                    <br />
                    <p className="infoType">Γένος:</p>
                    {userGender === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userGender</p>}
                    <br />
                    <p className="infoType">Περιοχή Κατοικίας:</p>
                    {userCity === "" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userCity</p>}
                    <p className="message">
                        Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας.
                        Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. 
                        Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.
                    </p>
                </div>
                <div className="options1">
                    <button className="cancel" onClick={handleCancel}><b>Ακύρωση</b></button>
                    <button onClick={handleSave}><b>Προσωρινή Αποθήκευση</b></button>
                    <button onClick={handleNextStep}><b>Επόμενο Βήμα</b></button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfessionalCreateAd1;
