import React, { useState, useEffect } from "react";
import './BoxRows.module.css';

const BoxRows2 = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

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

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        if (selectedMovie) {
          return;
        }
        let formattedDate = selectedMovie.replaceAll("-", "");
        const apiUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${formattedDate}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieList(data.boxOfficeResult.dailyBoxOfficeList);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieList();
  }, [selectedMovie]);

  const trTags = movieList.map((row, index) => {
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
      <tr className="trcl1" key={index} onClick={() => handleRowClick(row)}>
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

export default BoxRows2;
