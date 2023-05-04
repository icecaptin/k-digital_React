import React, { useState, useEffect } from 'react';
import datat from "./datat.json";
import AccidentNav2 from './AccidentNav2';
import AccidentNav1 from './AccidentNav1';
import styles from './Accident.module.css';

const Accident = () => {
  const accidents = datat.data;
  let c1 = new Set(accidents.map(data => data.사고유형_대분류));
  c1 = [...c1];

  let c2 = accidents.map((data => [data.사고유형_대분류, data.사고유형_중분류]))
  const [sel1, setSel1] = useState(0);  //대분류 선택
  const [sel2, setSel2] = useState([]);  //중분류 선택
  const [selData, setSelData] = useState({});


  useEffect(() => {
  }, [sel1]);

  useEffect(() => {
    let temp = accidents.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1])
    setSelData(temp[0]);
  }, [sel2]);

  useEffect(() => {
    console.log('Taccident selData useeffect', selData);
  }, [selData]);

  useEffect(() => {
    console.log('Taccident sel1 useeffect', sel1);
    console.log('Taccident sel2 useeffect', sel2);
  });

  return (
    <>
      <main className="container">
        <article>
          <AccidentNav1 c1={c1} sel1={sel1} setSel1={setSel1} />
          <AccidentNav2 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
        </article>
      </main>
    </>
  )
}
export default Accident;
