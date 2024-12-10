import React from 'react'
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import Card from '../../components/ReviewCard.jsx';

const RatingParents = () => {

  const imageUrl = "https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*";
  const name = "Άννα Δασκαλάκη"

  const breadcrumbPages = [
    { name: 'Συμφωνητικό', link: '/συμφωνητικό' },
    { name: 'Λήξη', link: '/λήξη' },
    { name: 'Αξιολόγηση'}  // Η σελίδα που είμαι ήδη (χωρίς σύνδεσμο) 
  ];
  
  return (
    <>
    <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>
    <br />
    <br />
    <Card picLink={imageUrl} name={name}/>
    </>
  )
}

export default RatingParents