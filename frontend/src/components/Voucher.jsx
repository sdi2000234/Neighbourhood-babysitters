import React from 'react'
import './Voucher.css'


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
	const checkMark = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fcheck-mark-symbol-transparent-background%2Fcheck-mark-symbol-transparent-background-2.png&f=1&nofb=1&ipt=b3b3db4b1cc41b96d33dc1b4854ae36ff91c050d8273f2f5369cbb29ae8ce192&ipo=images";
	const crossMark = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F75%2F75519.png&f=1&nofb=1&ipt=defd5cab76a161dc2c02c20ab8e125154d2b85ffe931e25a0d13ce068857b4f7&ipo=images"

	return	(
        <div>
    		<div className="paypannel">
                <div className="userInfo">
                    <img className="userpfp" src={professionalPfp}/>
                    <p>{professionalFirstName} {professionalLastName}</p>
                </div>
                <div className="paydetails">
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
                        <img src={voucherRecieved==true ? ckeckMark : crossMark}/>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Voucher;