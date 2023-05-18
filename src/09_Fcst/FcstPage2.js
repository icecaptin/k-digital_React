import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter, useParams, useLocation} from 'react-router-dom';
import qs from 'query-string'

const FcstPage2 = () => {
    const loc = useLocation().search;
    const item = qs.parse(loc).item;
    let loc2 = loc.replace('&', '')
    loc2 = loc2.split('&')
    return (
        <>
        <article>
            <header><h1>fcstpage2</h1></header>
            <h2>{item}</h2>
        </article>
        </>
    )
}
export default FcstPage2;