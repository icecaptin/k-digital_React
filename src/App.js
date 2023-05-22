import React, { useState } from 'react';
import './App.css';
import { FaPlusCircle } from 'react-icons/fa';
import Hello from './01/Hello.js'
import MyClock from './02/MyClock';
import BoxBox from './03/BoxBox';
import BoxBox2 from './03_2/BoxBox2';
import MyDiv from './04/MyDiv';
import AirTable from './05_aircondition/AirTable';
import Accident from './06_useEffect/Accident';
import MyRef2 from './07_useref/MyRef2';
import Tour from './08/Tour';
import Fcst from './10_FcstView/Fcst';
import Lotto from './번외/Lotto';
function App() {
  const [page, setPage] = useState('fcst'); //기본 페이지 설정
  const changePage = (newPage) => {
    setPage(newPage);
  };
  const getPage = () => {
    switch (page) {
      case 'clock':
        return <MyClock />;
      case 'box':
        return <BoxBox />;
      case 'box2':
        return <BoxBox2 />;
      case 'div':
        return <MyDiv />;
      case 'air':
        return <AirTable />;
      case 'accident':
        return <Accident />;
      case 'myref2':
        return <MyRef2 />;
      case 'tour':
        return <Tour />;
      case 'fcst':
        return <Fcst />;
      case 'lotto':
        return <Lotto />;
      default:
        return null;
    }
  };

  return (
    <>
      <main className="container" data-theme="dark">
        <nav>
          <ul>
            <li><button onClick={() => changePage('clock')}>시계</button></li>
            <li><button onClick={() => changePage('box')}>박스오피스1</button></li>
            <li><button onClick={() => changePage('box2')}>박스오피스2</button></li>
            <li><button onClick={() => changePage('div')}>MyDiv</button></li>
            <li><button onClick={() => changePage('air')}>공기질</button></li>
            <li><button onClick={() => changePage('accident')}>사고건수</button></li>
            <li><button onClick={() => changePage('myref2')}>myref</button></li>
            <li><button onClick={() => changePage('tour')}>Tour</button></li>
            <li><button onClick={() => changePage('fcst')}>Fcst</button></li>
          </ul>
        </nav>
        {getPage()}
        {/* <footer>
          <button onClick={() => changePage('lotto')} className="lotto-button">
            <FaPlusCircle className="lotto-icon" />
            번외로또
          </button>
        </footer> */} {/* 잠시 보류*/}
      </main>
    </>
  );
}

export default App;
