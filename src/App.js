import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { TabsUnstyled, TabsListUnstyled, TabPanelUnstyled } from '@mui/base/TabsUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import Hello from './01/Hello.js'
import MyClock from './02/MyClock';
import Box from './03/Box';

function App() {
  return (
    <>
      <Router>
        <div>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button variant="contained" className='bts'><Link to="/01/Hello">초기</Link></Button>
            <Button variant="contained" className='bts'><Link to="/02/MyClock">시간</Link></Button>
            <Button variant="contained" className='bts'><Link to="/03/Box">박스오피스</Link></Button>
          </ButtonGroup>
        </div>

        <Routes>
          <Route path="/01/Hello" element={<Hello />} />
          <Route path="/02/MyClock" element={<MyClock />} />
          <Route path="/03/Box" element={<Box />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
