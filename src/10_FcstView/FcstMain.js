import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FcstNav from './FcstNav';
import Fcst from './Fcst';
import UltraSrtFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';

const FcstMain = () => {
  return (
    <>
      <FcstNav />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Fcst />} />
          <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
          <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />
        </Routes>
      </main>
    </>
  );
};

export default FcstMain;