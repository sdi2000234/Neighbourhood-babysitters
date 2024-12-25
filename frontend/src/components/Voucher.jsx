import React from 'react'
import './Voucher.css'
import checkMark from '../assets/checkmark.png'
import crossMark from '../assets/crossmark.png'
import defaultQR from '../assets/QRCode.jpeg'
import emptyProfile from '../assets/empty_profile.png'

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
        <div className='voucherDiv'>
    		<div className="payPannel">
                <div className="userInfo">
                    <img className="userPfp" alt='profile' src={professionalPfp===null ? emptyProfile : professionalPfp}/>
                    <p>{professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}</p>
                </div>
                <div className="payDetails">
                    <p><b>ΔΙΑΡΚΕΙΑ ΣΥΜΦΩΝΗΤΙΚΟΥ &emsp; ΕΝΑΡΞΗ: {startWork===null ? "ηη/μμ/εεεε" : startWork} &emsp; ΛΗΞΗ: {finishWork===null ? "ηη/μμ/εεεε" : finishWork}</b></p>
                    <p><b>VOUCHER:</b></p>
                    <div className="voucher">
                        <div className="code">
                            <img className="QRCode" alt='QR' src={QR===null ? defaultQR : QR}/>
                        </div>
                        <div className="info">
                            <p className="date">{month===null ? "ΜΗΝΑΣ" : month} {year===null ? "ΕΤΟΣ" : year}</p>
                            <p className="amount">ΠΟΣΟ: {voucherAmount===null ? "ΕΕΕ,ΛΛ" : voucherAmount} €</p>
                        </div>
                    </div>
                    <p>Τσεκάροντας το παρακάτω κουτί, συμφωνείτε πως η/ο επαγγελματίας {professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName} έχει ολοκληρώσει την εργασία της/του για τον μήνα {month===null ? "ΜΗΝΑΣ" : month} του {year===null ? "ΕΤΟΣ" : year}, και δρομολογείτε την πληρωμή του για αυτόν τον μήνα μέσω του voucher.</p>
                    <p><b>ΕΠΙΒΑΙΒΕΩΣΗ ΟΛΟΚΛΗΡΩΣΗΣ ΕΡΓΑΣΙΑΣ ΓΙΑ ΤΟΝ ΜΗΝΑ {month===null ? "ΜΗΝΑΣ" : month} {year===null ? "ΕΤΟΣ" : year}:</b><input type="checkbox" id="completeWrok"/></p>
                    <p>Αφού τσεκάρετε το προηγούμενο κουτί, το παρακάτω στοιχείο θα εμφανιστεί τσεκαρισμένο όταν η/ο επαγγελματίας {professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName} επιβεβαιώσει ότι έλαβε το voucher για τον μήνα {month===null ? "ΜΗΝΑΣ" : month} του {year===null ? "ΕΤΟΣ" : year}.</p>
                    <div className="confirmation">
                        <p><b>ΕΠΙΒΑΙΒΕΩΣΗ ΛΗΨΗΣ VOUCHER ΑΠΟ {professionalFirstName===null ? "Όνομα" : professionalFirstName} {professionalLastName===null ? "Επώνυμο" : professionalFirstName}: </b></p>
                        <img src={voucherRecieved===true ? checkMark : crossMark} alt='chekc'/>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Voucher;