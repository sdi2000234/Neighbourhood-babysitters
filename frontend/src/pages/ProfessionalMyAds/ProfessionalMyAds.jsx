import React, { useState } from 'react'
import './ProfessionalMyAds.css'
import { useNavigate } from 'react-router-dom';
// import ProfessionalNavigation from '../../components/ProfessionalNavigation'
import Footer from '../../components/Footer'
import AdEditOrPreview from '../../components/AdEditOrPreview'
import plusGrey from '../../assets/plus_grey.png'
import Breadcrumbs from '../../components/Breadcrumbs'
import ConfirmationDialogue from '../../components/ConfirmationDialogue'

function ProfessionalMyAds() {
  const [components, setComponents] = useState([
    { id: 1, edit: false },
    { id: 2, edit: true },
    { id: 3, edit: true },
    { id: 4, edit: false }
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [componentToRemove, setComponentToRemove] = useState(null)

  const showModal = (id) => {
    setComponentToRemove(id)
    setModalVisible(true)
  }

  const handleConfirmRemove = () => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== componentToRemove)
    )
    setModalVisible(false)
    setComponentToRemove(null)
  }

  const handleCancelRemove = () => {
    setModalVisible(false)
    setComponentToRemove(null)
  }

    //Για περιήγηση σε υπολοιπες σελίδες
    const navigate = useNavigate();
    const handleNew = () => { navigate('../ProfessionalCreateAd1'); };

  return (
    <div className="professionalMyAds">
      {/* <ProfessionalNavigation currentNavPage="profAds" /> */}
      <Breadcrumbs page1="ΟΙ ΑΓΓΕΛΙΕΣ ΜΟΥ" />

      <p className="createText">
        <b>Δημιουργία νέας αγγελίας</b>
      </p>

      <div className="adPannels">
        <div className="createNewAd">
          <button onClick={handleNew} className="newAd">
            <img alt="plus icon" src={plusGrey} />
          </button>
        </div>

        {components.map((component) => (
          <AdEditOrPreview
            key={component.id}
            id={component.id}
            canEdit={component.edit}
            onRemove={showModal}
          />
        ))}
      </div>

      <ConfirmationDialogue
        visible={modalVisible}
        message="Θέλετε σίγουρα να διαγράψετε αυτήν την αγγελία;"
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
      />

      <Footer />
    </div>
  )
}

export default ProfessionalMyAds
