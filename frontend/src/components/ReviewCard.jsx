import React from "react";
import { Card, CardContent, Avatar, Typography, Rating, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FileUploadIcon from '@mui/icons-material/FileUpload';

const ReviewCard = ({picLink , name }) => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const handleSubmit = () => { //ΝΑ ΑΛΛΑΧΘΕΙ  
    alert("Rating:", rating);
    alert("Comment:", comment);
  };

  return (
    <Card className="card" sx={{ maxWidth: 600, margin: "auto", padding: "2rem" }}>
      <CardContent>
        {/* 1η Γραμμή: Εικόνα προφίλ και όνομα */}
        <Grid
          container
          spacing={2}
          alignItems="center">
          <Grid item>
            <Avatar alt="Profile" src={picLink} sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{name}</Typography>
          </Grid>
        </Grid>

        {/* 2η Γραμμή: Βαθμολογία με αστέρια */}
        <Grid container spacing={2} mt={3} alignItems="center">
          <Grid item>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}> Βαθμολογία: </Typography>
          </Grid>

          <Grid item>
            <Rating
              name="user-rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              size="large"
              sx={{ color: "#ffb400" }} 
            />
          </Grid>
        </Grid>

        {/* 3η Γραμμή: Σχόλιο: */}
        <Grid container spacing={2} mt={2}>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Σχόλια:</Typography>
          </Grid>
        </Grid>

        {/* 4η Γραμμή: Κείμενο σχολίων */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              placeholder="Προσθέστε κείμενο αξιολόγησης του Επαγγελματία."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              sx={{ borderRadius: 2, width: 450 }}
            />            
          </Grid>

        </Grid>

        {/* 5η Γραμμή: Κουμπί Υποβολής*/}
        <Grid container spacing={2} mt={4} justifyContent="center">
          <Grid item xs={12}>
            <Button 
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ marginTop: 2, width: 200 }}
              endIcon={<FileUploadIcon />}
            >
              ΥΠΟΒΟΛΗ ΑΞΙΟΛΟΓΗΣΗΣ
            </Button>         
          </Grid>
        </Grid>

      </CardContent>      
    </Card>
  );
};

export default ReviewCard;
