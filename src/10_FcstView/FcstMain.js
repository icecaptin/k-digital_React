import { Link } from "react-router-dom";
import react from "react";
import xy from "./getxy.json";
import { useState, useRef, useEffect } from "react";

const FcstMain = () => {
  const txtref = useRef();

  useEffect(() => {
    txtref.current.focus();
  }, []);

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
          <div>
            <input type="date" id="dt" name="dt" />
          </div>
          <div>
            <select ref={txtref} id="sel" name="sel">
              <option value="">선택</option>
              {ops}
            </select>
          </div>
        </div>
        <footer>
          <Link to="/ultra" role="button">
            초단기예보
          </Link>
          <Link to="/village" role="button">
            단기예보
          </Link>
        </footer>
      </article>
    </>
  );
};

export default FcstMain;
