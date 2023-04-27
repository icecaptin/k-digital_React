import React, { useState, useEffect } from "react";

const MyClockTime = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const currentTimer = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        setDate(`${year}-${month}-${day}`);
        setTime(`${hours}:${minutes}:${seconds}`);
    }

    useEffect(() => {
        const intervalId = setInterval(currentTimer, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <h1>{time} // {date}</h1>
        </>
    );
}

export default MyClockTime;
