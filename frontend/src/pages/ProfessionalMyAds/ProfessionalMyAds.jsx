import React from 'react'
import './ProfessionalMyAds.css'
import ProfessionalNavigation from '../../components/ProfessionalNavigation'
import Footer from '../../components/Footer'
import AdPreview from '../../components/AdPreview'
import AdEdit from '../../components/AdEdit'
import plusGrey from '../../assets/plus_grey.png'
import Breadcrumbs from '../../components/Breadcrumbs'

function ProfessionalMyAds()
{
  return (
    <div className='professionalMyAds'>
      <ProfessionalNavigation currentNavPage={"profAds"}/>
      <Breadcrumbs page1={"ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ"}/>
      <p className="createText"><b>Δημιουργία νέας αγγελίας</b></p>
      <div className="adPannels">
        <div className="createNewAd">
          <button className="newAd"><a href='./ProfessionalCreateAd1'><img alt="plus icon" src={plusGrey}/></a></button>
        </div>
        <AdPreview/>
        <AdEdit/>
        <AdEdit/>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfessionalMyAds;