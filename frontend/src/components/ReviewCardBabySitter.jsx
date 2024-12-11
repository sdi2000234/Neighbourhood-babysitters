import React from "react";
import { Card, CardContent, Avatar, Typography, Rating, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ReviewCardBabySitter = ({ picLink, name, start, end, ratingscore, parentcomment }) => {
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
    <Card 
      className="card"
      sx={{ 
        width: "100%", 
        maxWidth: 380, 
        margin: "auto", 
        padding: "1rem",  
        height: "auto", 
        minHeight: 550,  
      }}
    >
      <CardContent>
        {/* 1η Γραμμή: Εικόνα προφίλ και όνομα */}
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{name}</Typography>
          </Grid>
        </Grid>

        {/* 2η Γραμμή: ΕΝΑΡΞΗ ΚΑΙ ΛΗΞΗ */}
        <Grid container spacing={2} mt={2} direction="column">
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
              ΕΝΑΡΞΗ:{" "}
              <Typography component="span" sx={{ fontSize: '1rem' }}>
                {start}
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
              ΛΗΞΗ:{" "}
              <Typography component="span" sx={{ fontSize: '1rem' }}>
                {end}
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        {/* 3η Γραμμή: Αξιολόγηση */}
        <Grid container spacing={2} mt={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>ΑΞΙΟΛΟΓΗΣΗ</Typography>
          </Grid>
          <Grid item>
            <Rating
              name="user-rating"
              value={ratingscore}
              readOnly
              size="large"
              sx={{ color: "#ffb400" }}
            />
          </Grid>
        </Grid>

        {/* 4η Γραμμή: Σχόλια */}
        <Grid container spacing={2} mt={2} direction="column">
          <Grid item style={{ textAlign: "center" }} mt={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', justifyItems: "center" }}>
              ΣΧΟΛΙΑ
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ fontSize: '1rem' }}>{truncatedComment}</Typography>
          </Grid>
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReviewCardBabySitter;
