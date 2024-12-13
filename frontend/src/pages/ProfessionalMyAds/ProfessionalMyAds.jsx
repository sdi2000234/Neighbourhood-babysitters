import React from 'react'
import './ProfessionalMyAds.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation'
import Footer from '../../components/Footer'

const ProfessionalMyAds = () => {
  return (
    <div>
      <ProfessionalNavigation/>
      <div className="breadcrumbs">
        <p>ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</p>
      </div>
      <div className="createNewAd">
        <p>Δημιουργία νέας αγγελίας</p>
      </div>
      <div className="pageIndex">
        <p>&lt;&emsp;1&emsp;&gt;</p>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfessionalMyAds;