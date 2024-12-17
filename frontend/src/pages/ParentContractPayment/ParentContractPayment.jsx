import React from 'react'
import './ParentContractPayment.css'
import ParentNavigation from '../../components/ParentNavigation'
import Voucher from '../../components/Voucher'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'


function ParentContractPayment()
{
	return	(
        <div>
            <ParentNavigation/>
            <div className="breadcrumbs">
                <p className="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p className="payment">ΠΛΗΡΩΜΗ</p>
            </div>
            <SortButton/>
            <Voucher/>
            <div className="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;