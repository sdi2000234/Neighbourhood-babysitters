import React from 'react'
import './ParentContractPayment.css'
import ParentNavigation from '../../components/ParentNavigation'
import Voucher from '../../components/Voucher'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'
import PagesIndex from '../../components/PagesIndex'


function ParentContractPayment()
{
	return	(
        <div className='parentContractPayment'>
            <ParentNavigation currentNavPage={"parPay"}/>
            <div className="breadcrumbs">
                <p className="contract">ΣΥΜΦΩΝΗΤΙΚΟ &gt;</p>
                <p className="payment">ΠΛΗΡΩΜΗ</p>
            </div>
            <SortButton/>
            <Voucher/>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;