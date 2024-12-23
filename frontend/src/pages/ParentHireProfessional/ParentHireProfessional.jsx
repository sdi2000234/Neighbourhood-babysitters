import React from 'react'
import './ParentHireProfessional.css'
import ParentNavigation from '../../components/ParentNavigation'
import Footer from '../../components/Footer'
import FavouriteProfessional from '../../components/FavouriteProfessional';


function ParentHireProfessional()
{
	return	(
        <div>
            <ParentNavigation/>
            <div className="breadcrumbs">
                <p className="hire">ΠΡΟΣΛΗΨΗ ΕΠΑΓΓΕΛΜΑΤΙΑ</p>
            </div>
            <div className='favourites'>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
                <FavouriteProfessional/>
            </div>
            <div className="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentHireProfessional;