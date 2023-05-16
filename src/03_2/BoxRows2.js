import React from "react";

const BoxRows2 = ({ movieList }) => {
  const showMv = (row) => {
    return (
      <>
        <div>영화제목: {row.movieNm} 개봉일: {row.openDt}</div>
      </>
    );
  };

  if (!movieList) {
    return null; // movieList가 undefined인 경우 렌더링하지 않음
  }

  const trTags = movieList.map((row, index) => {
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
      <tr className="trcl1" key={index}>
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
      {trTags}
      <tr className="trcl2">
        <td colSpan={6}>{showMv(movieList[0])}</td>
      </tr>
    </>
  );
};

export default BoxRows2;
