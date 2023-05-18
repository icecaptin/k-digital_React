import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const FcstNav = () => {
  return (
    <nav className='container'>
      <ul>
        <Routes>
          <Route
            path="/"
            element={<li><Link to="/" role="button">Home</Link></li>}
          />
          <Route
            path="/UltraSrtFcst"
            element={<li><Link to="/UltraSrtFcst" role="button">UltraSrtFcst</Link></li>}
          />
          <Route
            path="/VilageFcst"
            element={<li><Link to="/VilageFcst" role="button">VilageFcst</Link></li>}
          />
        </Routes>
      </ul>
    </nav>
  );
};

export default FcstNav;
