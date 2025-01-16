import React from "react";
import './SortButton.css';
import arrow from '../assets/arrow_white.png';


function SortButton({sortName, sortDate})
{
    return (
        <div class="sorting">
            <div className="sort">
            <button>Ταξινόμηση <img className="arrow" alt="arrow" src={arrow}/></button>
            </div>
            <div class="dropdown-pannel">
                <button onClick={() => sortName('asc')}>A → Z</button>
                <button onClick={() => sortName('desc')}>Z → A</button>
                <button onClick={() => sortDate('asc', 'startDate')}>Έναρξη ↑</button>
                <button onClick={() => sortDate('desc', 'startDate')}>Έναρξη ↓</button>
                <button onClick={() => sortDate('asc', 'endDate')}>Λήξη ↑</button>
                <button onClick={() => sortDate('desc', 'endDate')}>Λήξη ↓</button>
            </div>
        </div>
    );
}

export default SortButton;