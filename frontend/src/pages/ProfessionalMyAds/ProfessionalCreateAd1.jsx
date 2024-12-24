import React from 'react'
import './ProfessionalCreateAd1.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation';
import Footer from '../../components/Footer';
import ProgressTracker from '../../components/ProgressTracker';


function ProfessionalCreateAd1()
{
    const userName = "";
    const userLastName = "";
    const userBirthyear = 0;
    const userPhone = "";
    const userEmail = "";
    const userGender = "";
    const userCity = "";

    return (
        <div>
            <ProfessionalNavigation currentNavPage={"profAds"}/>
            <ProgressTracker currentStep={1}/>
            <div className="personInfo1">
                <h1>ΑΓΓΕΛΙΑ - ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ</h1>
                <div>
                    <p className="infoType">Όνομα:</p>
                    <p className="infoBox">{userName==="" ? "Όνομα" : userName}</p>
                    <br/>
                    <p className="infoType">Επώνυμο:</p>
                    <p className="infoBox">{userLastName==="" ? "Επώνυμο" : userLastName}</p>
                    <br/>
                    <p className="infoType">Έτος Γέννησης:</p>
                    <p className="infoBox">{userBirthyear===0 ? "Έτος" : userBirthyear}</p>
                    <br/>
                    <p className="infoType">Τηλέφωνο:</p>
                    <p className="infoBox">{userPhone==="" ? "Τηλέφωνο" : userPhone}</p>
                    <br/>
                    <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                    <p className="infoBox">{userEmail==="" ? "Ηλεκτρονικό Ταχυδρομίο" : userEmail}</p>
                    <br/>
                    <p className="infoType">Γένος:</p>
                    <p className="infoBox">{userGender==="" ? "Γένος" : userGender}</p>
                    <br/>
                    <p className="infoType">Περιοχή Κατοικίας:</p>
                    <p className="infoBox">{userCity==="" ? "Περιοχή Κατοικίας" : userCity}</p>
                    <p className="message">Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                </div>
                <div className="options1">
                    <button><b><a href='./ProfessionalMyAds'>Ακύρωση</a></b></button>
                    <button><b>Προσωρινή Αποθήκευση</b></button>
                    <button><b><a href='./ProfessionalCreateAd2'>Επόμενο Βήμα</a></b></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfessionalCreateAd1;