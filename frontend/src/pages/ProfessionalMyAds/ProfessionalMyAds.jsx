import React, { useState, useEffect } from "react";
import "./ProfessionalMyAds.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import AdEditOrPreview from "../../components/AdEditOrPreview";
import plusGrey from "../../assets/plus_grey.png";
import Breadcrumbs from "../../components/Breadcrumbs";
import ConfirmationDialogue from "../../components/ConfirmationDialogue";
import { getAuth } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { collection, doc, deleteDoc, getDocs, query, where } from "firebase/firestore";

function ProfessionalMyAds() {
  const [ads, setAds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [adToRemove, setAdToRemove] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  // Fetch ads from Firestore
  useEffect(() => {
    const fetchAds = async () => {
      if (!userId) {
        console.error("User not logged in.");
        return;
      }

      try {
        const q = query(collection(db, "ads"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        const fetchedAds = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAds(fetchedAds);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, [userId]);

  // Handle removal confirmation
  const showModal = (adId) => {
    setAdToRemove(adId);
    setModalVisible(true);
  };

  const handleConfirmRemove = async () => {
    if (!adToRemove) return;

    try {
      await deleteDoc(doc(db, "ads", adToRemove));
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== adToRemove));
    } catch (error) {
      console.error("Error deleting ad:", error);
    } finally {
      setModalVisible(false);
      setAdToRemove(null);
    }
  };

  const handleCancelRemove = () => {
    setModalVisible(false);
    setAdToRemove(null);
  };

  const handleNew = () => {
    navigate("../ProfessionalCreateAd1");
  };

  return (
    <div className="professionalMyAds">
      <Breadcrumbs page1="ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ" />

      <p className="createText">
        <b>Δημιουργία νέας αγγελίας</b>
      </p>

      <div className="adPannels">
        <div className="createNewAd">
          <button onClick={handleNew} className="newAd">
            <img alt="plus icon" src={plusGrey} />
          </button>
        </div>

        {ads.map((ad) => (
          <div
            key={ad.id}
            className={`adBox ${ad.status === "submitted" ? "blueBox" : "greyBox"}`}
          >
            <AdEditOrPreview
              id={ad.id}
              canEdit={ad.status !== "submitted"} // Only allow editing if not submitted
              onRemove={showModal}
              data={ad} // Pass ad data for rendering
            />
          </div>
        ))}
      </div>

      <ConfirmationDialogue
        visible={modalVisible}
        message="Θέλετε σίγουρα να διαγράψετε αυτήν την αγγελία;"
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
      />

      <Footer />
    </div>
  );
}

export default ProfessionalMyAds;
