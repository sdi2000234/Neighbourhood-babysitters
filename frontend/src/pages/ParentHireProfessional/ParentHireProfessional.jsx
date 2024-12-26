import React from 'react'
import './ParentHireProfessional.css'
import ParentNavigation from '../../components/ParentNavigation'
import Footer from '../../components/Footer'
import FavouriteProfessional from '../../components/FavouriteProfessional';
import PagesIndex from '../../components/PagesIndex';
import Breadcrumbs from '../../components/Breadcrumbs';


function ParentHireProfessional()
{
	return	(
        <div className='parentHireProfessional'>
            <ParentNavigation currentNavPage={"parHire"}/>
            <Breadcrumbs page1={"ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ"}/>
            <div className='favourites'>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
            </div>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentHireProfessional;