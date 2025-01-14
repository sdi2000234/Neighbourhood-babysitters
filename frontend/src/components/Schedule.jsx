import React, { useState } from "react";
import './Schedule.css'

const Schedule = ({ canEdit=true }) => {
    const hours = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
    const days = ["ΔΕΥ", "ΤΡΙ", "ΤΕΤ", "ΠΕΜ", "ΠΑΡ", "ΣΑΒ", "ΚΥΡ"];

    const [checkedState, setCheckedState] = useState(Array(hours.length).fill(Array(days.length).fill(false)));
    
    const handleRowCheck = (rowIndex) => {
        if (!canEdit) return;
        const newCheckedState = [...checkedState];
        const isChecked = !newCheckedState[rowIndex].every(Boolean);
        newCheckedState[rowIndex] = newCheckedState[rowIndex].map(() => isChecked);
        setCheckedState(newCheckedState);
    };

    const handleColumnCheck = (colIndex) => {
        if (!canEdit) return;
        const isChecked = !checkedState.every((row) => row[colIndex]);
        const newCheckedState = checkedState.map((row) => row.map((cell, index) => (index === colIndex ? isChecked : cell)));
        setCheckedState(newCheckedState);
    };

    const handleCellCheck = (rowIndex, colIndex) => {
        if (!canEdit) return;
        const newCheckedState = [...checkedState];
        newCheckedState[rowIndex] = [...newCheckedState[rowIndex]];
        newCheckedState[rowIndex][colIndex] = !newCheckedState[rowIndex][colIndex];
        setCheckedState(newCheckedState);
    };

    return (
        <div className="scheduleTable">
            <table cellSpacing="0">
                <thead>
                    <tr className="header">
                        <th>Ώρες:</th>
                        {days.map((day, index) => (
                            <th key={index}>
                                <input
                                    type="checkbox"
                                    id={day}
                                    checked={checkedState.every((row) => row[index])}
                                    onChange={() => handleColumnCheck(index)}
                                    disabled={!canEdit}
                                />
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {hours.map((hour, rowIndex) => (
                        <tr key={rowIndex} className={`r${rowIndex + 8}`}>
                            <td>
                                <input
                                    type="checkbox"
                                    id={`hour${rowIndex + 8}`}
                                    checked={checkedState[rowIndex].every(Boolean)}
                                    onChange={() => handleRowCheck(rowIndex)}
                                    disabled={!canEdit}
                                />
                                {hour}
                            </td>
                            {days.map((_, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                        type="checkbox"
                                        id={`${days[colIndex].slice(0, 3)}`}
                                        checked={checkedState[rowIndex][colIndex]}
                                        onChange={() => handleCellCheck(rowIndex, colIndex)}
                                        disabled={!canEdit}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
