import React from 'react'
import './ParentContractPayment.css'
import ParentNavigation from '../../components/ParentNavigation'
import Voucher from '../../components/Voucher'
import Footer from '../../components/Footer'


function ParentContractPayment()
{
	return	(
        <div>
            <ParentNavigation/>
            <div className="breadcrumbs">
                <p className="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p className="payment">ΠΛΗΡΩΜΗ</p>
            </div>
            <div classNameName="sorting">
                <button>Ταξινόμηση v</button>
            </div>
            <Voucher/>
            <div className="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;