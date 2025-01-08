import React from 'react'
import './HistoryLine.css'
import { Avatar } from "@mui/material";

//Component για τις σελίδες του ιστορικού που δείχνει τα στοιχεία του προσώπου (αντίστοιχη δομή για όλες τις υποσελίδες άρα χρήση ίδιου component)
function HistoryLine({text1,text2,text3,text4,text5,text6,text7,text8,pic}) {
  return (
    <div className='HistoryLineContainer'>
        
        <p> <span className='boldTextHistoryLine'>{text1}</span> {text2} </p>

        <p> <span className='boldTextHistoryLine'>{text3}</span> {text4} </p>

        <p> <span className='boldTextHistoryLine'>{text5}</span> {text6} </p>

        <p> <span className='boldTextHistoryLine'>{text7}</span> {text8} </p>

        <Avatar alt="Profile" src={pic} sx={{ width: 50, height: 50 }} className="parentPfp" />

    </div>
  )
}

export default HistoryLine