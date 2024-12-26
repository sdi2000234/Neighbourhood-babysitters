import React from 'react';
import HistoryLine from '../../components/HistoryLine';
import './HistoryParent1.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function HistoryParent1() {
  const breadcrumbPages = [
    { name: 'ΙΣΤΟΡΙΚΟ' },
    { name: 'ΑΙΤΗΣΕΙΣ' },
  ];

  // Ορίστε το array με τα δεδομένα που θέλεις να εμφανίσεις για κάθε HistoryLine
  const historyData = [
    {
      pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
      text1: 'Αίτηση',
      text2: '#014',
      text3: 'Ημερομηνία:',
      text4: '26/10/2024',
      text5: 'Επαγγελματίας:',
      text6: 'Δώρα Τσουφλίδη',
    },
    {
      pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
      text1: 'Αίτηση',
      text2: '#015',
      text3: 'Ημερομηνία:',
      text4: '01/11/2024',
      text5: 'Επαγγελματίας:',
      text6: 'Γιάννης Παπαδόπουλος',
    },
    {
      pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
      text1: 'Αίτηση',
      text2: '#016',
      text3: 'Ημερομηνία:',
      text4: '10/11/2024',
      text5: 'Επαγγελματίας:',
      text6: 'Μαρία Κωστοπούλου',
    }
  ];

  return (
    <>
      <ParentNavigation currentNavPage={'parHiReq'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='HistoryParent1Container'>
        <div className='card1 text-center'>
          <div className='card-header1'>
            <ul className='nav1 nav-tabs1 card-header-tabs'>
              <li className='nav-item1'>
                <a className='nav-link1 active' href='http://localhost:3000/HistoryParent1'>ΑΙΤΗΣΕΙΣ</a>
              </li>
              <li className='nav-item1'>
                <a className='nav-link1' href='http://localhost:3000/HistoryParent2'>ΣΥΜΦΩΝΗΤΙΚΑ</a>
              </li>
              <li className='nav-item1'>
                <a className='nav-link1' href='http://localhost:3000/HistoryParent3'>ΠΛΗΡΩΜΕΣ</a>
              </li>
            </ul>
          </div>
          <div className='card-body1'>
            <div className='HistoryParent1LineContainer'>
              {historyData.map((data, index) => (
                <div key={index}>
                  <HistoryLine
                    pic={data.pic}
                    text1={data.text1}
                    text2={data.text2}
                    text3={data.text3}
                    text4={data.text4}
                    text5={data.text5}
                    text6={data.text6}
                  />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HistoryParent1;
