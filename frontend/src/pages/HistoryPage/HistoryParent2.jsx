import React from 'react';
import HistoryLine from '../../components/HistoryLine';
import './HistoryParent2.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function HistoryParent2() {
  const breadcrumbPages = [
    { name: 'ΙΣΤΟΡΙΚΟ' },
    { name: 'ΣΥΜΦΩΝΗΤΙΚΟ' },
  ];

  // Ορίστε το array με τα δεδομένα που θέλεις να εμφανίσεις για κάθε HistoryLine
  const historyData = [
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
    },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
      },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Έναρξη:',
        text2: '01/09/2024',
        text3: 'Λήξη:',
        text4: '28/02/2025',
        text5: 'Επαγγελματίας:',
        text6: 'Αγγελική Χριστοπούλου',
    },
  ];

  return (
    <>
      <ParentNavigation currentNavPage={'parHiCon'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='HistoryParent2Container'>
        <div className='card2 text-center'>
          <div className='card-header2'>
            <ul className='nav2 nav-tabs2 card-header-tabs'>
              <li className='nav-item2'>
                <a className='nav-link2' href='http://localhost:3000/HistoryParent1'>ΑΙΤΗΣΕΙΣ</a>
              </li>
              <li className='nav-item2'>
                <a className='nav-link2 active' href='http://localhost:3000/HistoryParent2'>ΣΥΜΦΩΝΗΤΙΚΑ</a>
              </li>
              <li className='nav-item2'>
                <a className='nav-link2' href='http://localhost:3000/HistoryParent3'>ΠΛΗΡΩΜΕΣ</a>
              </li>
            </ul>
          </div>
          <div className='card-body2'>
            <div className='HistoryParent2LineContainer'>
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

export default HistoryParent2;
