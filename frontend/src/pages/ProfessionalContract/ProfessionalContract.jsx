// src/pages/ProfessionalContract.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContractProfessionalCard from "../../components/ContractProfessionalCard";
import "./ProfessionalContract.css";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import arrow_white from "../../assets/arrow_white.png";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function ProfessionalContract() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // Mark status="accepted"
  const handleAccept = async (notifId) => {
    try {
      const notifRef = doc(db, "notifications", notifId);
      await updateDoc(notifRef, { status: "accepted" });
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  // Mark status="declined"
  const handleDecline = async (notifId) => {
    try {
      const notifRef = doc(db, "notifications", notifId);
      await updateDoc(notifRef, { status: "declined" });
    } catch (error) {
      console.error("Error updating notification status:", error);
    }
  };

  // For computing 1 month after the chosen start
  const calculateEndDate = (startJSDate) => {
    const end = new Date(startJSDate.getTime());
    end.setMonth(end.getMonth() + 1);
    return end.toLocaleDateString("el-GR");
  };

  // Fetch notifications for the current professional
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "notifications"),
      where("to", "==", currentUser.uid),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // We label each doc with (index+1)
      const notifList = snapshot.docs.map((docSnap, index) => ({
        id: docSnap.id,
        index: index + 1,
        ...docSnap.data(),
      }));
      setNotifications(notifList);
    });
    return () => unsubscribe();
  }, [currentUser]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Breadcrumbs
        page1={"ΑΙΤΗΜΑΤΑ ΣΥΝΕΡΓΑΣΙΑΣ"}
        link1={"../ProfessionalContract"}
        page2={"ΑΙΤΗΣΕΙΣ"}
      />

      <div className="ProfessionalContractContainer">
        <div className="card1 text-center">
          <div className="card-header1">
            <ul className="nav1 nav-tabs1 card-header-tabs">
              <li className="nav-item1">
                <button
                  className="nav-link1"
                  onClick={() => navigate("../ProfessionalAllAppointments")}
                >
                  ΡΑΝΤΕΒΟΥ
                </button>
              </li>
              <li className="nav-item1">
                <button
                  className="nav-link1 active"
                  onClick={() => navigate("../ProfessionalContract")}
                >
                  ΑΙΤΗΣΕΙΣ ΣΥΝΕΡΓΑΣΙΑΣ
                </button>
              </li>
            </ul>
          </div>

          {/* Sorting button */}
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained"
              className="ButtonProfessionalContract"
              endIcon={
                <img
                  src={arrow_white}
                  alt="arrow"
                  style={{ width: "13px", height: "13px", marginLeft: "8px" }}
                />
              }
            >
              Ταξινόμηση ανά Ημερομηνίας
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Αύξουσα</MenuItem>
              <MenuItem onClick={handleClose}>Φθίνουσα</MenuItem>
            </Menu>
          </div>

          <div className="card-body1">
            {notifications.length > 0 ? (
              notifications.map((notif) => {
                const { startContract, parentName, parentEmail } = notif;

                // parse startContract
                let startJSDate = null;
                if (startContract) {
                  const parsed = new Date(startContract);
                  if (!isNaN(parsed)) {
                    startJSDate = parsed;
                  }
                }
                const startDisplay = startJSDate
                  ? startJSDate.toLocaleDateString("el-GR")
                  : "N/A";

                const endDate = startJSDate
                  ? calculateEndDate(startJSDate)
                  : "N/A";

                // Show parent's name if you have it; else fallback to parent's email
                const displayParentName = parentName || parentEmail || "N/A";

                return (
                  <div key={notif.id}>
                    <ContractProfessionalCard
                      number={notif.index} // "Αίτηση #1"
                      name={displayParentName} 
                      start={startDisplay}
                      finish={endDate}
                      age={notif.childAge || "N/A"}
                      status={notif.status}
                      onAccept={() => handleAccept(notif.id)}
                      onDecline={() => handleDecline(notif.id)}
                    />
                    <br />
                  </div>
                );
              })
            ) : (
              <Typography variant="body2">
                Δεν υπάρχουν αιτήματα συνεργασίας.
              </Typography>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfessionalContract;
