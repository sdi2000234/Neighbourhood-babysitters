import React from "react";
import './ReviewCard.css';
import { Avatar, Rating, TextField, Button } from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';

function ReviewCard({ picLink, name}) {
  
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const handleSubmit = () => { //ΝΑ ΑΛΛΑΧΘΕΙ  
    alert("Rating:", rating);
    alert("Comment:", comment);
  };

  return (
    <div className="parentRatePannel">

      <div className="parentRateInfo">
        <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} className="parentRatePfp" />
        <p>{name}</p>
      </div>

      <div className="parentRating">
        <p >Βαθμολογία:</p>
        <Rating
          name="user-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          size="large"
        />
      </div>

      <div className="parentRatingComment">
        <p >Σχόλια:</p>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          placeholder="Προσθέστε κείμενο αξιολόγησης του Επαγγελματία."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ borderRadius: 2, width: 450, marginLeft: 4, marginRight: 4 }}
        />   
      </div>

      <div className="parentRateButton">  
        <Button 
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 2, width: 200 }}
          endIcon={<FileUploadIcon />}
          className="ButtonRatingParent"
        >
          ΥΠΟΒΟΛΗ ΑΞΙΟΛΟΓΗΣΗΣ
        </Button> 
      </div>
        
    </div>
  );
}

export default ReviewCard;
