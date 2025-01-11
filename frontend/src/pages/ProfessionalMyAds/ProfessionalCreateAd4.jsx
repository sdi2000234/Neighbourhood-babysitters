import React from "react";
import { useNavigate } from "react-router-dom"; // Import του useNavigate
import './ProfessionalCreateAd4.css';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';

function ProfessionalCreateAd4() {
    const navigate = useNavigate(); // Αρχικοποίηση του useNavigate

    // Handlers για τα κουμπιά
    const handlePreviousStep = () => {
        navigate('/ProfessionalCreateAd3'); // Πλοήγηση στο προηγούμενο βήμα
    };

    const handleSave = () => {
        // Εδώ μπορείς να προσθέσεις λειτουργία προσωρινής αποθήκευσης αν χρειαστεί
        console.log('Η αγγελία αποθηκεύτηκε προσωρινά.');
        navigate('/ProfessionalMyAds'); // Πλοήγηση στη σελίδα "Οι Αγγελίες Μου"
    };

    const handleSubmit = () => {
        // Εδώ μπορείς να προσθέσεις λειτουργία για την υποβολή της αγγελίας
        console.log('Η αγγελία υποβλήθηκε.');
        navigate('/ProfessionalMyAds'); // Πλοήγηση στη σελίδα "Οι Αγγελίες Μου"
    };

    return (
        <div>
            <ProgressTracker currentStep={4} />
            <div className="personInfo4">
                <h1>ΑΓΓΕΛΙΑ - ΥΠΟΒΟΛΗ</h1>
                <p className="message">
                    ΠΡΟΣΟΧΗ: Εαν πατήσετε "Υποβολή" η παρούσα αγγελία θα δημοσιευθεί και δεν θα μπορεί να υποστεί μελλοντική επεξεργασία.
                    Εάν δεν επιθυμείτε να κάνετε οριστική υποβολή, αλλά θέλετε να διατηρήσετε τα στοιχεία που έχετε συμπληρώσει, καθώς και την δυνατότητα μελλοντικής επεξεργασίας,
                    πατήστε "Προσωρινή Αποθήκευση".
                </p>
                <div className="options4">
                    <button onClick={handlePreviousStep}><b>Προηγούμενο Βήμα</b></button>
                    <button onClick={handleSave}><b>Προσωρινή Αποθήκευση</b></button>
                    <button onClick={handleSubmit}><b>Υποβολή</b></button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfessionalCreateAd4;
