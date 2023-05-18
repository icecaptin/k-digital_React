import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import FcstNav from './FcstNav';
import FcstHome from './FcstHome';
import FcstPage1 from './FcstPage1';
import FcstPage2 from './FcstPage2';


const FcstMain = () => {
    
    return (
        <BrowserRouter>
            <>
                <FcstNav />
                <main className='container'>

                    <Routes>
                        <Route path='/' element={<FcstHome />} />
                        <Route path='/page1/:item' element={<FcstPage1 />} />
                        <Route path='/page2' element={<FcstPage2 />} />
                    </Routes>
                </main>
            </>
        </BrowserRouter>
    )
}

export default FcstMain;