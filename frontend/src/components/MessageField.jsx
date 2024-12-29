import React from 'react';
import './MessageField.css';
import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SearchBar from './SearchBar.jsx'; // Υποθέτω ότι το SearchBar έχει onChange

function MessageField({ placeholder }) {
    const [comment, setComment] = React.useState("");
    const [recipient, setRecipient] = React.useState(""); // Για το πεδίο "Προς"
    const [showMessage, setShowMessage] = React.useState(false);

    const handleSubmit = () => {
        // Εμφάνιση του μηνύματος επιβεβαίωσης
        setShowMessage(true);

        // Εξαφάνιση του μηνύματος επιβεβαίωσης μετά από 6 δευτερόλεπτα
        setTimeout(() => setShowMessage(false), 6000);
    };

    return (
        <div className="MessageFieldPannel">
            <div className="userToSendMessage">
                <p>Προς:</p>
                <SearchBar
                    placeholder={placeholder || "Αναζήτηση..."}
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)} // Ενημέρωση του state recipient
                />
            </div>

            <div className="MessageFieldComment">
                <p>Μήνυμα:</p>
                <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Στείλτε μήνυμα..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    sx={{ borderRadius: 2, width: 450, marginLeft: 2, marginRight: 4 }}
                />
            </div>

            <div className="MessageFieldButton">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ marginTop: 2, width: 200 }}
                    endIcon={<SendIcon />}
                >
                    ΑΠΟΣΤΟΛΗ
                </Button>
            </div>

            {/* Εμφάνιση μηνύματος επιβεβαίωσης */}
            {showMessage && (
                <div className="confirmationMessage">
                    Το μήνυμα στάλθηκε!
                </div>
            )}
        </div>
    );
}

export default MessageField;
