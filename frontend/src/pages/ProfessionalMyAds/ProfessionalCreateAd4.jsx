import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfessionalCreateAd4.css";
import Footer from "../../components/Footer";
import ProgressTracker from "../../components/ProgressTracker";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

function ProfessionalCreateAd4({ canEdit }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  // Handlers for buttons
  const handlePreviousStep = () => {
    navigate("/ProfessionalCreateAd3", { state: { canEdit } });
  };

  const handleSave = async () => {
    if (!userId) {
      alert("You must be logged in to save the ad.");
      return;
    }

    try {
      const adData = {
        userId, // Associate with the logged-in user
        status: "draft", // Indicate it's a draft
        createdAt: new Date().toISOString(),
      };

      const docRef = doc(collection(db, "ads")); // Generate a new ad ID
      await setDoc(docRef, adData);

      alert("Your ad has been temporarily saved.");
      navigate("/ProfessionalMyAds");
    } catch (error) {
      console.error("Error saving ad:", error);
      alert("Failed to save the ad. Please try again.");
    }
  };

  const handleSubmit = async () => {
    if (!userId) {
      alert("You must be logged in to submit the ad.");
      return;
    }

    try {
      const adData = {
        userId, // Associate with the logged-in user
        status: "submitted", // Indicate it's been submitted
        createdAt: new Date().toISOString(),
      };

      const docRef = doc(collection(db, "ads")); // Generate a new ad ID
      await setDoc(docRef, adData);

      alert("Your ad has been successfully submitted.");
      navigate("/ProfessionalMyAds");
    } catch (error) {
      console.error("Error submitting ad:", error);
      alert("Failed to submit the ad. Please try again.");
    }
  };

  return (
    <div>
      <ProgressTracker currentStep={4} />
      <div className="personInfo4">
        <h1>ΑΓΓΕΛΙΑ - ΥΠΟΒΟΛΗ</h1>
        <p className="message">
          ΠΡΟΣΟΧΗ: Εαν πατήσετε "Υποβολή" η παρούσα αγγελία θα δημοσιευθεί και
          δεν θα μπορεί να υποστεί μελλοντική επεξεργασία. Εάν δεν επιθυμείτε να
          κάνετε οριστική υποβολή, αλλά θέλετε να διατηρήσετε τα στοιχεία που
          έχετε συμπληρώσει, καθώς και την δυνατότητα μελλοντικής επεξεργασίας,
          πατήστε "Προσωρινή Αποθήκευση".
        </p>
        <div className="options4">
          <button onClick={handlePreviousStep}>
            <b>Προηγούμενο Βήμα</b>
          </button>
          <button onClick={handleSave}>
            <b>Προσωρινή Αποθήκευση</b>
          </button>
          <button onClick={handleSubmit}>
            <b>Υποβολή</b>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfessionalCreateAd4;
