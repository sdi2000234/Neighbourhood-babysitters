import React from "react";
import './ReviewCardProfessional.css';
import { Avatar, Typography, Rating, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

function ReviewCardProfessional({ picLink, name, start, end, ratingscore, parentcomment}) {
  
  const [showFullComment, setShowFullComment] = React.useState(false); // Κατάσταση για εμφάνιση ολόκληρου κειμένου

  const toggleComment = () => {
    setShowFullComment((prev) => !prev);
  };

  
  let truncatedComment;
  if(parentcomment.length > 150){ // Περικοπή σχολίου αν ξεπερνά τους 150 χαρακτήρες 
      truncatedComment = parentcomment.slice(0, 150) + "...";
  }
  else if (parentcomment.length === 0){
      truncatedComment = 'Δεν υπάρχουν σχόλια';
  }
  else{
      truncatedComment = parentcomment;
  }

  return (
    <div className="professionalRatePannel">

      <div className="professionalRateInfo">
        <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} className="professionalRatePfp" />
        <p>{name}</p>
      </div>

      <div className="dateRate">
        <p className="wordRate">ΕΝΑΡΞΗ:</p>
        <p className="thedateRate">{start}</p>
      </div>

      <div className="dateRate">
        <p className="wordRate">ΛΗΞΗ:</p>
        <p className="thedateRate">{end}</p>
      </div>

      <div className="professionalRating">
        <p>ΑΞΙΟΛΟΓΗΣΗ</p>
        <Rating
          name="user-rating"
          value={ratingscore}
          readOnly
          size="large"
          sx={{ color: "#ffb400" }}
        />
      </div>

      <div className="professionalRatingComment">
        <p>ΣΧΟΛΙΑ</p>
        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
          {showFullComment ? parentcomment : truncatedComment}
        </Typography>
        {parentcomment.length > 150 && (
          <Grid item>
            <Button
              onClick={toggleComment}
              sx={{ textTransform: "none", fontSize: "1rem", color: "#007bff", padding: 0 }}
            >
              {showFullComment ? "Λιγότερα" : "Περισσότερα"}
            </Button>
          </Grid>
        )}
      </div>


        
    </div>
  );
}

export default ReviewCardProfessional;
