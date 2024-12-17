import './App.css';
// import HomePage from './pages/HomePage/HomePage';
// import RatingParents from './pages/RatingPage/RatingParents';
import RatingBabySitters from './pages/RatingPage/RatingBabySitters';
// import MyBreadcrumbs from './components/MyBreadcrumbs';
// import Card from './components/ReviewCard';

function App() {

  // const breadcrumbPages = [
  //   { name: 'Home', link: '/' },
  //   { name: 'Profile', link: '/profile' },
  //   { name: 'History', link: '/history' },
  //   { name: 'Here'} // Η σελίδα που είμαι ήδη (χωρίς σύνδεσμο) 
  // ];

  const imageUrl = "https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*";
  const name = "Άννα Δασκαλάκη"

  return (
    <>

    {/* <HomePage/>  */}
    <RatingBabySitters />    
    {/* <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs> */}
    {/* <Card picLink={imageUrl} name={name}/> */}
    </>
  );
}

export default App;
