import React, { useRef, useState, useEffect } from 'react';
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

  const pic = 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*';
  const text1 = 'Αίτηση';
  const text2 = '#014';
  const text3 = 'Ημερομηνία:';
  const text4 = '26/10/2024';
  const text5 = 'Επαγγελματίας:';
  const text6 = 'Δώρα Τσουφλίδη';
  const text7 = 'Δ';
  const text8 = 'Δώρα ΤσουφλίδηΔώρα sasdaaaaa';

  const historyLineRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (historyLineRef.current) {
      const historyLineWidth = historyLineRef.current.offsetWidth;
      setContainerWidth(historyLineWidth + 100); // Για δυναμικό μέγεθος ανάλογο του HistoryLine + 100px στο πλάτος 
    }
  }, []);

  return (
    <>
      <ParentNavigation currentNavPage={'parHiReq'} />

      <MyBreadcrumbs breadcrumbPages={breadcrumbPages}></MyBreadcrumbs>

      <div
        className='HistoryParent1Container'
        style={{ width: `${containerWidth}px` }} // Ορισμός του πλάτους του container
      >
        <div ref={historyLineRef}>
          <HistoryLine
            pic={pic}
            text1={text1}
            text2={text2}
            text3={text3}
            text4={text4}
            text5={text5}
            text6={text6}
          />
        </div>
        <div ref={historyLineRef}>
          <HistoryLine
            pic={pic}
            text1={text1}
            text2={text2}
            text3={text3}
            text4={text4}
            text5={text5}
            text6={text8}
          />
        </div>
        <div ref={historyLineRef}>
          <HistoryLine
            pic={pic}
            text1={text1}
            text2={text2}
            text3={text3}
            text4={text4}
            text5={text5}
            text6={text7}
          />
        </div>
      </div>

      <Footer />

    </>
  );
}

export default HistoryParent1;
