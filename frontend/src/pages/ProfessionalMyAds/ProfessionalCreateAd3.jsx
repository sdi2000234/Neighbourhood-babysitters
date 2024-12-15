import React from "react";
import './ProfessionalCreateAd3.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Schedule from '../../components/Schedule';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';


function ProfessionalCreateAd3()
{
    const userLanguages = [];


    const langCount = userLanguages.length;

    return (
        <div>
            <ProfessionalNavigation/>
            <ProgressTracker/>
            <div className="personInfo">
                <h1>ΑΓΓΕΛΙΑ - ΣΤΟΙΧΕΙΑ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΑΣ</h1>
                <div>
                    <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>
                    <p className="subtitle">(Θα εμφανίζεται στην περίληψη της αγγελίας)</p>
                    <input className="aboutMe" type="text" placeholder="Γράψτε μια μικρή αυτοπαρουσίαση"/>
                    <br/>
                    <div className="seperatorBar"></div>
                    <p className="infoType">Γνώση Ξένης Γλώσσας {langCount}:</p>
                    <p className="infoBox">{userLanguageCount==0 ? "" : userLanguages[langCount]}</p>
                    <p className="message">Τα παραπάνω στοιχεία Γλωσσομάθειας, καθώς και τα έτη εμπειρίας έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                    <div className="seperatorBar"></div>
                    <p className="infoType">Επιλέξτε Δήμο Δραστηριοποίησης:</p>
                    <select name="Δήμος" id="municipality">
                        <option value={municipality}>{municipality}</option>
                    </select>
                    <p className="infoType">Επιλέξτε Είδος Απασχόλησης:</p>
                    <input type="radio" value="Μερική Απασχόληση"></input>
                    <input type="radio" value="Πλήρης Απασχόληση"></input>
                    <h3>Επιλέξτε Διαθεσιμότητα:</h3>
                    <Schedule/>
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