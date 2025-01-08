import React from 'react'
import MyBreadcrumbs from '../../components/MyBreadcrumbs';
import Card from '../../components/ReviewCard.jsx';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';

const RatingParents = () => {

  const imageUrl = "https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*";
  const name = "Άννα Δασκαλάκη"

  const breadcrumbPages = [
    { name: 'ΣΥΜΦΩΝΗΤΙΚΟ', link: '/συμφωνητικό' },
    { name: 'ΛΗΞΗ', link: '/λήξη' },
    { name: 'ΑΞΙΟΛΟΓΗΣΗ'}  // Η σελίδα που είμαι ήδη (χωρίς σύνδεσμο) 
  ];

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
  };
  
  return (
    <>
    <ParentNavigation currentNavPage={'parEnd'}/>
    <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>
    <br />
    <br />
    <div style={pageStyle}>
      <Card picLink={imageUrl} name={name} />
    </div>
    <Footer/>
    </>
  )
}

export default RatingParents
