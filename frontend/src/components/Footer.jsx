import React from 'react'
import './Footer.css'
import phone from '../assets/white_phone.png'
import email from '../assets/white_email.png'


function Footer()
{
	return	(
		<div className="footer">
            <p><b>Επικοινωνία:</b></p>
            <div className="contact">
                <img src={phone} alt='phone'/>
                <p>2103258080</p>
                <img src={phone} alt='phone'/>
                <p>2103258090</p>
                <img src={email} alt='email'/>
                <p>ntantades@yeka.gr</p>
            </div>
            <p className="links">© Copyright 2022 - Υλοποίηση από το&ensp;<a href="https://grnet.gr/">ΕΔΥΤΕ</a>&ensp;με χρήση&ensp;<a href="https://mathe.ellak.gr/">Ανοικτού Λογισμικού</a>. &emsp; - &emsp; <a href="https://www.gov.gr/info/oroi-xrisis">Όροι Χρήσης</a></p>
        </div>
	);
}

export default Footer;