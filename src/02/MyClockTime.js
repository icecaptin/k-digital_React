import React, { useState, useEffect } from "react";

const MyClockTime = () => {
    const [timer, setTimer] = useState("00:00:00");

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        setTimer(`${hours}:${minutes}:${seconds}`);
    }

    useEffect(() => {
        const intervalId = setInterval(currentTimer, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <h1>{timer}</h1>
        </>
    );
}

export default MyClockTime;
