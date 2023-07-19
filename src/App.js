import React, { useState } from 'react';
import './App.css';
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import BoxBox from './03/BoxBox';
import BoxBox2 from './03_2/BoxBox2';
import AirTable from './05_aircondition/AirTable';
import Accident from './06_useEffect/Accident';
import MyRef2 from './07_useref/MyRef2';
import Tour from './08/Tour';
import Fcst from './10_FcstView/Fcst';
import Cnt from './11/Cnt';
import CntAtom from './11/CntAtom';
import Lotto from './번외/Lotto';
import styles from './App.module.css';
function App() {
  const [page, setPage] = useState('hello'); //기본 페이지 설정
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
      case 'box2':
        return <BoxBox2 />;
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
      case 'cnt':
        return <Cnt />;
      case 'cntatom':
        return <CntAtom />;
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
            <li><div className={`${page === 'hello' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('hello')}>시작</div></li>
            <li><div className={`${page === 'clock' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('clock')}>시계</div></li>
            <li><div className={`${page === 'box' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('box')}>박스오피스1</div></li>
            <li><div className={`${page === 'box2' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('box2')}>박스오피스2</div></li>
            <li><div className={`${page === 'air' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('air')}>공기질</div></li>
            <li><div className={`${page === 'accident' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('accident')}>2022사고건수</div></li>
            <li><div className={`${page === 'myref2' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('myref2')}>myref</div></li>
            <li><div className={`${page === 'tour' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('tour')}>명소찾기</div></li>
            <li><div className={`${page === 'fcst' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('fcst')}>단기예보</div></li>
            <li><div className={`${page === 'cnt' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('cnt')}>Cnt</div></li>
            <li><div className={`${page === 'cntatom' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('cntatom')}>CntAtom</div></li>
            <li><div className={`${page === 'lotto' ? styles.selected : ''} ${styles.hovered}`} onClick={() => changePage('lotto')}>로또</div></li>
          </ul>
        </nav>
        <hr />
        {getPage()}
      </main>
    </>
  );
}

export default App;
