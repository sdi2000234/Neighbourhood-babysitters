import React from 'react'
import './Voucher.css'
import checkMark from '../assets/checkmark.png'
import crossMark from '../assets/crossmark.png'

function Voucher()
{
	const professionalPfp = null;
	const professionalFirstName = null;
	const professionalLastName = null;
	const startWork = null;
	const finishWork = null;
    const QR = null; // voucher's QR code
	const month = null;
	const year = null;
	const voucherAmount = null;
	const voucherRecieved = null; // boolean

	return	(
        <div>
    		<div className="payPannel">
                <div className="userInfo">
                    <img className="userPfp" src={professionalPfp}/>
                    <p>{professionalFirstName} {professionalLastName}</p>
                </div>
                <div className="payDetails">
                    <p><b>ΔΙΑΡΚΕΙΑ ΣΥΜΦΩΝΗΤΙΚΟΥ &emsp; ΕΝΑΡΞΗ: {startWork} &emsp; ΛΗΞΗ: {finishWork}</b></p>
                    <p><b>VOUCHER:</b></p>
                    <div className="voucher">
                        <div className="code">
                            <img className="QRCode" src={QR}/>
                        </div>
                        <div className="info">
                            <p className="date">{month} {year}</p>
                            <p className="amount">ΠΟΣΟ: {voucherAmount} €</p>
                        </div>
                    </div>
                    <p>Τσεκάροντας το παρακάτω κουτί, συμφωνείτε πως η/ο επαγγελματίας {professionalFirstName} {professionalLastName} έχει ολοκληρώσει την εργασία της/του για τον μήνα {month} του {year}, και δρομολογείτε την πληρωμή του για αυτόν τον μήνα μέσω του voucher.</p>
                    <p><b>ΕΠΙΒΑΙΒΕΩΣΗ ΟΛΟΚΛΗΡΩΣΗΣ ΕΡΓΑΣΙΑΣ ΓΙΑ ΤΟΝ ΜΗΝΑ {month} {year}:</b><input type="checkbox" id="completeWrok"/></p>
                    <p>Αφού τσεκάρετε το προηγούμενο κουτί, το παρακάτω στοιχείο θα εμφανιστεί τσεκαρισμένο όταν η/ο επαγγελματίας {professionalFirstName} {professionalLastName} επιβεβαιώσει ότι έλαβε το voucher για τον μήνα {month} του {year}.</p>
                    <div className="confirmation">
                        <p><b>ΕΠΙΒΑΙΒΕΩΣΗ ΛΗΨΗΣ VOUCHER ΑΠΟ {professionalFirstName} {professionalLastName}: </b></p>
                        <img src={voucherRecieved==true ? checkMark : crossMark}/>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Voucher;