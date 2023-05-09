import mvlist from "./moviedata.json";
import React, { useState, useEffect } from "react";
import './BoxRows.module.css';

const BoxRows = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRowClick = (row) => {
    setSelectedMovie(row);
  };

  const showMv = (row) => {
    console.log(row.openDt);
    return (
      <>
        <div>영화제목: {row.movieNm} 개봉일: {row.openDt}</div>
      </>
    );
  };
  
  const trTags = mvlist.map((row) => {
    console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

    let rankIntenText = row.rankInten;
    let rankIntenColor = "";

    if (parseInt(row.rankInten) === 1) {
      rankIntenText = `+${row.rankInten}`;
      rankIntenColor = "red";
    } else if (parseInt(row.rankInten) === -1) {
      rankIntenText = row.rankInten;
      rankIntenColor = "blue";
    } else {
      rankIntenText = "-";
    }

    let openDt = new Date(row.openDt);
    let openDtFormatted = `${openDt.getFullYear()}년 ${String(
      openDt.getMonth() + 1
    ).padStart(2, "0")}월 ${String(openDt.getDate()).padStart(2, "0")}일`;

    return (
      <tr className="trcl1" key={row.rank} onClick={() => handleRowClick(row)}>
        <td>{row.rank}</td>
        <td>{openDtFormatted}</td>
        <td>{row.movieNm}</td>
        <td>{parseInt(row.salesAmt).toLocaleString()}</td>
        <td style={{ color: rankIntenColor }}>{rankIntenText}</td>
        <td>{parseInt(row.salesAcc).toLocaleString()}</td>
      </tr>
    );
  });

  return (
    <>
      <tbody>{trTags}</tbody>
      <tfoot>
        <tr className="trcl2">
          <td colSpan={6}>{selectedMovie && showMv(selectedMovie)}</td>
        </tr>
      </tfoot>
    </>
  );
};
export default BoxRows;
