import React from 'react';
import HistoryLine from '../../components/HistoryLine';
import './HistoryParent3.css';
import ParentNavigation from '../../components/ParentNavigation';
import Footer from '../../components/Footer';
import MyBreadcrumbs from '../../components/MyBreadcrumbs';

function HistoryParent3() {
  const breadcrumbPages = [
    { name: 'ΙΣΤΟΡΙΚΟ' },
    { name: 'ΠΛΗΡΩΜΕΣ' },
  ];

  // Ορίστε το array με τα δεδομένα που θέλεις να εμφανίσεις για κάθε HistoryLine
  const historyData = [
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Ημερομηνία:',
        text2: '01/11/2024',
        text3: 'Ποσό:',
        text4: '500,00\u20AC ',
        text5: 'Προς:',
        text6: 'Αγγελική Χριστοπούλου',
    },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Ημερομηνία:',
        text2: '01/11/2024',
        text3: 'Ποσό:',
        text4: '500,00\u20AC ', 
        text5: 'Προς:',
        text6: 'Αγγελική Χριστοπούλου',
    },
    {
        pic: 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*',
        text1: 'Ημερομηνία:',
        text2: '01/11/2024',
        text3: 'Ποσό:',
        text4: '500,00\u20AC ',
        text5: 'Προς:',
        text6: 'Αγγελική Χριστοπούλου',
    }
  ];

  return (
    <>
      <ParentNavigation currentNavPage={'parHiPay'} />
      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div className='HistoryParent3Container'>
        <div className='card3 text-center'>
          <div className='card-header3'>
            <ul className='nav3 nav-tabs3 card-header-tabs'>
              <li className='nav-item3'>
                <a className='nav-link3' href='http://localhost:3000/HistoryParent1'>ΑΙΤΗΣΕΙΣ</a>
              </li>
              <li className='nav-item3'>
                <a className='nav-link3' href='http://localhost:3000/HistoryParent2'>ΣΥΜΦΩΝΗΤΙΚΑ</a>
              </li>
              <li className='nav-item3'>
                <a className='nav-link3 active' href='http://localhost:3000/HistoryParent3'>ΠΛΗΡΩΜΕΣ</a>
              </li>
            </ul>
          </div>
          <div className='card-body3'>
            <div className='HistoryParent3LineContainer'>
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

export default HistoryParent3;
