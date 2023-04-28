import React, { useState } from 'react';
import aircondition from "../05_aircondition/dataFrcst.json";
import styles from '../05_aircondition/AirTable.module.css';

const AirTable = () => {

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnResult = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    // dtcn 객체 생성
    const dtcn = {};
    dtKey.forEach((key, idx) => {
        const cn = aircondition[cnResult[idx]];
        const cnArr = cn.split(',');
        const cnObj = {};
        cnArr.forEach(item => {
            const [type, level] = item.split(':');
            cnObj[type] = level.trim();
        });
        dtcn[aircondition[key]] = cnObj;
    });

    const [clickedData, setClickedData] = useState({});

    const handleButtonClick = (dt) => {
        setClickedData(dtcn[dt]);
    };

    return (
        <article>
            <div className="container">

                <h1>공기질 예측</h1>
                <div className="grid parent">
                    {dtKey.map((key, idx) => (
                        <button key={`dt${idx}`} className="btns" onClick={() => handleButtonClick(aircondition[key])}>
                            {aircondition[key]}
                        </button>
                    ))}
                </div>
                <div className="result-container">
                    {Object.keys(clickedData).map((type, idx) => (
                        <div key={`clickedData${idx}`}>
                            <span className={styles.spnormal}>{type}</span>
                            {clickedData[type] === '낮음' ? (
                                <span className={styles.splow}>{clickedData[type]}</span>
                            ) : clickedData[type] === '보통' ? (
                                <span className={styles.spmoderate}>{clickedData[type]}</span>
                            ) : (
                                <span className={styles.sphigh}>{clickedData[type]}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div >
        </article>
    );
};

export default AirTable;
