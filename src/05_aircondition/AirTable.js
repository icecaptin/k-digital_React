import React, { useState } from 'react';
import AirJson from './AirJson';
import aircondition from '../05_aircondition/dataFrcst.json';

const AirTable = () => {
    const [selectedDate, setSelectedDate] = useState("2023-02-02");

    const handleDateClick = (e) => {
        setSelectedDate(e.target.textContent);
    }

    const getAirDataByDate = (date) => {
        return aircondition[date];
    }

    return (
        <>
            <article className="container">
                <div className="grid">
                    <button onClick={handleDateClick}>2023-02-02</button>
                    <button onClick={handleDateClick}>2023-02-03</button>
                    <button onClick={handleDateClick}>2023-02-04</button>
                    <button onClick={handleDateClick}>2023-02-05</button>
                </div>
                <div>
                    <AirJson airData={getAirDataByDate(selectedDate)} />
                </div>
            </article>
        </>
    );
};

export default AirTable;
