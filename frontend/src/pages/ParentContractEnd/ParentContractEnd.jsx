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
        {name: "Αύρα", lastname: "Παπαδοπούλου", startDate: "10/01/2024", endDate: "10/02/2024"},
        {name: "Βασιλική", lastname: "Τασιοπούλου", startDate: "04/09/2024", endDate:  "09/12/2024"},
        {name: "Γρηγορία", lastname: "Καμπελή", startDate: "05/05/2024", endDate: "05/07/2024"},
        {name: "Λεώνη", lastname: "Παπαϊωάννου", startDate: "12/06/2024", endDate: "12/08/2024"}
    ]);

    const sortAlphabetically = (order) => {
        const sortedData = [...components].sort((a, b) => {
            const fullNameA = `${a.name} ${a.lastname}`;
            const fullNameB = `${b.name} ${b.lastname}`;
            return order === 'asc'
                ? fullNameA.localeCompare(fullNameB)
                : fullNameB.localeCompare(fullNameA);
        });
        setComponents(sortedData);
    };

    const sortByDate = (order, dateType) => {
        const sortedData = [...components].sort((a, b) => {
            const parseDate = (dateStr) => {
                const [day, month, year] = dateStr.split('/').map(Number); // Split and convert to numbers
                return new Date(year, month - 1, day); // Create a Date object (months are 0-based)
            };
      
            const dateA = parseDate(a[dateType]);
            const dateB = parseDate(b[dateType]);
      
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });

        setComponents(sortedData);
    };

	return	(
        <div className='parentContractEnd'>
            <ParentNavigation currentNavPage={"parEnd"}/>
            <Breadcrumbs page1={"ΣΥΜΦΩΝΗΤΙΚΟ"} link1={"./ParentContractPayment"} page2={"ΛΗΞΗ"}/>
            <SortButton sortName={sortAlphabetically} sortDate={sortByDate}/>
            <div className="endedContracts">
                {components.map((component, index) => (
                    <ContractEnd
                        key = {index}
                        firstName={component.name} 
                        lastName={component.lastname} 
                        startDate={component.startDate} 
                        endDate={component.endDate}
                    />
                ))}
            </div>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentContractEnd;