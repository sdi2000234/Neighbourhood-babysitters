import React, { useState } from 'react'
import './ParentContractEnd.css'
import ParentNavigation from '../../components/ParentNavigation'
import ContractEnd from '../../components/ContractEnd'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'
import PagesIndex from '../../components/PagesIndex'
import Breadcrumbs from '../../components/Breadcrumbs'


function ParentContractEnd()
{
    const [components, setComponents] = useState([
        { id: 1, name: "Αύρα", lastname: "Παπαδοπούλου", start: "10/01/2024", end: "10/02/2024" },
        { id: 2, name: "Βασιλική", lastname: "Τασιοπούλου", start: "04/09/2024", end:  "09/12/2024"},
        { id: 3, name: "Γρηγορία", lastname: "Καμπελή", start: "05/05/2024", end: "05/07/2024" },
        { id: 4, name: "Λεώνη", lastname: "Παπαϊωάννου", start: "12/06/2024", end: "12/08/2024" }
    ]);


	return	(
        <div className='parentContractEnd'>
            <ParentNavigation currentNavPage={"parEnd"}/>
            <Breadcrumbs page1={"ΣΥΜΦΩΝΗΤΙΚΟ"} link1={"./ParentContractPayment"} page2={"ΛΗΞΗ"}/>
            <SortButton/>
            <div className="endedContracts">
                {components.map((component) => (
                    <ContractEnd key={component.id} id={component.id} firstName={component.name} lastName={component.lastname} startDate={component.start} endDate={component.end}/>
                ))}
            </div>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentContractEnd;