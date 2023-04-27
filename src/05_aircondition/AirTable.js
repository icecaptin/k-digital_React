import React, { useState } from 'react';
import AirJson from './AirJson';
import aircondition from '../05_aircondition/dataFrcst.json';
import aircondition2 from '../05_aircondition/dataFrcst_원본.json';

const AirTable = () => {
    const [selectedDate, setSelectedDate] = useState("2023-02-02");
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    // dtKey.map((aircondition2) => console.log(data[aircondition2]));
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
