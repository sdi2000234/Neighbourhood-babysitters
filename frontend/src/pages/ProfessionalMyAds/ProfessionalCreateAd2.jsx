import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfessionalCreateAd2.css";
import Footer from "../../components/Footer";
import ProgressTracker from "../../components/ProgressTracker";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

function ProfessionalCreateAd2({ canEdit }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  // State to hold user data
  const [userData, setUserData] = useState({
    educationLevel: "",
    educationPdf: null,
    firstAidPdf: null,
    genHealthVerification: false,
    dermatologyVerification: false,
    mentalHealthVerification: false,
  });

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.error("No user data found in Firestore for this user.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handlers for buttons
  const handlePreviousStep = () => {
    navigate("/ProfessionalCreateAd1", { state: { canEdit } });
  };

  const handleSave = () => {
    console.log("Η αγγελία αποθηκεύτηκε προσωρινά.");
    navigate("/ProfessionalMyAds");
  };

  const handleNextStep = () => {
    navigate("/ProfessionalCreateAd3", { state: { canEdit } });
  };

  return (
    <div>
      <ProgressTracker currentStep={2} />
      <div className="personInfo2">
        <h1>ΑΓΓΕΛΙΑ - ΠΙΣΤΟΠΟΙΗΤΙΚΑ</h1>
        <div>
          <p className="infoType">Επίπεδο Εκπαίδευσης:</p>
          {userData.educationLevel ? (
            <p className="infoBox">{userData.educationLevel}</p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />

          <p className="infoType">Πιστοποιητικό Εκπαίδευσης:</p>
          {userData.educationPdf ? (
            <p className="infoBox">
              <a
                href={userData.educationPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Δείτε το Πιστοποιητικό
              </a>
            </p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}
          <br />

          <p className="infoType">Πιστοποιητικό Πρώτων Βοηθειών:</p>
          {userData.firstAidPdf ? (
            <p className="infoBox">
              <a
                href={userData.firstAidPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Δείτε το Πιστοποιητικό
              </a>
            </p>
          ) : (
            <p className="missingInfo">*Αυτό το στοιχείο λείπει*</p>
          )}

          <p className="message">
            Τα παραπάνω στοιχεία έχουν συμπληρωθεί αυτόματα με βάση τα στοιχεία
            που έχετε υποβάλλει μέσω του Προφίλ σας. Αν κάποιο από αυτά λείπει
            ή χρειάζεται αλλαγή, θα πρέπει να γίνει μέσω της επεξεργασίας του
            Προφίλ σας. Η αλλαγή θα εμφανιστεί αυτόματα σε όλες τις αγγελίες που
            έχετε δημιουργήσει.
          </p>

          <h3>Πιστοποιητικά Υγείας:</h3>
          <p className="message">
            Ενημερώνονται αυτόματα από τα συστήματα της ΗΔΙΚΑ. Αν κάποιο
            πιστοποιητικό εμφανίζεται με κόκκινο χρώμα, παρακαλούμε
            επικοινωνήστε με τον γιατρό σας.
          </p>
          <div className="healthVerifications">
            <p
              className={
                userData.genHealthVerification ? "valid" : "invalid"
              }
            >
              Πιστοποιητικό Παθολόγου / Γενικού Γιατρού
            </p>
            <p
              className={
                userData.dermatologyVerification ? "valid" : "invalid"
              }
            >
              Πιστοποιητικό Δερματολόγου
            </p>
            <p
              className={
                userData.mentalHealthVerification ? "valid" : "invalid"
              }
            >
              Πιστοποιητικό Ψυχικής Υγείας
            </p>
          </div>
        </div>

        <div className="options2">
          <button onClick={handlePreviousStep}>
            <b>Προηγούμενο Βήμα</b>
          </button>
          <button onClick={handleSave}>
            <b>Προσωρινή Αποθήκευση</b>
          </button>
          <button onClick={handleNextStep}>
            <b>Επόμενο Βήμα</b>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfessionalCreateAd2;
