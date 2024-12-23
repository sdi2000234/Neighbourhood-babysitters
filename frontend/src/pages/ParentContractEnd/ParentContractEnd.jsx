import React from 'react'
import './ParentContractEnd.css'
import ParentNavigation from '../../components/ParentNavigation'
import ContractEnd from '../../components/ContractEnd'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'


function ParentContractEnd()
{
	return	(
        <div>
            <ParentNavigation/>
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
            <div className="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractEnd;