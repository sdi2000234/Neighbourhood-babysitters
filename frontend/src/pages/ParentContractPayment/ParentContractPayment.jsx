import React from 'react'
import './ParentContractPayment.css'
import ParentNavigation from '../../components/ParentNavigation'
import Voucher from '../../components/Voucher'
import Footer from '../../components/Footer'
import arrow from '../../assets/arrow_white.png'


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
                <button>Ταξινόμηση<img src={arrow} alt="arrow"/></button>
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