import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FcstNav from './FcstNav';
import FcstMain from './FcstMain';
import UltraSrtFcst from './UltraSrtFcst';
import VilageFcst from './VilageFcst';

const Fcst = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FcstMain />} />
        <Route path="/UltraSrtFcst" element={<UltraSrtFcst />} />
        <Route path="/VilageFcst" element={<VilageFcst />} />
      </Routes>
    </>
  );
};

export default Fcst;
