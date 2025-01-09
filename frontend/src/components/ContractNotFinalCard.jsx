import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ContractNotFinalCard.css'
import { Avatar } from "@mui/material";
import editIcon from '../assets/edit_icon_white.png';

function ContractNotFinalCard({ number, date, pic }) {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('../ParentContractRenew');
    };

    return (

    <div className='ContractNotFinalCardContainer'>
        <button className="closeButton">X</button>

        <p className='boldTextContractNotFinalCard'>Αίτημα #{number} </p>

        <p> <span className='boldTextContractNotFinalCard'>Ημερομηνία:</span> {date} </p>

        <Avatar alt="Profile" src={pic} sx={{ width: 50, height: 50 }} className="contractNotFinalCardPfp" />

        <button className='contractNotFinalCardButton' onClick={handleEdit}>
            Επεξεργασία
            <img src={editIcon} alt="editIcon"  className='editIcon'/>
            
        </button>
    </div>

    )

}

export default ContractNotFinalCard;


