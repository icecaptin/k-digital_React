import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';

const FcstNav = () => {
    return (
        <>
        <nav>
            <ul>
                <li><Link to='/' role='button' >Home</Link></li>
                <li><Link to='/page1/:item' role='button' >Page1</Link></li>
                <li><Link to='/page2?item' role='button' >Page2</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default FcstNav;