import React, { useState } from "react";
import "./Message.css";
import { Avatar, Button, Typography } from "@mui/material";

const Message = ({ picLink, name, content, date }) => {
  const [showFullContent, setShowFullContent] = useState(false); // Κατάσταση για εμφάνιση ολόκληρου κειμένου
  const [isVisible, setIsVisible] = useState(true); // Κατάσταση για την ορατότητα του μηνύματος

  // Συνάρτηση για εναλλαγή εμφάνισης
  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  // Συνάρτηση για το κλείσιμο του μηνύματος
  const handleClose = () => {
    setIsVisible(false);
  };

  // Περικοπή περιεχομένου αν ξεπερνά τους 150 χαρακτήρες
  const truncatedContent =
    content.length > 150 ? content.slice(0, 100) + "..." : content;

  // Αν το μήνυμα δεν είναι ορατό, επιστρέφουμε null (δεν το εμφανίζουμε)
  if (!isVisible) return null;

  return (
    <div className="message-container">
      <Avatar
        alt="Profile"
        src={picLink}
        sx={{ width: 50, height: 50 }}
        className="avatar-circle"
      />

      <div className="message-content">
        <div className="message-header">
          <span className="name">{name}</span>
        </div>

        <div className="message-text">
          <Typography variant="subtitle2" sx={{ fontSize: "1rem" }}>
            {showFullContent ? content : truncatedContent}
          </Typography>

          {content.length > 150 && (
            <Button
              onClick={toggleContent}
              sx={{
                textTransform: "none",
                fontSize: "0.9rem",
                padding: 0,
                marginTop: "5px",
              }}
            >
              {showFullContent ? "Λιγότερα" : "Περισσότερα"}
            </Button>
          )}
        </div>

        <div className="message-footer">
          <span className="date">{date}</span>
        </div>
      </div>

      <div className="close-icon" onClick={handleClose}>
        &#x2716;
      </div>
    </div>
  );
};

export default Message;
