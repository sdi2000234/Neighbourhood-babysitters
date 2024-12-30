import React, { useState } from 'react'
import './ParentHireProfessional.css'
import ParentNavigation from '../../components/ParentNavigation'
import Footer from '../../components/Footer'
import FavouriteProfessional from '../../components/FavouriteProfessional';
import PagesIndex from '../../components/PagesIndex';
import Breadcrumbs from '../../components/Breadcrumbs';
import ConfirmationDialogue from '../../components/ConfirmationDialogue';
import HireProfessionalMore from '../../components/HireProfessionalMore';


function ParentHireProfessional()
{
    const [components, setComponents] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]); //TODO: make it so that each component gets its own unique id

    const [modalVisible, setModalVisible] = useState(false);
    const [componentToRemove, setComponentToRemove] = useState(null);

    const showMore = () => {
        setModalVisible(true);
    }

    const showLess = () => {
        setModalVisible(false);
    }

    const showModal = (id) => {
        setComponentToRemove(id);
        setModalVisible(true);
    };

    const handleConfirmRemove = () => {
        setComponents((prevComponents) => prevComponents.filter((component) => component.id !== componentToRemove));
        setModalVisible(false);
        setComponentToRemove(null);
    };

    const handleCancelRemove = () => {
        setModalVisible(false);
        setComponentToRemove(null);
    };

	return	(
        <div className='parentHireProfessional'>
            <ParentNavigation currentNavPage={"parHire"}/>
            <Breadcrumbs page1={"ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"}/>
            <div className='favourites'>
                {components.map((component) => (
                    <FavouriteProfessional key={component.id} id={component.id} unLike={showModal} showMore={showMore}/>
                ))}
            </div>
            <ConfirmationDialogue
                visible={modalVisible}
                message="Θέλετε σίγουρα να αφαιρέσετε αυτήν την αγγελία από τις αγαπημένες σας;"
                onConfirm={handleConfirmRemove}
                onCancel={handleCancelRemove}
            />
            <HireProfessionalMore visible={modalVisible} onClose={showLess}/>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentHireProfessional;