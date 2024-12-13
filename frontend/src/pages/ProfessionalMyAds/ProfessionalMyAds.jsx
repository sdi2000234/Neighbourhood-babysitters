import React from 'react'
import './ProfessionalMyAds.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation'
import Footer from '../../components/Footer'
import AdPreview from '../../components/AdPreview'
import AdEdit from '../../components/AdEdit'
import plusGrey from '../../assets/plus_grey.png'

function ProfessionalMyAds()
{
  return (
    <div>
      <ProfessionalNavigation/>
      <div className="breadcrumbs">
        <p>ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ</p>
      </div>
      <p className="createText"><b>Δημιουργία νέας αγγελίας</b></p>
      <div className="adPannels">
        <div className="createNewAd">
          <button className="newAd"><img alt="plus icon" src={plusGrey}/></button>
        </div>
        <AdPreview/>
        <AdEdit/>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfessionalMyAds;