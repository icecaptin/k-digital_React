import React from 'react';
import AirJson from './AirJson';

const AirTable = () => {
    return (
        <>
            <article className="container">
                <div className="grid">
                    <a href="#" role="button">2023-02-02</a>
                    <a href="#" role="button">2023-02-03</a>
                    <a href="#" role="button">2023-02-04</a>
                    <a href="#" role="button">2023-02-05</a>
                </div>
                <div>
                    <AirJson />
                </div>
            </article>
        </>
    );
};

export default AirTable;
