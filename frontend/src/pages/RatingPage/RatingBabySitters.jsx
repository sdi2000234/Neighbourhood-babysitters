import React from 'react'
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import ReviewCardBabySitter from '../../components/ReviewCardBabySitter.jsx';
import Grid from "@mui/material/Grid2";

const RatingBabySitters = () => {

  const imageUrl1 = "https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*";
  const name1 = "Μηχάλης Αντωνόπουλος"
  const start1 = "12/9/2024"
  const end1 = "12/10/24"
  const ratingscore1 = 4
  const parentcomment1 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nam, soluta iusto modi nostrum consectetur ullam sint. Architecto aperiam fuga itaque. Ab iusto blanditiis a molestias porro corrupti, veniam dolore?"

  const imageUrl2 = "https://media.istockphoto.com/id/1166523625/photo/puppy-boston-terrier-with-big-ears.jpg?s=612x612&w=0&k=20&c=Tj0NRVXNMR8IBdSL4Se-JauNEGJHv4z8ilOMTzP3I-8=";
  const name2 = "Ορφέας Παναγιώτου"
  const start2 = "4/1/2024"
  const end2 = "2/3/24"
  const ratingscore2 = 5
  const parentcomment2 = ""
  
  
  const imageUrl3 = "https://plus.unsplash.com/premium_photo-1706883087513-aef354a5e858?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBkb2d8ZW58MHx8MHx8fDA%3D";
  const name3 = "Αναστασία Ελευθερίου"
  const start3 = "1/2/2024"
  const end3 = "2/2/24"
  const ratingscore3 = 4
  const parentcomment3 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit?"


  const breadcrumbPages = [
    { name: 'ΠΡΟΦΙΛ', link: '/προφίλ' },
    { name: 'ΑΞΙΟΛΟΓΗΣΗ'}  // Η σελίδα που είμαι ήδη (χωρίς σύνδεσμο)  
  ];
  
  return (
    <Grid container spacing={2} direction={'column'}>
        <Grid item> 
            <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>
        </Grid>
        
        <Grid container spacing={2} direction={'row'}>
            <Grid item> 
                <ReviewCardBabySitter picLink={imageUrl1} name={name1} start={start1} end={end1} ratingscore={ratingscore1} parentcomment={parentcomment1}/>
            </Grid>
            <Grid item> 
                <ReviewCardBabySitter picLink={imageUrl2} name={name2} start={start2} end={end2} ratingscore={ratingscore2} parentcomment={parentcomment2}/>
            </Grid>
            <Grid item> 
                <ReviewCardBabySitter picLink={imageUrl3} name={name3} start={start3} end={end3} ratingscore={ratingscore3} parentcomment={parentcomment3}/>
            </Grid>
        </Grid>
        

    </Grid>
  )
}

export default RatingBabySitters