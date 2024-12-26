import React from 'react'
import './ParentContractPayment.css'
import ParentNavigation from '../../components/ParentNavigation'
import Voucher from '../../components/Voucher'
import Footer from '../../components/Footer'
import SortButton from '../../components/SortButton'
import PagesIndex from '../../components/PagesIndex'
import Breadcrumbs from '../../components/Breadcrumbs'


function ParentContractPayment()
{
	return	(
        <div className='parentContractPayment'>
            <ParentNavigation currentNavPage={"parPay"}/>
            <Breadcrumbs page1={"ΣΥΜΦΩΝΗΤΙΚΟ"} link1={"./ParentContractPayment"} page2={"ΠΛΗΡΩΜΗ"}/>
            <SortButton/>
            <Voucher/>
            <PagesIndex/>
            <Footer/>
        </div>
	);
}


export default ParentContractPayment;