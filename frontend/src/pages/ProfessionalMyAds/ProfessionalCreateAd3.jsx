import React from "react";
import './ProfessionalCreateAd3.css';
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Schedule from '../../components/Schedule';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';
import Dropdown from '../../components/Dropdown';
import LanguageCertification from "../../components/LanguageCertification";


function ProfessionalCreateAd3()
{
    const municipalities = ["ΔΗΜΟΣ Α", "ΔΗΜΟΣ Β", "ΔΗΜΟΣ Γ"];
    const languages = ["αγγλικά"];
    const langCertificates = ["πιστοποιητικό_αγγλικών.pdf"];
    const signCertificate = "certificate.pdf";
    let index = 0;

    return (
        <div>
            <ProfessionalNavigation/>
            <ProgressTracker/>
            <div className="personInfo">
                <h1>ΑΓΓΕΛΙΑ - ΣΤΟΙΧΕΙΑ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΑΣ</h1>
                <div>
                    <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>
                    <p className="subtitle">(Θα εμφανίζεται στην περίληψη της αγγελίας)</p>
                    <textarea className="aboutMe" placeholder="Γράψτε μια μικρή αυτοπαρουσίαση" ></textarea>
                    <br/>
                    <div className="seperatorBar"></div>
                    <LanguageCertification index={index+1} name={languages[index]} certificate={langCertificates[index]}/>
                    <LanguageCertification index={index+2} name="νοηματικη" certificate={signCertificate}/>
                    <p className="message">Τα παραπάνω στοιχεία Γλωσσομάθειας, καθώς και τα έτη εμπειρίας έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                    <div className="seperatorBar"></div>
                    <div className="municipalitiesDropdown">
                        <p className="infoType">Επιλέξτε Δήμο Δραστηριοποίησης:</p>
                        <Dropdown defaultoption="Επιλέξτε Δήμο" options={municipalities}/>
                    </div>
                    <div className="occupationType">
                        <p className="infoType">Επιλέξτε Είδος Απασχόλησης:</p>
                        <form>
                            <input type="radio" id="partTime" value="partTime" name="occupation"></input>
                            <label for="partTime">Μερική Απασχόληση</label>
                            <br/>
                            <input type="radio" id="fullTime" value="fullTime" name="occupation"></input>
                            <label for="fullTime">Πλήρης Απασχόληση</label>
                        </form>
                    </div>
                    <h3>Επιλέξτε Διαθεσιμότητα:</h3>
                    <div className="schedule">
                        <Schedule/>
                    </div>
                </div>
                <div className="options">
                    <button><b><a href='./ProfessionalCreateAd2'>Προηγούμενο Βήμα</a></b></button>
                    <button><b>Προσωρινή Αποθήκευση</b></button>
                    <button><b><a href='./ProfessionalCreateAd4'>Επόμενο Βήμα</a></b></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfessionalCreateAd3;