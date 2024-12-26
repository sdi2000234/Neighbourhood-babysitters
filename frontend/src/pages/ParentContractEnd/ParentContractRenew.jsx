import React from 'react'
import './ParentContractRenew.css'
import ParentNavigation from '../../components/ParentNavigation'
import Footer from '../../components/Footer'
import Dropdown from '../../components/Dropdown';
import Schedule from '../../components/Schedule';


function ParentContractRenew()
{
    const childAges = ["2 μηνών", "3 μηνών", "4 μηνών", "5 μηνών", "6 μηνών", "7 μηνών", "8 μηνών", "9 μηνών", "10 μηνών", "11 μηνών", "12 μηνών", "13 μηνών", "14 μηνών", "15 μηνών", "16 μηνών", "17 μηνών", "18 μηνών", "19 μηνών", "20 μηνών", "21 μηνών", "22 μηνών", "23 μηνών", "24 μηνών", "25 μηνών", "26 μηνών", "27 μηνών", "28 μηνών", "29 μηνών", "30 μηνών"];
    const userName = "";
    const userLastName = "";
    const userPhone = "";
    const userEmail = "";
    const personName = "";
    const personLastName = "";

    return (
        <div className='parentContractRenew'>
            <ParentNavigation currentNavPage={"parEnd"}/>
            <div className="personInfo">
                <h1>ΑΙΤΗΣΗ ΣΥΝΕΡΓΑΣΙΑΣ ΜΕ: {personName==="" ? "'Ονομα" : personName} {personLastName==="" ? "Επώνυμο" : personLastName}</h1>
                <div>
                    <p className="infoType">Όνομα:</p>
                    {userName==="" ? <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userName</p>}
                    <br/>
                    <p className="infoType">Επώνυμο:</p>
                    {userLastName==="" ?  <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userLastName</p>}
                    <br/>
                    <p className="infoType">Τηλέφωνο:</p>
                    {userPhone==="" ?  <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userPhone</p>}
                    <br/>
                    <p className="infoType">Ηλεκτρονικό Ταχυδρομίο:</p>
                    {userEmail==="" ?  <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p> : <p className="infoBox">userEmail</p>}
                    <p className="message">Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία που έχετε υποβάλλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει ή χρειάζεται αλλαγή θα πρέπει να γίνει μέσω της επεξεργασίας του Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που έχετε δημιουργήσει.</p>
                    <div className="seperatorBar"></div>
                    <div className="childAge">
                        <p className="infoType">Επιλέξτε την ηλικία του παιδιού (σε μήνες):</p>
                        <Dropdown defaultoption="Επιλέξτε ηλικία" options={childAges}/>
                    </div>
                    <div className="address">
                        <p className="infoType">Διεύθυνση, Περιοχή, ΤΚ:</p>
                        <input className="infoBox" type='text' placeholder="Εισάγετε τη διεύθυνση κατοικίας σας"/>
                    </div>
                    <div className="where">
                        <p className="infoType">Επιλέξτε το μέρος φύλαξης του παιδιού:</p>
                        <form>
                            <input type="radio" id="parentsHouse" value="parentsHouse" name="house"></input>
                            <label for="parentsHouse"> Στο σπίτι του γονέα/κηδεμόνα</label>
                            <br/>
                            <input type="radio" id="professionalsHouse" value="professionalsHouse" name="house"></input>
                            <label for="professionalsHouse"> Στο σπίτι του επαγγελματία</label>
                        </form>
                    </div>
                    <div className="seperatorBar"></div>
                    <div className="duration">
                        <label for="startDate">Έναρξη Συνεργασάς:</label>
                        <input type="date" id="startDate" name="startDate"></input>
                        <p>&emsp;&emsp;&emsp;</p>
                        <label for="endDate">Λήξη Συνεργασάς:</label>
                        <input type="date" id="endDate" name="endDate"></input>
                    </div>
                    <div className="schedule">
                        <Schedule/>
                    </div>
                    <div className="seperatorBar"></div>
                        <p className="infoType">Μήνυμα προς επαγγελματία (προαιρετικό):</p>
                        <textarea className="messagePannel" placeholder="Γράψτε ένα μήνυμα εδώ..." ></textarea>
                    <div className="seperatorBar"></div>
                    <div className="signContract">
                        <input type="checkbox" id="sign"></input>
                        <p>Δηλώνω επιθυμία συνεργασίας και υπογραφής ιδιωτικού συμφωνητικού.</p>
                    </div>
                    <p className="message"><b>ΠΡΟΣΟΧΗ: Εαν πατήσετε "Υποβολή" η παρούσα αίτηση θα σταλεί στην/στον επαγγελματία και δεν θα μπορεί να υποστεί μελλοντική επεξεργασία. Εάν δεν επιθυμείτε να κάνετε οριστική υποβολή, αλλά θέλετε να διατηρήσετε τα στοιχεία που έχετε συμπληρώσει, καθώς και την δυνατότητα μελλοντικής επεξεργασίας, πατήστε "Προσωρινή Αποθήκευση".</b></p>
                </div>
                <div className="options">
                    <button className="cancel"><b><a href='./ParentContractEnd'>Ακύρωση</a></b></button>
                    <button><b><a href='./ParentContractEnd'>Προσωρινή Αποθήκευση</a></b></button>
                    <button><b>Οριστική Υποβολή</b></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ParentContractRenew;