import React, { useState } from 'react';
import './App.css';
import Hello from './01/Hello.js'
import MyClock from './02/MyClock';
import BoxBox from './03/BoxBox';
import MyDiv from './04/MyDiv';
import AirTable from './05_aircondition/AirTable';
import Accident from './06_useEffect/Accident';

function App() {
  const [page, setPage] = useState('hello');
  const changePage = (newPage) => {
    setPage(newPage);
  };
  const getPage = () => {
    switch (page) {
      case 'hello':
        return <Hello />;
      case 'clock':
        return <MyClock />;
      case 'box':
        return <BoxBox />;
      case 'div':
        return <MyDiv />;
      case 'air':
        return <AirTable />;
      case 'accident':
        return <Accident />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li><button onClick={() => changePage('hello')}>Hello</button></li>
          <li><button onClick={() => changePage('clock')}>시계</button></li>
          <li><button onClick={() => changePage('box')}>박스</button></li>
          <li><button onClick={() => changePage('div')}>MyDiv</button></li>
          <li><button onClick={() => changePage('air')}>공기질</button></li>
          <li><button onClick={() => changePage('accident')}>사고건수</button></li>
        </ul>
      </nav>
      {getPage()}
    </>
  );
}

export default App;
