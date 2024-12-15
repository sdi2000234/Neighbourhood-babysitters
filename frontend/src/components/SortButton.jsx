import React from "react";
import './SortButton.css';
import arrow from '../assets/arrow_white.png';


function SortButton()
{
    return (
        <div class="sorting">
            <div className="sort">
            <button>Ταξινόμηση <img className="arrow" alt="arrow" src={arrow}/></button>
            </div>
            <div class="dropdown-content">
                <button>A → Z</button>
                <button>Z → A</button>
                <button>Έναρξη ↑</button>
                <button>Έναρξη ↓</button>
                <button>Λήξη ↑</button>
                <button>Λήξη ↓</button>
            </div>
        </div>
    );
}

export default SortButton;