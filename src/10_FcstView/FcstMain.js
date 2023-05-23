import { Link, useLocation } from "react-router-dom";
import styles from './FcstMain.module.css';
import xy from "./getxy.json";
import { useState, useRef, useEffect } from "react";

const FcstMain = () => {
  const txtref = useRef();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedX, setSelectedX] = useState("");
  const [selectedY, setSelectedY] = useState("");

  useEffect(() => {
    txtref.current.focus();
  }, []);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };


  const handleDateChange = (e) => {
    const formattedDate = formatDate(e.target.value);
    setSelectedDate(formattedDate);
  };


  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    const selectedItem = xy.find((item) => item["행정구역코드"] === Number(e.target.value));
    if (selectedItem) {
      setSelectedX(selectedItem["격자 X"]);
      setSelectedY(selectedItem["격자 Y"]);
    } else {
      setSelectedX("");
      setSelectedY("");
    }
  };

  const ops = xy.map((item) => (
    <option value={item["행정구역코드"]} key={item["행정구역코드"]}>
      {item["1단계"]}
    </option>
  ));

  return (
    <>
      <article>
        <header>
          <h1>단기예보 선택</h1>
        </header>
        <div className="grid">
          <input type="date" id="dt" name="dt" value={selectedDate} onChange={handleDateChange} />
          <select ref={txtref} id="sel" name="sel" value={selectedCity} onChange={handleCityChange}>
            <option value="">선택</option>
            {ops}
          </select>
        </div>
        <footer>
          <Link to={`/ultra?date=${selectedDate}&city=${selectedCity}&x=${selectedX}&y=${selectedY}`} role="button" className={styles.linkfcst}>
            초단기예보
          </Link>
          <Link to={`/village?date=${selectedDate}&city=${selectedCity}&x=${selectedX}&y=${selectedY}`} role="button">
            단기예보
          </Link>

        </footer>
      </article>
    </>
  );
};

export default FcstMain;
