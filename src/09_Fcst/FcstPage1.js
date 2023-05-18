import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';

const FcstPage1 = () => {
    const fruit = useParams().item;
    return (
        <>
        <article>
            <header><h1>fcstpage1</h1></header>
            {fruit}
        </article>
        </>
    )
}
export default FcstPage1;