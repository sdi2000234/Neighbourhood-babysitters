import React from 'react'
import './ParentHireProfessional.css'
import ParentNavigation from '../../components/ParentNavigation'
import Footer from '../../components/Footer'
import FavouriteProfessional from '../../components/FavouriteProfessional';
import PagesIndex from '../../components/PagesIndex';


function ParentHireProfessional()
{
	return	(
        <div>
            <ParentNavigation currentNavPage={"parHire"}/>
            <div className="breadcrumbs">
                <p className="hire">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</p>
            </div>
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