import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProfessionalCreateAd3.css";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";
import ProgressTracker from "../../components/ProgressTracker";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { db } from "../../firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function ProfessionalCreateAd3() {
  const municipalities = [
    "Δήμος Κομοτηνής",
    "Δήμος Αρριανών",
    // Add other municipalities
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  const [aboutMe, setAboutMe] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [occupationType, setOccupationType] = useState("");
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pre-fill fields for editing
  useEffect(() => {
    if (location.state && location.state.adData) {
      const { aboutMe, municipality, occupationType, availability } = location.state.adData;
      setAboutMe(aboutMe || "");
      setSelectedMunicipality(municipality || "");
      setOccupationType(occupationType || "");
      setAvailability(availability || []);
    }
  }, [location.state]);

  const handleSave = async () => {
    if (!userId) {
      alert("Πρέπει να είστε συνδεδεμένοι για να αποθηκεύσετε τις πληροφορίες σας.");
      return;
    }

    if (!aboutMe.trim() || !selectedMunicipality || !occupationType || availability.length === 0) {
      alert("Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.");
      return;
    }

    setLoading(true);

    try {
      const adData = {
        aboutMe,
        municipality: selectedMunicipality,
        occupationType,
        availability,
        userId,
        status: "temporary", // Save as temporary
        createdAt: new Date().toISOString(),
      };

      const docRef = doc(db, "ads", `${userId}-${Date.now()}`);
      await setDoc(docRef, adData);

      alert("Η αγγελία αποθηκεύτηκε προσωρινά.");
      navigate("/ProfessionalMyAds");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Σφάλμα κατά την αποθήκευση των δεδομένων.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ProgressTracker currentStep={3} />
      <form>
        <div className="personInfo3">
          <h1>ΑΓΓΕΛΙΑ - ΣΤΟΙΧΕΙΑ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΑΣ</h1>

          <div className="aboutMe">
            <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>
            <textarea
              placeholder="Γράψτε μια μικρή αυτοπαρουσίαση"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              style={{
                width: "100%",
                height: "150px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                resize: "none",
                fontSize: "16px",
              }}
            ></textarea>
          </div>

          <div className="municipalitiesDropdown">
            <FormControl fullWidth>
              <InputLabel id="municipality-select-label">Επιλέξτε Δήμο Δραστηριοποίησης</InputLabel>
              <Select
                labelId="municipality-select-label"
                id="municipality-select"
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
              >
                {municipalities.map((municipality, index) => (
                  <MenuItem key={index} value={municipality}>
                    {municipality}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="occupationType">
            <p className="infoType">Επιλέξτε Είδος Απασχόλησης:</p>
            <form>
              <input
                type="radio"
                id="partTime"
                value="partTime"
                name="occupation"
                checked={occupationType === "partTime"}
                onChange={(e) => setOccupationType(e.target.value)}
              />
              <label htmlFor="partTime">Μερική Απασχόληση</label>
              <br />
              <input
                type="radio"
                id="fullTime"
                value="fullTime"
                name="occupation"
                checked={occupationType === "fullTime"}
                onChange={(e) => setOccupationType(e.target.value)}
              />
              <label htmlFor="fullTime">Πλήρης Απασχόληση</label>
            </form>
          </div>

          <h3>Επιλέξτε Διαθεσιμότητα:</h3>
          <Schedule canEdit={true} onChange={setAvailability} />

          <div className="options3">
            <Button variant="outlined" onClick={handleSave} disabled={loading}>
              Προσωρινή Αποθήκευση
            </Button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ProfessionalCreateAd3;
