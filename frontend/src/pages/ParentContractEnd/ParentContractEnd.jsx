import React from 'react'
import './ParentContractEnd.css'
import ParentNavigation from '../../components/ParentNavigation'
import ContractEnd from '../../components/ContractEnd'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'
import PagesIndex from '../../components/PagesIndex'


function ParentContractEnd()
{
	return	(
        <div className='parentContractEnd'>
            <ParentNavigation currentNavPage={"parEnd"}/>
            <div className="breadcrumbs">
                <p className="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p className="payment">ΛΗΞΗ</p>
            </div>
            <SortButton/>
            <div className="endedContracts">
                <ContractEnd/>
                <ContractEnd/>
                <ContractEnd/>
                <ContractEnd/>
            </div>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentContractEnd;