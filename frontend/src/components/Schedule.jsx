import React, { useState, useEffect } from "react";
import './Schedule.css';

const Schedule = ({ canEdit = true, onChange }) => {
    const hours = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
    const days = ["ΔΕΥ", "ΤΡΙ", "ΤΕΤ", "ΠΕΜ", "ΠΑΡ", "ΣΑΒ", "ΚΥΡ"];

    const [checkedState, setCheckedState] = useState(() =>
        Array(hours.length).fill(null).map(() => Array(days.length).fill(false))
    );

    // Prevent unintended updates in the parent by only calling `onChange` when necessary
    useEffect(() => {
        if (onChange) {
            const flatState = checkedState.flat();
            if (flatState.some((state) => state)) {
                onChange(checkedState);
            }
        }
    }, [checkedState, onChange]);

    const handleRowCheck = (rowIndex) => {
        if (!canEdit) return;
        setCheckedState((prevState) =>
            prevState.map((row, i) =>
                i === rowIndex ? row.map(() => !row.every(Boolean)) : row
            )
        );
    };

    const handleColumnCheck = (colIndex) => {
        if (!canEdit) return;
        const isChecked = !checkedState.every((row) => row[colIndex]);
        setCheckedState((prevState) =>
            prevState.map((row) =>
                row.map((cell, index) => (index === colIndex ? isChecked : cell))
            )
        );
    };

    const handleCellCheck = (rowIndex, colIndex) => {
        if (!canEdit) return;
        setCheckedState((prevState) =>
            prevState.map((row, i) =>
                i === rowIndex
                    ? row.map((cell, j) => (j === colIndex ? !cell : cell))
                    : row
            )
        );
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
