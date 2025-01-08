import React from 'react'
import './Dropdown.css'


function Dropdown({defaultoption, options})
{
    return (
      <div className='dropdownMenue'>
        <select defaultValue="">
          <option className="defaultOption" value="" disabled>
            {defaultoption}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
}
  
export default Dropdown;