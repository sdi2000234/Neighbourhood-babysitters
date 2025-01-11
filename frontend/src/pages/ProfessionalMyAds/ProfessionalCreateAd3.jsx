import React from "react";
import { useNavigate } from "react-router-dom"; // Import του useNavigate
import './ProfessionalCreateAd3.css';
import Schedule from '../../components/Schedule';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';
import Dropdown from '../../components/Dropdown';
import LanguageCertification from "../../components/LanguageCertification";

function ProfessionalCreateAd3() {
    const municipalities = ["ΔΗΜΟΣ Α", "ΔΗΜΟΣ Β", "ΔΗΜΟΣ Γ"];
    const languages = ["αγγλικά"];
    const langCertificates = ["πιστοποιητικό_αγγλικών.pdf"];
    const signCertificate = "certificate.pdf";
    let index = 0;

    const navigate = useNavigate(); // Αρχικοποίηση του useNavigate

    // Handlers για τα κουμπιά
    const handlePreviousStep = () => {
        navigate('/ProfessionalCreateAd2'); // Πλοήγηση στο προηγούμενο βήμα
    };

    const handleSave = () => {
        // Εδώ μπορείς να προσθέσεις λειτουργία προσωρινής αποθήκευσης αν χρειαστεί
        console.log('Η αγγελία αποθηκεύτηκε προσωρινά.');
        navigate('/ProfessionalMyAds'); // Πλοήγηση στη σελίδα "Οι Αγγελίες Μου"
    };

    const handleNextStep = () => {
        navigate('/ProfessionalCreateAd4'); // Πλοήγηση στο επόμενο βήμα
    };

    return (
        <div>
            <ProgressTracker currentStep={3} />
            <form>
                <div className="personInfo3">
                    <h1>ΑΓΓΕΛΙΑ - ΣΤΟΙΧΕΙΑ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΑΣ</h1>
                    <div>
                        <div className="aboutMe">
                            <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>
                            <p className="subtitle">(Θα εμφανίζεται στην περίληψη της αγγελίας)</p>
                            <textarea placeholder="Γράψτε μια μικρή αυτοπαρουσίαση" ></textarea>
                        </div>
                        <br />
                        <div className="seperatorBar"></div>
                        <LanguageCertification index={index + 1} name={languages[index]} certificate={langCertificates[index]} />
                        <LanguageCertification index={index + 2} name="νοηματική" certificate={signCertificate} />
                        <p className="message">
                            Τα παραπάνω στοιχεία Γλωσσομάθειας, καθώς και τα έτη εμπειρίας έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλει μέσω του Προφίλ σας.
                            Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας.
                            Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.
                        </p>
                        <div className="seperatorBar"></div>
                        <div className="municipalitiesDropdown">
                            <p className="infoType">Επιλέξτε Δήμο Δραστηριοποίησης:</p>
                            <Dropdown defaultoption="Επιλέξτε Δήμο" options={municipalities} />
                        </div>
                        <div className="occupationType">
                            <p className="infoType">Επιλέξτε Είδος Απασχόλησης:</p>
                            <form>
                                <input type="radio" id="partTime" value="partTime" name="occupation" />
                                <label htmlFor="partTime"> Μερική Απασχόληση</label>
                                <br />
                                <input type="radio" id="fullTime" value="fullTime" name="occupation" />
                                <label htmlFor="fullTime"> Πλήρης Απασχόληση</label>
                            </form>
                        </div>
                        <h3>Επιλέξτε Διαθεσιμότητα:</h3>
                        <div className="schedule">
                            <Schedule />
                        </div>
                    </div>
                    <div className="options3">
                        <button onClick={handlePreviousStep}><b>Προηγούμενο Βήμα</b></button>
                        <button onClick={handleSave}><b>Προσωρινή Αποθήκευση</b></button>
                        <button onClick={handleNextStep}><b>Επόμενο Βήμα</b></button>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default ProfessionalCreateAd3;
