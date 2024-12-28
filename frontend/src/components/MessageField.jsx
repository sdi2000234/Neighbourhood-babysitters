import React from 'react'
import './MessageField.css';
import {TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SearchBar from './SearchBar.jsx'

//Ο component που θα αντιπροσωπεύει το πεδίο που θα γράφουν μήνυματα οι περσόνες 
function MessageField({placeholder}) {

    const [comment, setComment] = React.useState("");

    const handleSubmit = () => { //ΝΑ ΑΛΛΑΧΘΕΙ  
    alert("Comment:", comment);
    };
  
    return (
        <div className="MessageFieldPannel">

            <div className="userToSendMessage">
                <p>Προς:</p> <SearchBar placeholder={placeholder || "Αναζήτηση..."}/>
            </div>


            <div className="MessageFieldComment">
                <p >Μήνυμα:</p>
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
            
        </div>
    )

}

export default MessageField