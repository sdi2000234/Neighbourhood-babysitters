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
            <div class="breadcrumbs">
                <p class="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p class="payment">ΠΛΗΡΩΜΗ</p>
            </div>
            <div className="sorting">
                <button>Ταξινόμηση v</button>
            </div>
            <Voucher/>
            <div class="pageIndex">
                <p>&lt;&emsp;1&emsp;&gt;</p>
            </div>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;