import React from 'react'
import './ParentContractEnd.css'
import ParentNavigation from '../../components/ParentNavigation'
import ContractEnd from '../../components/ContractEnd'
import Footer from '../../components/Footer'


function ParentContractPayment()
{
	return	(
        <div>
            <ParentNavigation/>
            <div class="breadcrumbs">
                <p class="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p class="payment">ΛΗΞΗ</p>
            </div>
            <div className="sorting">
                <button>Ταξινόμηση v</button>
            </div>
            <ContractEnd/>
            <div class="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;