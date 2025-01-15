import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfessionalCreateAd3.css";
import Schedule from "../../components/Schedule";
import Footer from "../../components/Footer";
import ProgressTracker from "../../components/ProgressTracker";
import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { db } from "../../firebaseConfig"; // Adjust this to your Firebase config
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function ProfessionalCreateAd3({ canEdit = true }) {
    const municipalities = [
        "Δήμος Κομοτηνής",
        "Δήμος Αρριανών",
        "Δήμος Ιάσμου",
        "Δήμος Μαρωνείας – Σαπών",
        "Δήμος Δράμας",
        "Δήμος Δοξάτου",
        "Δήμος Κάτω Νευροκοπίου",
        "Δήμος Παρανεστίου",
        "Δήμος Προσοτσάνης",
        "Δήμος Αλεξανδρούπολης",
        "Δήμος Διδυμοτείχου",
        "Δήμος Ορεστιάδας",
        "Δήμος Σαμοθράκης",
        "Δήμος Σουφλίου",
        "Δήμος Θάσου",
        "Δήμος Καβάλας",
        "Δήμος Νέστου",
        "Δήμος Παγγαίου",
        "Δήμος Ξάνθης",
        "Δήμος Αβδήρων",
        "Δήμος Μύκης",
        "Δήμος Τοπείρου",
        "Δήμος Θεσσαλονίκης",
        "Δήμος Αμπελοκήπων – Μενεμένης",
        "Δήμος Βόλβης",
        "Δήμος Δέλτα",
        "Δήμος Θερμαϊκού",
        "Δήμος Θέρμης",
        "Δήμος Καλαμαριάς",
        "Δήμος Κορδελιού – Ευόσμου",
        "Δήμος Λαγκαδά",
        "Δήμος Νεάπολης – Συκεών",
        "Δήμος Παύλου Μελά",
        "Δήμος Πυλαίας – Χορτιάτη",
        "Δήμος Χαλκηδόνος",
        "Δήμος Ωραιοκάστρου",
        "Δήμος Βέροιας",
        "Δήμος Αλεξάνδρειας",
        "Δήμος Ηρωικής Πόλεως Νάουσας",
        "Δήμος Κιλκίς",
        "Δήμος Παιονίας",
        "Δήμος Έδεσσας",
        "Δήμος Αλμωπίας",
        "Δήμος Πέλλας",
        "Δήμος Σκύδρας",
        "Δήμος Κατερίνης",
        "Δήμος Δίου – Ολύμπου",
        "Δήμος Πύδνας – Κολινδρού",
        "Δήμος Σερρών",
        "Δήμος Αμφίπολης",
        "Δήμος Βισαλτίας",
        "Δήμος Εμμανουήλ Παππά",
        "Δήμος Ηράκλειας",
        "Δήμος Νέας Ζίχνης",
        "Δήμος Σιντικής",
        "Δήμος Πολύγυρου",
        "Δήμος Αριστοτέλη",
        "Δήμος Κασσάνδρας",
        "Δήμος Νέας Προποντίδας",
        "Δήμος Σιθωνίας",
        "Δήμος Κοζάνης",
        "Δήμος Βελβεντού",
        "Δήμος Βοΐου",
        "Δήμος Εορδαίας",
        "Δήμος Σερβίων",
        "Δήμος Γρεβενών",
        "Δήμος Δεσκάτης",
        "Δήμος Καστοριάς",
        "Δήμος Άργους Ορεστικού",
        "Δήμος Νεστορίου",
        "Δήμος Φλώρινας",
        "Δήμος Αμυνταίου",
        "Δήμος Πρεσπών",
        "Δήμος Ιωαννιτών",
        "Δήμος Βορείων Τζουμέρκων",
        "Δήμος Δωδώνης",
        "Δήμος Ζαγορίου",
        "Δήμος Ζίτσας",
        "Δήμος Κόνιτσας",
        "Δήμος Μετσόβου",
        "Δήμος Πωγωνίου",
        "Δήμος Αρταίων",
        "Δήμος Γεωργίου Καραϊσκάκη",
        "Δήμος Κεντρικών Τζουμέρκων",
        "Δήμος Νικόλαου Σκουφά",
        "Δήμος Ηγουμενίτσας",
        "Δήμος Σουλίου",
        "Δήμος Φιλιατών",
        "Δήμος Πρέβεζας",
        "Δήμος Ζηρού",
        "Δήμος Πάργας",
        "Δήμος Λαρισαίων",
        "Δήμος Αγιάς",
        "Δήμος Ελασσόνας",
        "Δήμος Κιλελέρ",
        "Δήμος Τεμπών",
        "Δήμος Τυρνάβου",
        "Δήμος Φαρσάλων",
        "Δήμος Καρδίτσας",
        "Δήμος Αργιθέας",
        "Δήμος Λίμνης Πλαστήρα",
        "Δήμος Μουζακίου",
        "Δήμος Παλαμά",
        "Δήμος Σοφάδων",
        "Δήμος Βόλου",
        "Δήμος Αλμυρού",
        "Δήμος Ζαγοράς – Μουρεσίου",
        "Δήμος Νοτίου Πηλίου",
        "Δήμος Ρήγα Φεραίου",
        "Δήμος Σκιάθου",
        "Δήμος Αλοννήσου",
        "Δήμος Σκοπέλου",
        "Δήμος Τρικκαίων",
        "Δήμος Μετεώρων",
        "Δήμος Πύλης",
        "Δήμος Φαρκαδόνας",
        "Δήμος Λαμιέων",
        "Δήμος Αμφίκλειας – Ελάτειας",
        "Δήμος Δομοκού",
        "Δήμος Καμένων Βούρλων",
        "Δήμος Λοκρών",
        "Δήμος Μακρακώμης",
        "Δήμος Στυλίδος",
        "Δήμος Λεβαδέων",
        "Δήμος Αλιάρτου – Θεσπιέων",
        "Δήμος Διστόμου – Αράχοβας – Αντίκυρας",
        "Δήμος Θηβαίων",
        "Δήμος Ορχομενού",
        "Δήμος Τανάγρας",
        "Δήμος Χαλκιδέων",
        "Δήμος Διρφύων – Μεσσαπίων",
        "Δήμος Ερέτριας",
        "Δήμος Ιστιαίας – Αιδηψού",
        "Δήμος Καρύστου",
        "Δήμος Κύμης – Αλιβερίου",
        "Δήμος Μαντουδίου – Λίμνης – Αγίας Άννας",
        "Δήμος Σκύρου",
        "Δήμος Καρπενησίου",
        "Δήμος Αγράφων",
        "Δήμος Δελφών",
        "Δήμος Δωρίδος",
        "Δήμος Κεντρικής Κέρκυρας – Διαποντίων Νήσων",
        "Δήμος Βόρειας Κέρκυρας",
        "Δήμος Νότιας Κέρκυρας",
        "Δήμος Παξών",
        "Δήμος Ζακύνθου",
        "Δήμος Ιθάκης",
        "Δήμος Αργοστολίου",
        "Δήμος Ληξουρίου",
        "Δήμος Σάμης",
        "Δήμος Λευκάδας",
        "Δήμος Μεγανησίου",
        "Δήμος Πατρέων",
        "Δήμος Αιγιαλείας",
        "Δήμος Δυτικής Αχαΐας",
        "Δήμος Ερυμάνθου",
        "Δήμος Καλαβρύτων",
        "Δήμος Ιεράς Πόλης Μεσολογγίου",
        "Δήμος Αγρινίου",
        "Δήμος Ακτίου – Βόνιτσας",
        "Δήμος Αμφιλοχίας",
        "Δήμος Θέρμου",
        "Δήμος Ναυπακτίας",
        "Δήμος Ξηρομέρου",
        "Δήμος Πύργου",
        "Δήμος Ανδραβίδας – Κυλλήνης",
        "Δήμος Ανδρίτσαινας – Κρεστένων",
        "Δήμος Αρχαίας Ολυμπίας",
        "Δήμος Ζαχάρως",
        "Δήμος Ήλιδας",
        "Δήμος Πηνειού",
        "Δήμος Τρίπολης",
        "Δήμος Βόρειας Κυνουρίας",
        "Δήμος Γορτυνίας",
        "Δήμος Μεγαλόπολης",
        "Δήμος Νότιας Κυνουρίας",
        "Δήμος Ναυπλιέων",
        "Δήμος Άργους – Μυκηνών",
        "Δήμος Επιδαύρου",
        "Δήμος Ερμιονίδας",
        "Δήμος Κορινθίων",
        "Δήμος Βέλου – Βόχας",
        "Δήμος Λουτρακίου – Περαχώρας – Αγίων Θεοδώρων",
        "Δήμος Νεμέας",
        "Δήμος Ξυλοκάστρου – Ευρωστίνης",
        "Δήμος Σικυωνίων",
        "Δήμος Σπάρτης",
        "Δήμος Ανατολικής Μάνης",
        "Δήμος Ελαφονήσου",
        "Δήμος Ευρώτα",
        "Δήμος Μονεμβασιάς",
        "Δήμος Καλαμάτας",
        "Δήμος Δυτικής Μάνης",
        "Δήμος Μεσσήνης",
        "Δήμος Οιχαλίας",
        "Δήμος Πύλου – Νέστορος",
        "Δήμος Τριφυλίας",
        "Δήμος Αθηναίων",
        "Δήμος Βύρωνος",
        "Δήμος Γαλατσίου",
        "Δήμος Δάφνης – Υμηττού",
        "Δήμος Ζωγράφου",
        "Δήμος Ηλιουπόλεως",
        "Δήμος Καισαριανής",
        "Δήμος Νέας Φιλαδέλφειας – Νέας Χαλκηδόνος",
        "Δήμος Αμαρουσίου",
        "Δήμος Αγίας Παρασκευής",
        "Δήμος Βριλησσίων",
        "Δήμος Ηρακλείου",
        "Δήμος Κηφισιάς",
        "Δήμος Λυκόβρυσης – Πεύκης",
        "Δήμος Μεταμορφώσεως",
        "Δήμος Νέας Ιωνίας",
        "Δήμος Παπάγου – Χολαργού",
        "Δήμος Πεντέλης",
        "Δήμος Φιλοθέης – Ψυχικού",
        "Δήμος Χαλανδρίου",
        "Δήμος Περιστερίου",
        "Δήμος Αγίας Βαρβάρας",
        "Δήμος Αγίων Αναργύρων – Καματερού",
        "Δήμος Αιγάλεω",
        "Δήμος Ιλίου",
        "Δήμος Πετρουπόλεως",
        "Δήμος Χαϊδαρίου",
        "Δήμος Καλλιθέας",
        "Δήμος Αγίου Δημητρίου",
        "Δήμος Αλίμου",
        "Δήμος Γλυφάδας",
        "Δήμος Ελληνικού – Αργυρούπολης",
        "Δήμος Μοσχάτου – Ταύρου",
        "Δήμος Νέας Σμύρνης",
        "Δήμος Παλαιού Φαλήρου",
        "Δήμος Αχαρνών",
        "Δήμος Βάρης – Βούλας – Βουλιαγμένης",
        "Δήμος Διονύσου",
        "Δήμος Κρωπίας",
        "Δήμος Λαυρεωτικής",
        "Δήμος Μαραθώνος",
        "Δήμος Μαρκόπουλου Μεσογαίας",
        "Δήμος Παιανίας",
        "Δήμος Παλλήνης",
        "Δήμος Ραφήνας – Πικερμίου",
        "Δήμος Σαρωνικού",
        "Δήμος Σπάτων – Αρτέμιδος",
        "Δήμος Ωρωπού",
        "Δήμος Ελευσίνας",
        "Δήμος Ασπροπύργου",
        "Δήμος Μάνδρας – Ειδυλλίας",
        "Δήμος Μεγαρέων",
        "Δήμος Φυλής",
        "Δήμος Πειραιώς",
        "Δήμος Κερατσινίου – Δραπετσώνας",
        "Δήμος Κορυδαλλού",
        "Δήμος Νίκαιας – Αγίου Ιωάννη Ρέντη",
        "Δήμος Περάματος",
        "Δήμος Σαλαμίνος",
        "Δήμος Αγκιστρίου",
        "Δήμος Αίγινας",
        "Δήμος Κυθήρων",
        "Δήμος Πόρου",
        "Δήμος Σπετσών",
        "Δήμος Τροιζηνίας – Μεθάνων",
        "Δήμος Ύδρας",
        "Δήμος Μυτιλήνης",
        "Δήμος Δυτικής Λέσβου",
        "Δήμος Ικαρίας",
        "Δήμος Φούρνων Κορσεών",
        "Δήμος Λήμνου",
        "Δήμος Αγίου Ευστρατίου",
        "Δήμος Ανατολικής Σάμου",
        "Δήμος Δυτικής Σάμου",
        "Δήμος Χίου",
        "Δήμος Ηρωικής Νήσου Ψαρών",
        "Δήμος Οινούσσών",
        "Δήμος Σύρου – Ερμούπολης",
        "Δήμος Άνδρου",
        "Δήμος Θήρας",
        "Δήμος Ανάφης",
        "Δήμος Ιητών",
        "Δήμος Σικίνου",
        "Δήμος Φολεγάνδρου",
        "Δήμος Καλυμνίων",
        "Δήμος Αγαθονησίου",
        "Δήμος Αστυπάλαιας",
        "Δήμος Λειψών",
        "Δήμος Λέρου",
        "Δήμος Πάτμου",
        "Δήμος Καρπάθου",
        "Δήμος Ηρωικής Νήσου Κάσου",
        "Δήμος Κέας",
        "Δήμος Κύθνου",
        "Δήμος Κω",
        "Δήμος Νισύρου",
        "Δήμος Μήλου",
        "Δήμος Κιμώλου",
        "Δήμος Σερίφου",
        "Δήμος Σίφνου",
        "Δήμος Μυκόνου",
        "Δήμος Αμοργού",
        "Δήμος Νάξου – Μικρών Κυκλάδων",
        "Δήμος Πάρου",
        "Δήμος Αντιπάρου",
        "Δήμος Ρόδου",
        "Δήμος Μεγίστης",
        "Δήμος Σύμης",
        "Δήμος Τήλου",
        "Δήμος Χάλκης",
        "Δήμος Τήνου",
        "Δήμος Ηρακλείου",
        "Δήμος Αρχανών – Αστερουσίων",
        "Δήμος Βιάννου",
        "Δήμος Γόρτυνας",
        "Δήμος Μαλεβιζίου",
        "Δήμος Μινώα Πεδιάδας",
        "Δήμος Φαιστού",
        "Δήμος Χερσονήσου",
        "Δήμος Αγίου Νικολάου",
        "Δήμος Ιεράπετρας",
        "Δήμος Οροπεδίου Λασιθίου",
        "Δήμος Σητείας",
        "Δήμος Ρεθύμνης",
        "Δήμος Αγίου Βασιλείου",
        "Δήμος Αμαρίου",
        "Δήμος Ανωγείων",
        "Δήμος Μυλοποτάμου",
        "Δήμος Χανίων",
        "Δήμος Αποκορώνου",
        "Δήμος Γαύδου",
        "Δήμος Καντάνου – Σελίνου",
        "Δήμος Κισσάμου",
        "Δήμος Πλατανιά",
        "Δήμος Σφακίων",
    ];

  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [occupationType, setOccupationType] = useState("");
  const [availability, setAvailability] = useState([]);
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePreviousStep = () => {
    navigate("/ProfessionalCreateAd2", { state: { canEdit } });
  };

  const handleSave = async () => {
    if (!validateInputs()) return;

    if (!userId) {
      alert("Πρέπει να είστε συνδεδεμένοι για να αποθηκεύσετε τις πληροφορίες σας.");
      return;
    }

    setLoading(true);

    try {
      const adData = {
        aboutMe: aboutMe.trim(),
        municipality: selectedMunicipality,
        occupationType,
        availability,
        createdAt: new Date().toISOString(),
      };

      // Save data to Firestore
      const docRef = doc(db, "ads", `${userId}-${Date.now()}`); // Generate unique ad ID
      await setDoc(docRef, adData);

      alert("Τα στοιχεία αποθηκεύτηκαν με επιτυχία!");
      navigate("/ProfessionalMyAds");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
      alert("Σφάλμα κατά την αποθήκευση των δεδομένων.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = async () => {
    if (!validateInputs()) return;
    navigate("/ProfessionalCreateAd4", { state: { canEdit } });
  };

  const validateInputs = () => {
    if (!aboutMe.trim()) {
      alert("Παρακαλώ συμπληρώστε την αυτοπαρουσίαση.");
      return false;
    }
    if (!selectedMunicipality) {
      alert("Παρακαλώ επιλέξτε έναν Δήμο.");
      return false;
    }
    if (!occupationType) {
      alert("Παρακαλώ επιλέξτε ένα Είδος Απασχόλησης.");
      return false;
    }
    if (availability.length === 0) {
      alert("Παρακαλώ επιλέξτε τη Διαθεσιμότητά σας.");
      return false;
    }
    return true;
  };

  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);
  };

  const handleAvailabilityChange = (newAvailability) => {
    setAvailability(newAvailability);
  };

  const handleOccupationChange = (event) => {
    setOccupationType(event.target.value);
  };

  return (
    <div>
      <ProgressTracker currentStep={3} />
      <form>
        <div className="personInfo3">
          <h1>ΑΓΓΕΛΙΑ - ΣΤΟΙΧΕΙΑ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΑΣ</h1>
          <div>
            {/* About Me Section */}
            <div className="aboutMe">
              <p className="infoType">Σύντομη Αυτοπαρουσίαση:</p>
              <p className="subtitle">(Θα εμφανίζεται στην περίληψη της αγγελίας)</p>
              <textarea
                readOnly={!canEdit}
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

            <div className="seperatorBar"></div>

            {/* Municipality Selection */}
            <div className="municipalitiesDropdown">
              <FormControl fullWidth>
                <InputLabel id="municipality-select-label">Επιλέξτε Δήμο Δραστηριοποίησης</InputLabel>
                <Select
                  labelId="municipality-select-label"
                  id="municipality-select"
                  value={selectedMunicipality}
                  onChange={handleMunicipalityChange}
                  disabled={!canEdit}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 48 * 5, // Approx. 5 items
                        overflowY: "auto",
                      },
                    },
                  }}
                >
                  {municipalities.map((municipality, index) => (
                    <MenuItem key={index} value={municipality}>
                      {municipality}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            {/* Occupation Type */}
            <div className="occupationType">
              <p className="infoType">Επιλέξτε Είδος Απασχόλησης:</p>
              <form>
                <input
                  type="radio"
                  id="partTime"
                  value="partTime"
                  name="occupation"
                  disabled={!canEdit}
                  checked={occupationType === "partTime"}
                  onChange={handleOccupationChange}
                />
                <label htmlFor="partTime"> Μερική Απασχόληση</label>
                <br />
                <input
                  type="radio"
                  id="fullTime"
                  value="fullTime"
                  name="occupation"
                  disabled={!canEdit}
                  checked={occupationType === "fullTime"}
                  onChange={handleOccupationChange}
                />
                <label htmlFor="fullTime"> Πλήρης Απασχόληση</label>
              </form>
            </div>

            {/* Availability Schedule */}
            <h3>Επιλέξτε Διαθεσιμότητα:</h3>
            <div className="schedule">
              <Schedule canEdit={canEdit} onChange={handleAvailabilityChange} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="options3">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePreviousStep}
              disabled={loading}
            >
              Προηγούμενο Βήμα
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleSave}
              disabled={loading}
            >
              Προσωρινή Αποθήκευση
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleNextStep}
              disabled={loading}
            >
              Επόμενο Βήμα
            </Button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ProfessionalCreateAd3;
