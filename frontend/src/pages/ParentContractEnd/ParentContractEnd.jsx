import React from 'react'
import './ParentContractEnd.css'
import ParentNavigation from '../../components/ParentNavigation'
import ContractEnd from '../../components/ContractEnd'
import Footer from '../../components/Footer'
import arrow from '../../assets/arrow_white.png'


function ParentContractPayment()
{
	return	(
        <div>
            <ParentNavigation/>
            <div className="breadcrumbs">
                <p className="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p className="payment">ΛΗΞΗ</p>
            </div>
            <div className="sorting">
                <button>Ταξινόμηση<img src={arrow} alt="arrow"/></button>
            </div>
            <ContractEnd/>
            <div className="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;